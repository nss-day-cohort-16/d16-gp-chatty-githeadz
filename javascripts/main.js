"use strict";

let ulMessages = document.getElementById("ulMessages"),
    txtInput = document.getElementById("txtInput"),
    btnClear = document.getElementById("btnClear"),
    btnLargeText = document.getElementById("btnLargeText"),
    btnColor = document.getElementById("btnColor"),
    bgPicker = document.getElementById("bgPicker"),
    txtPicker = document.getElementById("txtPicker"),
    footerMain = document.getElementById("footerMain"),
    editToggle = false,
    editMessage;

function initMsg(arrayOfMsgs){
  for(let i = 0; i < arrayOfMsgs.messages.length; i++){
    Cathy.writeMsgArray(arrayOfMsgs.messages[i]);
    Cathy.writeMsgDOM(ulMessages, arrayOfMsgs.messages[i], i);
  }
}

ulMessages.addEventListener("click", function(){
  if (event.target.innerHTML == 'Delete'){
    var msgElement = event.target.parentElement.parentElement;
    Cathy.removeMsg(msgElement);
    footerMain.innerHTML = '<span class="pull-left">&copy; gitHeadz 2016.</span><span class="pull-right">Number of Messages: ' + Cathy.getMsgArray().length + '</span>';
  } else if (event.target.innerHTML == "Edit"){
    editToggle = true;
    txtInput.focus();
    txtInput.value = '';
    editMessage = event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
  }
});

txtInput.addEventListener("keyup", function(){
  if (!editToggle){
    if (event.which === 13){
      if(txtInput.value === ''){
        alert("Type Something....");
      } else {
      var indexNum = Cathy.getMsgArray().length;
      var dateNow = new Date(Date.now());
      var userName = document.getElementById("userName").value;
      if(userName === ''){userName = 'Guest';}
      var msgObject = { "user": userName, "timestamp": dateNow, "message": txtInput.value};
      Cathy.writeMsgDOM(ulMessages, msgObject, indexNum);
      Cathy.writeMsgArray(msgObject);
      txtInput.value = '';
      }
    }
  } else {
    if (event.which === 13){
      if(txtInput.value === ''){
        alert("Type Something....");
      } else {
        editMessage.innerHTML = txtInput.value;
        editToggle = false;
        txtInput.value = '';
      }
    }
  }
});

btnClear.addEventListener("click", function () {
  btnClear.disabled = true;
  ulMessages.innerHTML = '';
  footerMain.innerHTML = '<span class="pull-left">&copy; gitHeadz 2016.</span><span class="pull-right">No Messages</span>';
  Cathy.clearMsgArray();
});

btnLargeText.addEventListener("click", function(){
  document.getElementsByTagName("body")[0].classList.toggle("embiggin");
  document.getElementsByTagName("input")[0].classList.toggle("btn-embiggin");
  // var tempBtns = document.getElementsByTagName("button");
  // for (let i = 0; i < tempBtns.length; i++){
  //   tempBtns[i].classList.toggle("btn-embiggin");
  // }
});

btnColor.addEventListener("click", function(){
  document.getElementById("myModal").firstElementChild.firstElementChild.style.color=txtPicker.value;
  document.getElementById("myModal").firstElementChild.firstElementChild.style.background=bgPicker.value;
  document.getElementsByTagName("body")[0].style.backgroundColor=txtPicker.value;
  // document.getElementsByTagName("body")[0].style.backgroundColor=bgPicker.value;
  // document.getElementsByTagName("body")[0].setAttribute(backgroundColor, bgPicker.value);
  document.getElementById("messages").style.color=txtPicker.value;
  document.getElementById("messages").style.background=bgPicker.value;
  document.getElementById("ulMessages").parentElement.style.color=txtPicker.value;
  document.getElementById("ulMessages").parentElement.style.background=bgPicker.value;
  var tempBtns = document.getElementsByTagName("button");
  for (let i = 6; i < tempBtns.length; i++){
    tempBtns[i].style.color=txtPicker.value;
    tempBtns[i].style.background=bgPicker.value;
  }
  var tempLis = document.getElementsByTagName("li");
  for(let i = 0; i < tempLis.length; i++){
    document.getElementsByTagName("li")[i].style.color=txtPicker.value;
    document.getElementsByTagName("li")[i].style.background=bgPicker.value;
  }
});

Cathy.loadMessages(initMsg);
