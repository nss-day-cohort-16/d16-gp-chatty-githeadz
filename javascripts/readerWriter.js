"use strict";
var Cathy = (function (oldCathy) {
  let msgArray = [];

  oldCathy.getMsgArray = () => msgArray;

  oldCathy.writeMsgArray = (msgObject) => {msgArray.push(msgObject);};

  oldCathy.writeMsgDOM = function(elementID, msgObject, idCounter){
    let msgHTML = '',
    userName = msgObject.user.split(" "),
    firstName = userName[0],
    lastName = userName[userName.length - 1],
    firstInit = firstName.slice(0, 1),
    lastInit = lastName.slice(0, 1),
    initials = (firstInit + lastInit).toUpperCase();


    msgHTML = `<li class="right clearfix" id="${idCounter}" style="color:${txtPicker.value}; background:${bgPicker.value}"><span class="chat-img pull-left"><img src="http://placehold.it/50/008844/fff&text=${initials}" alt="User Avatar" class="img-circle"></span><span class="chat-img pull-right"><button class="btn btn-default btnEdit" type="button" style="color:${txtPicker.value}; background:${bgPicker.value}">Edit</button></span><span class="chat-img pull-right"><button class="btn btn-default btnDelete" type="button" style="color:${txtPicker.value}; background:${bgPicker.value}">Delete</button></span><div class="chat-body clearfix"><div class="header"><small><span class="glyphicon glyphicon-time"></span><stamp>${msgObject.timestamp}</stamp></small><p class="pull-right primary-font">${msgObject.user}</p></div><strong class="msgFinder">${msgObject.message}</strong></div></li>`;

    $(elementID).append(msgHTML);

    btnClear.disabled = false;
 



 // gonna termporarily disable this if statement which limits the message number to 20.
    // if (idCounter == 19) {
    //   // Cathy.removeMsg($(elementID).children().eq(0));
    //   Cathy.removeMsg(elementID.firstElementChild);
    // }






    footerMain.html(`<span class="pull-left">&copy; gitHeadz 2016. ****Sam Phillips jQuery Edition****</span><span class="pull-right">Number of Messages: ${idCounter + 1}</span>`);
  };

  oldCathy.removeMsgArray = function(id, $element){
    msgArray = $.grep(msgArray, function(message, n) {
       return n === id;
    }, true);
  };
  oldCathy.clearMsgArray = () => {msgArray = [];};
 
  return oldCathy;

})(Cathy || {});





















