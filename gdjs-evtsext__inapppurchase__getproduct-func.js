
if (typeof gdjs.evtsExt__InAppPurchase__GetProduct !== "undefined") {
  gdjs.evtsExt__InAppPurchase__GetProduct.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__GetProduct = {};


gdjs.evtsExt__InAppPurchase__GetProduct.userFunc0x93a500 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.store) return;
runtimeScene.getVariables().get(eventsFunctionContext.getArgument("variableName")).fromJSObject(
    store.get(eventsFunctionContext.getArgument("id"))
);

};
gdjs.evtsExt__InAppPurchase__GetProduct.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__GetProduct.userFunc0x93a500(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InAppPurchase__GetProduct.func = function(runtimeScene, id, variableName, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__GetProduct.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__InAppPurchase__GetProduct.registeredGdjsCallbacks = [];