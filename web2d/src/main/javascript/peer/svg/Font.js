/*
*    Copyright [2011] [wisemapping]
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

web2d.peer.svg.Font = function()
{
    this._size = 10;
    this._style = "normal";
    this._weight = "normal";
};

web2d.peer.svg.Font.prototype.init = function(args)
{
    if (core.Utils.isDefined(args.size))
    {
        this._size = parseInt(args.size);
    }
    if (core.Utils.isDefined(args.style))
    {
        this._style = args.style;
    }
    if (core.Utils.isDefined(args.weight))
    {
        this._weight = args.weight;
    }
};

web2d.peer.svg.Font.prototype.getHtmlSize = function (scale)
{
    var result = 0;
    if (this._size == 6)
    {
        result = this._size * scale.height * 43 / 32;
    }
    if (this._size == 8)
    {
        result = this._size * scale.height * 42 / 32;
    }
    else if (this._size == 10)
    {
        result = this._size * scale.height * 42 / 32;
    }
    else if (this._size == 15)
    {
        result = this._size * scale.height * 42 / 32;
    }

    return result;
};

web2d.peer.svg.Font.prototype.getGraphSize = function (scale)
{
    return this._size * 43 / 32;
};

web2d.peer.svg.Font.prototype.getSize = function ()
{
    return parseInt(this._size);
};

web2d.peer.svg.Font.prototype.getStyle = function ()
{
    return this._style;
};

web2d.peer.svg.Font.prototype.getWeight = function ()
{
    return this._weight;
};

web2d.peer.svg.Font.prototype.setSize = function (size)
{
    this._size = size;
};

web2d.peer.svg.Font.prototype.setStyle = function (style)
{
    this._style = style;
};

web2d.peer.svg.Font.prototype.setWeight = function (weight)
{
    this._weight = weight;
};

web2d.peer.svg.Font.prototype.getWidthMargin = function ()
{
    var result = 0;
    if (this._size == 10 || this._size == 6)
    {
        result = 4;
    }
    return result;
};
