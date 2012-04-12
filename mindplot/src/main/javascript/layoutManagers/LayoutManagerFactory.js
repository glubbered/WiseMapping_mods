mindplot.layoutManagers.LayoutManagerFactory = {};
mindplot.layoutManagers.LayoutManagerFactory.managers = {
    OriginalLayoutManager:mindplot.layoutManagers.OriginalLayoutManager,
    FreeMindLayoutManager:mindplot.layoutManagers.FreeMindLayoutManager
};
mindplot.layoutManagers.LayoutManagerFactory.getManagerByName = function(name){
    var manager = mindplot.layoutManagers.LayoutManagerFactory.managers[name+"Manager"];
    if(core.Utils.isDefined(manager)){
        return manager;
    }
    else{
        return mindplot.layoutManagers.LayoutManagerFactory.managers["OriginalLayoutManager"]; 
    }
};


