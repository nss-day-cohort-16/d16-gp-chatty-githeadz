"use strict";

// let ulMessages = $("#ulMessages"),
//     txtInput = $("#txtInput"),
//     btnClear = $("#btnClear"),
//     btnLargeText = $("#btnLargeText"),
//     btnColor = $("#btnColor"),
//     bgPicker = $("#bgPicker"),
//     txtPicker = $("#txtPicker"),
//     footerMain = $("#footerMain"),
//     editToggle = false,
//     editMessage;



//ORIGINAL CODE BELOW... i'm afraid that changing all these to jQuery might totally screw up their properties/how they're used later... we shall see... I wanted to save the original code just in case


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

//runs when page is initialized to process messages.json, adding the array contents to msgArray(found in readerWriter.js) and inserting it into the DOM
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
    footerMain.innerHTML = '<span class="pull-left">&copy; gitHeadz 2016. ****SCP REDUX****</span><span class="pull-right">Number of Messages: ' + Cathy.getMsgArray().length + '</span>';
  } else if (event.target.innerHTML == "Edit"){
    editToggle = true;
    txtInput.focus();
    txtInput.value = '';
    editMessage = event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
  }
});


//I would like this next chunk of code to not be anonymous. Instead, I would like to make it so that both txtInput AND #userName trigger this function when they are clicked.


//adds an event listener to txtInput that triggers an anonymous function 
txtInput.addEventListener("keyup", function(){
  //editToggle is being inverted here.... I think... don't know what that does, though.
  //it seems like this is saying "if the editToggle inverse is true, then execute the first chunk. else, execute the second chunk.".... soooo if editToggle is false, execute the first chunk... but what is editToggle?
  //ok, I see now. editToggle is a variable defined in the beginning of main.js.. it starts out set to false... however, if the user presses a message's "Edit" button, it is set to true.
  //So, this next if statement says that, once this anonymous function is triggered, if the edit button was just pressed, run the second chunk of code, which either prompts the user to type something or updates the contents of whatever the current editMessage is to whatever the user typed...
  //I'd like to change this so that it opens a new "edit" window for the user, with a text input box that is pre-populated with the contents of editMessage, instead of focusing on the main message input and starting with a blank value.
  if (!editToggle){
    //event.which is the same as event.keyCode



        //  if enter was pressed, and the edit button was NOT "engaged" sends the txtInput.value to both Cathy.writeMsgArray and Cathy.writeMsgDom. It then sets txtInput.value to an empty string.
        //however, if enter is pressed and txtInput.value is empty, it alerts the user "Type Something...."
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




    //this else statement either prompts the user to type something or changes the innerHTML of editMessage to txtInput.value... it then set editToggle to false, thus "disengaging" the edit button.
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
  footerMain.innerHTML = '<span class="pull-left">&copy; gitHeadz 2016. ****SCP REDUX****</span><span class="pull-right">No Messages</span>';
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
