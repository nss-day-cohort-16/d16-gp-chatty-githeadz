"use strict";
var Cathy = (function (oldCathy) {



//loads the json file and sends to callback initMsg that writes json values to the message array and the dom
  oldCathy.loadMessages = (callbackFn) => {$.ajax({url: "data/messages.json"}).done(callbackFn);};




  //I'm pretty sure the above code works fine, but I'm keeping what's below because I can't properly test it until I get the delete message button working again




 // oldCathy.loadMessages = function(callbackFn){
 //    $.ajax({
 //      url: "data/messages.json"
 //    }).done(callbackFn);
 //  };

  return oldCathy;

})(Cathy || {});
