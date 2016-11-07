"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){

    let $element = $(myElement);

    Cathy.removeMsgArray(parseInt(myElement[0].id), $element);

    myElement.remove();

    var tempArray = $("li");
    for (let i = 0; i < tempArray.length; i++){
      tempArray[i].setAttribute("id", i);
    }
  };

  return oldCathy;

})(Cathy || {});