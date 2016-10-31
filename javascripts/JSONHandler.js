"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.loadMessages = function(callbackFn){
    var messageGetter = new XMLHttpRequest();
    messageGetter.open("GET", "data/messages.json");
    messageGetter.send();

    messageGetter.addEventListener("load", function(){
      var arrayMessages = JSON.parse(event.target.responseText);
      callbackFn(arrayMessages.messages);
    });
  };

  return oldCathy;

})(Cathy || {});
