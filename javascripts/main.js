"use strict";

let ulMessages = $("#ulMessages"),
    txtInput = $("#txtInput"),
    btnClear = $("#btnClear"),
    btnLargeText = $("#btnLargeText"),
    btnColor = $("#btnColor"),
    bgPicker = $("#bgPicker"),
    txtPicker = $("#txtPicker"),
    footerMain = $("#footerMain"),
    editToggle = false,
    editMessage;
function initMsg(arrayOfMsgs){
  arrayOfMsgs.messages.forEach(function(message, index) {
    Cathy.writeMsgArray(message);
    Cathy.writeMsgDOM(ulMessages, message, index);
  });
}

// function initMsg(arrayOfMsgs){
//   for(let i = 0; i < arrayOfMsgs.messages.length; i++){
//     Cathy.writeMsgArray(arrayOfMsgs.messages[i]);
//     Cathy.writeMsgDOM(ulMessages, arrayOfMsgs.messages[i], i);
//   }
// }


//delete individual message handler
$(document).on("click", "#ulMessages", function(event) {
  let target = $( event.target );
  if (target.html() === 'Delete'){





    let msgElement = target.parents(".right");
    // console.log("msgElement", msgElement);



//aha!!!! this next line is now sending the parent of the clicked delete button that is a list item to Cathy.removeMsg so that it can be removed!!!!!!!
    Cathy.removeMsg(msgElement);
    footerMain.html('<span class="pull-left">&copy; gitHeadz 2016. ****SAM REDUX****</span><span class="pull-right">Number of Messages: ' + Cathy.getMsgArray().length + '</span>');
  } else if (event.target.innerHTML == "Edit"){
    editToggle = true;
    txtInput.focus();
    txtInput.val('');
    editMessage = event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
  }
});


//I would like this next chunk of code to not be anonymous. Instead, I would like to make it so that both txtInput AND #userName trigger this function when they are clicked.
txtInput.keyup(function(){
  //I'd like to change this so that it opens a new "edit" window for the user, with a text input box that is pre-populated with the contents of editMessage, instead of focusing on the main message input and starting with a blank value.
  if (!editToggle){
    //event.which is the same as event.keyCode



        //  if enter was pressed, and the edit button was NOT "engaged" sends the txtInput.value to both Cathy.writeMsgArray and Cathy.writeMsgDom. It then sets txtInput.value to an empty string.
        //however, if enter is pressed and txtInput.value is empty, it alerts the user "Type Something...."
    if (event.which === 13){
      if(txtInput.val() === ''){
        alert("Type Something....");
      } else {
      let indexNum = Cathy.getMsgArray().length;
      let dateNow = new Date(Date.now());
      let userName = document.getElementById("userName").value;
      if(userName === ''){userName = 'Guest';}
      let msgObject = { "user": userName, "timestamp": dateNow, "message": txtInput.val()};
      Cathy.writeMsgDOM(ulMessages, msgObject, indexNum);
      Cathy.writeMsgArray(msgObject);
      txtInput.val('');
      }
    }




    //this else statement either prompts the user to type something or changes the innerHTML of editMessage to txtInput.value... it then set editToggle to false, thus "disengaging" the edit button.
  } else {
    if (event.which === 13){
      if(txtInput.val() === ''){
        alert("Type Something....");
      } else {
        editMessage.innerHTML = txtInput.val();
        editToggle = false;
        txtInput.val('');
      }
    }
  }
});

btnClear.click(function () {
  btnClear.disabled = true;
  ulMessages.html('');
  footerMain.html('<span class="pull-left">&copy; gitHeadz 2016. ****SAM REDUX****</span><span class="pull-right">No Messages</span>');
  Cathy.clearMsgArray();
});

btnLargeText.click(function(){
  $("body").toggleClass("embiggin");
  $("input").toggleClass("btn-embiggin");
});









btnColor.click(function(){
  let $modal = $("#myModal").find(".modal-content"),
  $body = $("body"),
  $messages = ("#messages"),
  $ulMessages = $("#ulMessages"),
  $heading = $(".panel-heading"),
  $footer = $(".panel-footer"),
  $tempBtns = $("button");
  
  $modal.css("color", txtPicker.val());
  $modal.css("background", bgPicker.val());
  $body.css("background-color", txtPicker.val());
  $("#messages").css("color", txtPicker.val());           //for some reason, I can't  
  $("#messages").css("background", bgPicker.val());       //refer to $messages properly
  $heading.css("color", txtPicker.val());
  $heading.css("background", bgPicker.val());
  $footer.css("color", txtPicker.val());
  $footer.css("background", bgPicker.val());
  $ulMessages.parent().css("color", txtPicker.val());
  $ulMessages.parent().css("background", bgPicker.val());

  
  // for (let i = 6; i < $tempBtns.length; i++){
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




















