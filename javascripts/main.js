"use strict";

var ulMessages = document.getElementById("ulMessages");
var txtInput = document.getElementById("txtInput");
var btnClear = document.getElementById("btnClear");
var checkTheme = document.getElementById("checkTheme");
var checkLargeText = document.getElementById("checkLargeText");


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
    if(txtInput.value === ''){
      alert("Type Something....");
    } else {
    var indexNum = Cathy.getMsgArray().length;
    var dateNow = new Date(Date.now());
    var userName = document.getElementById("userName").value;
    var msgObject = { "user": userName, "timestamp": dateNow, "message": txtInput.value};
    Cathy.writeMsgDOM(ulMessages, msgObject, indexNum);
    Cathy.writeMsgArray(msgObject);
    txtInput.value = '';
    var lastMade = document.getElementsByTagName("button");
    if (checkTheme.checked) {
      lastMade[lastMade.length-1].classList.add("emdarkin");
    }
    // if (checkLargeText.checked) {
    //   lastMade[lastMade.length-1].classList.add("embiggin");
    // }
    }
  }
});

btnClear.addEventListener("click", function () {
  btnClear.disabled = true;
  ulMessages.innerHTML = '';
});

checkLargeText.addEventListener("click", function(){
  document.getElementsByTagName("body")[0].classList.toggle("embiggin");
  document.getElementsByTagName("input")[0].classList.toggle("btn-embiggin");
  // var tempBtns = document.getElementsByTagName("button");
  // for (let i = 0; i < tempBtns.length; i++){
  //   tempBtns[i].classList.toggle("btn-embiggin");
  // }
});

checkTheme.addEventListener("click", function(){
  document.getElementsByTagName("body")[0].classList.toggle("emdarkin");
  document.getElementById("messages").classList.toggle("emdarkin");
  document.getElementById("ulMessages").parentElement.classList.toggle("emdarkin");
  var tempBtns = document.getElementsByTagName("button");
  for (let i = 1; i < tempBtns.length; i++){
    tempBtns[i].classList.toggle("emdarkin");
  }
});

Cathy.loadMessages(initMsg);
