/*    Copyright [2011] [wisemapping]
*
*   Licensed under WiseMapping Public License, Version 1.0 (the "License").
*   It is basically the Apache License, Version 2.0 (the "License") plus the
*   "powered by wisemapping" text requirement on every single page;
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the license at
*
*       http://www.wisemapping.org/license
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*/
mindplot.XMLMindmapSerializer_Beta = function()
{

};

mindplot.XMLMindmapSerializer_Beta.prototype.toXML = function(mindmap)
{
    core.assert(mindmap, "Can not save a null mindmap");

    var document = core.Utils.createDocument();

    // Store map attributes ...
    var mapElem = document.createElement("map");
    var name = mindmap.getId();
    if (core.Utils.isDefined(name))
    {
        mapElem.setAttribute('name', name);
    }
    document.appendChild(mapElem);

    // Create branches ...
    var topics = mindmap.getBranches();
    for (var i = 0; i < topics.length; i++)
    {
        var topic = topics[i];
        var topicDom = this._topicToXML(document, topic);
        mapElem.appendChild(topicDom);
    }

    return document;
};

mindplot.XMLMindmapSerializer_Beta.prototype._topicToXML = function(document, topic)
{
    var parentTopic = document.createElement("topic");

    // Set topic attributes...
    if (topic.getType() == mindplot.NodeModel.CENTRAL_TOPIC_TYPE)
    {
        parentTopic.setAttribute("central", true);
    } else
    {
        var parent = topic.getParent();
        if (parent == null || parent.getType() == mindplot.NodeModel.CENTRAL_TOPIC_TYPE)
        {
            var pos = topic.getPosition();
            parentTopic.setAttribute("position", pos.x + ',' + pos.y);
        } else
        {
            var order = topic.getOrder();
             if(core.Utils.isDefined(order) && !isNaN(order-0))
             {
                 parentTopic.setAttribute("order", order);
             }
        }
    }

    var text = topic.getText();
    if (core.Utils.isDefined(text)) {
        parentTopic.setAttribute('text', text);
    }

    var shape = topic.getShapeType();
    if (core.Utils.isDefined(shape)) {
        parentTopic.setAttribute('shape', shape);
    }

    if(topic.areChildrenShrinked())
    {
        parentTopic.setAttribute('shrink',true);
    }

    // Font properties ...
    var font = "";

    var fontFamily = topic.getFontFamily();
    font += (fontFamily ? fontFamily : '') + ';';

    var fontSize = topic.getFontSize();
    font += (fontSize ? fontSize : '') + ';';

    var fontColor = topic.getFontColor();
    font += (fontColor ? fontColor : '') + ';';

    var fontWeight = topic.getFontWeight();
    font += (fontWeight ? fontWeight : '') + ';';

    var fontStyle = topic.getFontStyle();
    font += (fontStyle ? fontStyle : '') + ';';

    if (core.Utils.isDefined(fontFamily) || core.Utils.isDefined(fontSize) || core.Utils.isDefined(fontColor)
            || core.Utils.isDefined(fontWeight )|| core.Utils.isDefined(fontStyle))
    {
        parentTopic.setAttribute('fontStyle', font);
    }

    var bgColor = topic.getBackgroundColor();
    if (core.Utils.isDefined(bgColor)) {
        parentTopic.setAttribute('bgColor', bgColor);
    }

    var brColor = topic.getBorderColor();
    if (core.Utils.isDefined(brColor)) {
        parentTopic.setAttribute('brColor', brColor);
    }

    //ICONS
    var icons = topic.getIcons();
    for (var i = 0; i < icons.length; i++)
    {
        var icon = icons[i];
        var iconDom = this._iconToXML(document, icon);
        parentTopic.appendChild(iconDom);
    }

    //LINKS
    var links = topic.getLinks();
    for (var i = 0; i < links.length; i++)
    {
        var link = links[i];
        var linkDom = this._linkToXML(document, link);
        parentTopic.appendChild(linkDom);
    }

    var notes = topic.getNotes();
    for (var i = 0; i < notes.length; i++)
    {
        var note = notes[i];
        var noteDom = this._noteToXML(document, note);
        parentTopic.appendChild(noteDom);
    }

    //CHILDREN TOPICS
    var childTopics = topic.getChildren();
    for (var i = 0; i < childTopics.length; i++)
    {
        var childTopic = childTopics[i];
        var childDom = this._topicToXML(document, childTopic);
        parentTopic.appendChild(childDom);

    }

    return parentTopic;
};

mindplot.XMLMindmapSerializer_Beta.prototype._iconToXML = function(document, icon)
{
    var iconDom = document.createElement("icon");
    iconDom.setAttribute('id', icon.getIconType());
    return iconDom;
};

mindplot.XMLMindmapSerializer_Beta.prototype._linkToXML = function(document, link)
{
    var linkDom = document.createElement("link");
    linkDom.setAttribute('url', link.getUrl());
    return linkDom;
};

mindplot.XMLMindmapSerializer_Beta.prototype._noteToXML = function(document, note)
{
    var noteDom = document.createElement("note");
    noteDom.setAttribute('text', note.getText());
    return noteDom;
};

mindplot.XMLMindmapSerializer_Beta.prototype.loadFromDom = function(dom)
{
    core.assert(dom, "Dom can not be null");
    var rootElem = dom.documentElement;

    // Is a wisemap?.
    core.assert(rootElem.tagName == mindplot.XMLMindmapSerializer_Beta.MAP_ROOT_NODE, "This seem not to be a map document.");

    // Start the loading process ...
    var mindmap = new mindplot.Mindmap();    

    var children = rootElem.childNodes;
    for (var i = 0; i < children.length; i++)
    {
        var child = children[i];
        if (child.nodeType == 1)
        {
            var topic = this._deserializeNode(child, mindmap);
            mindmap.addBranch(topic);
        }
    }
    return mindmap;
};

mindplot.XMLMindmapSerializer_Beta.prototype._deserializeNode = function(domElem, mindmap)
{
    var type = (domElem.getAttribute('central') != null) ? mindplot.NodeModel.CENTRAL_TOPIC_TYPE : mindplot.NodeModel.MAIN_TOPIC_TYPE;
    var topic = mindmap.createNode(type);

    // Load attributes...
    var text = domElem.getAttribute('text');
    if (core.Utils.isDefined(text)) {
        topic.setText(text);
    }

    var order = domElem.getAttribute('order');
    if (core.Utils.isDefined(order) && !isNaN(order-0)) {
        topic.setOrder(order);
    }

    var shape = domElem.getAttribute('shape');
    if (core.Utils.isDefined(shape)) {
        topic.setShapeType(shape);
    }

    var isShrink = domElem.getAttribute('shrink');
    if(core.Utils.isDefined(isShrink))
    {
        topic.setChildrenShrinked(isShrink);
    }

    var fontStyle = domElem.getAttribute('fontStyle');
    if (core.Utils.isDefined(fontStyle)) {
        var font = fontStyle.split(';');

        if (font[0])
        {
            topic.setFontFamily(font[0]);
        }

        if (font[1])
        {
            topic.setFontSize(font[1]);
        }

        if (font[2])
        {
            topic.setFontColor(font[2]);
        }

        if (font[3])
        {
            topic.setFontWeight(font[3]);
        }

        if (font[4])
        {
            topic.setFontStyle(font[4]);
        }
    }

    var bgColor = domElem.getAttribute('bgColor');
    if (core.Utils.isDefined(bgColor)) {
        topic.setBackgroundColor(bgColor);
    }

    var borderColor = domElem.getAttribute('brColor');
    if (core.Utils.isDefined(borderColor)) {
        topic.setBorderColor(borderColor);
    }

    var position = domElem.getAttribute('position');
    if (core.Utils.isDefined(position)) {
        var pos = position.split(',');
        topic.setPosition(pos[0], pos[1]);
    }

    //Creating icons and children nodes
    var children = domElem.childNodes;
    for (var i = 0; i < children.length; i++)
    {
        var child = children[i];
        if (child.nodeType == 1)
        {
            core.assert(child.tagName == "topic" || child.tagName == "icon" || child.tagName == "link" || child.tagName == "note", 'Illegal node type:' + child.tagName);
            if (child.tagName == "topic") {
                var childTopic = this._deserializeNode(child, mindmap);
                childTopic.connectTo(topic);
            } else if(child.tagName == "icon") {
                var icon = this._deserializeIcon(child, topic);
                topic.addIcon(icon);
            } else if(child.tagName == "link") {
                var link = this._deserializeLink(child, topic);
                topic.addLink(link);
            } else if(child.tagName == "note") {
                var note = this._deserializeNote(child, topic);
                topic.addNote(note);
            }
        }
    }
    ;
    return topic;
};

mindplot.XMLMindmapSerializer_Beta.prototype._deserializeIcon = function(domElem, topic)
{
    return topic.createIcon(domElem.getAttribute("id"));
};

mindplot.XMLMindmapSerializer_Beta.prototype._deserializeLink = function(domElem, topic)
{
    return topic.createLink(domElem.getAttribute("url"));
};

mindplot.XMLMindmapSerializer_Beta.prototype._deserializeNote = function(domElem, topic)
{
    return topic.createNote(domElem.getAttribute("text"));
};

mindplot.XMLMindmapSerializer_Beta.MAP_ROOT_NODE = 'map';