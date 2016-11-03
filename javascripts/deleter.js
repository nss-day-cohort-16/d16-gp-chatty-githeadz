"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){
    Cathy.removeMsgArray(parseInt(myElement.id));
    ulMessages.removeChild(myElement);

    // so this is sending myElement (which is passed in by ????) to the method .removeChild

    var tempArray = ulMessages.getElementsByTagName("li");

    for (let i = parseInt(myElement.id); i < tempArray.length; i++){
      tempArray[i].setAttribute("id", i);
    }
  };

  return oldCathy;

})(Cathy || {});


