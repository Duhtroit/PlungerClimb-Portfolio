
if (typeof gdjs.evtsExt__InAppPurchase__WatchItemEvent !== "undefined") {
  gdjs.evtsExt__InAppPurchase__WatchItemEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__WatchItemEvent = {};


gdjs.evtsExt__InAppPurchase__WatchItemEvent.userFunc0x93a500 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.store) return;

store.when(eventsFunctionContext.getArgument("id"), eventsFunctionContext.getArgument("event"), () => {
    const variable = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("variableName"));
    variable.setBoolean(true);
});

};
gdjs.evtsExt__InAppPurchase__WatchItemEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__WatchItemEvent.userFunc0x93a500(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InAppPurchase__WatchItemEvent.func = function(runtimeScene, id, variableName, event, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "id") return id;
if (argName === "variableName") return variableName;
if (argName === "event") return event;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__WatchItemEvent.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InAppPurchase__WatchItemEvent.registeredGdjsCallbacks = [];