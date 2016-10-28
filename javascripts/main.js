"use strict";

var ulMessages = document.getElementById("ulMessages");
var txtInput = document.getElementById("txtInput");
var btnClear = document.getElementById("btnClear");
var genericUser = "Guest";

function initMsg(arrayOfMsgs){
  for(let i = 0; i < arrayOfMsgs.length; i++){
    Cathy.writeMsgArray(arrayOfMsgs[i]);
    Cathy.writeMsgDOM(ulMessages, arrayOfMsgs[i], i);
  }
}

ulMessages.addEventListener("click", function(){
  if (event.target.innerHTML == 'Delete'){
    var msgElement = event.target.parentElement.parentElement;
    Cathy.removeMsg(msgElement);    
  }
});

txtInput.addEventListener("keyup", function(){
  if (event.which === 13){
    var indexNum = Cathy.getMsgArray().length;
    var msgObject = { "user": genericUser, "timestamp": "0:00", "message": txtInput.value};
    Cathy.writeMsgDOM(ulMessages, msgObject, indexNum);
    Cathy.writeMsgArray(msgObject);
    txtInput.value = '';
  }
});

Cathy.loadMessages(initMsg);
