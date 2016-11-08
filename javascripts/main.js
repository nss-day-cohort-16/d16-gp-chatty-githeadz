"use strict";

let ulMessages = $("#ulMessages"),
    txtInput = $("#txtInput"),
    editInput = $("#editInput"),
    editSave = $("#editSave"),
    btnClear = $("#btnClear"),
    btnLargeText = $("#btnLargeText"),
    btnColor = $("#btnColor"),
    bgPicker = $("#bgPicker"),
    txtPicker = $("#txtPicker"),
    footerMain = $("#footerMain"),
    $userName = $("#userName"),
    editToggle = false,
    editMessage;
    
function initMsg(arrayOfMsgs){
  arrayOfMsgs.messages.forEach(function(message, index) {
    Cathy.writeMsgArray(message);
    Cathy.writeMsgDOM(ulMessages, message, index);
  });
}

function inputHandler(event) {
  if (!editToggle){
    if (event.which === 13){
      if(txtInput.val() === ''){
        alert("Type Something....");
      } else {
      let indexNum = Cathy.getMsgArray().length,
      dateNow = new Date(Date.now()),
      userName = document.getElementById("userName").value;
      if(userName === ''){userName = 'Guest';}
      let msgObject = { "user": userName, "timestamp": dateNow, "message": txtInput.val()};
      Cathy.writeMsgDOM(ulMessages, msgObject, indexNum);
      Cathy.writeMsgArray(msgObject);
      txtInput.val('');
      }
    }
  } else {
    if (event.which === 13){
      if(editInput.val() === ''){
        alert("Type Something....");
      } else {
        editMessage.html(editInput.val());
        editToggle = false;
        editInput.val('');
      }
    }
  }
}

$(document).on("click", "#ulMessages", function(event) {
  let target = $(event.target);
  if (target.html() === 'Delete'){
    let msgElement = target.parents(".right");
    Cathy.removeMsg(msgElement);
    footerMain.html('<span class="pull-left">&copy; gitHeadz 2016. ****Sam Phillips jQuery Edition****</span><span class="pull-right">Number of Messages: ' + Cathy.getMsgArray().length + '</span>');
  } else if (target.html() == "Edit"){
    let $messageContents = $(event.target).parents("li").find("strong");
    editToggle = true;
    editInput.val($messageContents.html());
    editMessage = $messageContents;
    editInput.focus();
  }
});

txtInput.keyup(inputHandler);
$userName.keyup(inputHandler);
editInput.keyup(inputHandler);
editSave.click(inputHandler);


$("#editModal").on('shown.bs.modal', function () {
  editInput.focus();
});

$("#editModal").on("click", "#editSave", function(event) {
  editMessage.html(editInput.val());
  editToggle = false;
  editInput.val('');
});

btnClear.click(function () {
  btnClear.disabled = true;
  ulMessages.html('');
  footerMain.html('<span class="pull-left">&copy; gitHeadz 2016. ****Sam Phillips jQuery Edition****</span><span class="pull-right">No Messages</span>');
  Cathy.clearMsgArray();
});

btnLargeText.click(function(){
  $("body").toggleClass("embiggin");
  $("input").toggleClass("btn-embiggin");
});

btnColor.click(function(){
  let $modal = $("#myModal").find(".modal-content"),
  $editModal = $("#editModal").find(".modal-content"),
  $body = $("body"),
  $messages = $("#messages"),
  $ulMessages = $("#ulMessages"),
  $heading = $(".panel-heading"),
  $footer = $(".panel-footer"),
  $tempBtns = $("button");
  
  $modal.css("color", txtPicker.val());
  $modal.css("background", bgPicker.val());
  $editModal.css("color", txtPicker.val());
  $editModal.css("background", bgPicker.val());
  $body.css("background-color", txtPicker.val());
  $messages.css("color", txtPicker.val());             
  $messages.css("background", bgPicker.val());
  $ulMessages.parent().css("color", txtPicker.val());
  $ulMessages.parent().css("background", bgPicker.val());
  
  for (let i = 0; i < $tempBtns.length; i++){
    $tempBtns.eq(i).css("color", txtPicker.val());
    $tempBtns.eq(i).css("background", bgPicker.val());
  }
  
  let $tempLis = $("li");
  for(let i = 0; i < $tempLis.length; i++){
    $tempLis.eq(i).css("color", txtPicker.val());
    $tempLis.eq(i).css("background", bgPicker.val());
  }
});

Cathy.loadMessages(initMsg);




















