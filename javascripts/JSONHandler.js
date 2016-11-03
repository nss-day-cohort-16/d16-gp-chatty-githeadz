"use strict";
var Cathy = (function (oldCathy) {
//loads the json file and sends to callback initMsg that writes json values to the message array and the dom
  oldCathy.loadMessages = (callbackFn) => {$.ajax({url: "data/messages.json"}).done(callbackFn);};
  return oldCathy;
})(Cathy || {});
