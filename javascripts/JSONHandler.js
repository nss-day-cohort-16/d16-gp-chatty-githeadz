"use strict";

var Cathy = (function (oldCathy) {

  oldCathy.loadMessages = (callbackFn) => {$.ajax({url: "data/messages.json"}).done(callbackFn);};

  return oldCathy;

})(Cathy || {});