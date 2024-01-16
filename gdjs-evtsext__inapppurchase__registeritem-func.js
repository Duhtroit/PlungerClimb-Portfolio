
if (typeof gdjs.evtsExt__InAppPurchase__RegisterItem !== "undefined") {
  gdjs.evtsExt__InAppPurchase__RegisterItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__RegisterItem = {};


gdjs.evtsExt__InAppPurchase__RegisterItem.userFunc0x939f48 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.store) return;
store.register({
    id: eventsFunctionContext.getArgument("id"),
    type: eventsFunctionContext.getArgument("type"),
    alias: eventsFunctionContext.getArgument("alias"),
});

};
gdjs.evtsExt__InAppPurchase__RegisterItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__RegisterItem.userFunc0x939f48(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InAppPurchase__RegisterItem.func = function(runtimeScene, id, type, alias, parentEventsFunctionContext) {
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
if (argName === "type") return type;
if (argName === "alias") return alias;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__RegisterItem.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InAppPurchase__RegisterItem.registeredGdjsCallbacks = [];