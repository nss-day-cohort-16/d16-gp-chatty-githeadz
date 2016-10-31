"use strict";
var Cathy = (function (oldCathy) {
  var msgArray = [];

  oldCathy.getMsgArray = function(){
    return msgArray;
  };

  oldCathy.writeMsgArray = function(msgObject){
    msgArray.push(msgObject);
  };
  
  oldCathy.writeMsgDOM = function(elementID, msgObject, idCounter){

    var msgHTML = '';
    var userName = msgObject.user.split(" ");
    var firstName = userName[0];
    var lastName = userName[userName.length - 1];

    firstName = firstName.slice(0, 1);
    lastName = lastName.slice(0, 1);
    var initials = (firstName + lastName).toUpperCase();

    msgHTML += '<li class="right clearfix" id="' + idCounter + '" style="color:' + txtPicker.value + '; background:' + bgPicker.value + '"><span class="chat-img pull-left"><img src="http://placehold.it/50/008844/fff&text=';
    msgHTML += initials;
    msgHTML += '" alt="User Avatar" class="img-circle"></span><span class="chat-img pull-right"><button class="btn btn-default" type="button" style="color:' + txtPicker.value + '; background:' + bgPicker.value + '">Delete</button></span><div class="chat-body clearfix"><div class="header"><small><span class="glyphicon glyphicon-time"></span>';
    msgHTML += msgObject.timestamp;
    msgHTML += '</small><p class="pull-right primary-font">';
    msgHTML += msgObject.user;
    msgHTML += '</p></div><strong class="msgFinder">';
    msgHTML += msgObject.message;
    msgHTML += '</strong></div></li>';
    elementID.innerHTML += msgHTML;
    btnClear.disabled = false;

    if (idCounter == 19) {
      Cathy.removeMsg(elementID.firstElementChild);
    }

    footerMain.innerHTML = '<span class="pull-left">&copy; gitHeadz 2016.</span><span class="pull-right">Number of Messages: ' + (idCounter + 1) + '</span>';
  };

  oldCathy.removeMsgArray = function(index){
    var tempArray1 = msgArray.slice(0, index);
    var tempArray2 = msgArray.slice(index + 1);
    msgArray = tempArray1.concat(tempArray2);
  };

  oldCathy.clearMsgArray = function(){
    msgArray = [];
  };
  return oldCathy;

})(Cathy || {});
