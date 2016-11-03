"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.loadMessages = function(callbackFn){
    $.ajax({
      url: "data/messages.json"
    }).done(callbackFn);

  };

  return oldCathy;

})(Cathy || {});
