mindplot.EventBus = new Class({
    options: {

    },

    initialize: function(options) {
        this.setOptions(options);
    }

});
mindplot.EventBus.implement(new Events);
mindplot.EventBus.implement(new Options);

mindplot.EventBus.events ={
    NodeResizeEvent:'NodeResizeEvent',
    NodeMoveEvent:'NodeMoveEvent',
    NodeDisconnectEvent:'NodeDisconnectEvent',
    NodeConnectEvent:'NodeConnectEvent',
    NodeRepositionateEvent:'NodeRepositionateEvent',
    NodeShrinkEvent:'NodeShrinkEvent',
    NodeMouseOverEvent:'NodeMouseOverEvent',
    NodeMouseOutEvent:'NodeMouseOutEvent'
};

mindplot.EventBus.instance = new mindplot.EventBus();