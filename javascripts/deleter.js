"use strict";
console.log("Deleter: ", Cathy);
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){
    Cathy.removeMsgArray(parseInt(myElement.id));
    ulMessages.removeChild(myElement);

    var tempArray = ulMessages.getElementsByTagName("li");

    for (let i = parseInt(myElement.id); i < tempArray.length; i++){
      tempArray[i].setAttribute("id", i);
    }
  };

  return oldCathy;

})(Cathy || {});


