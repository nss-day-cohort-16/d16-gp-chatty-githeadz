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
    msgHTML += '<li class="right clearfix" id="' + idCounter + '" style="color:' + txtPicker.value + '; background:' + bgPicker.value + '"><span class="chat-img pull-left"><img src="http://placehold.it/50/008844/fff&text=';
    msgHTML += msgObject.user.slice(0, 3);
    msgHTML += '" alt="User Avatar" class="img-circle"></span><span class="chat-img pull-right"><button class="btn btn-default" type="button" style="color:' + txtPicker.value + '; background:' + bgPicker.value + '">Delete</button></span><div class="chat-body clearfix"><div class="header"><small><span class="glyphicon glyphicon-time"></span>';
    msgHTML += msgObject.timestamp;
    msgHTML += '</small><p class="pull-right primary-font">';
    msgHTML += msgObject.user;
    msgHTML += '</p></div><strong class="msgFinder">';
    msgHTML += msgObject.message;
    msgHTML += '</strong></div></li>';
    elementID.innerHTML += msgHTML;
    btnClear.disabled = false;

  };

  oldCathy.removeMsgArray = function(index){
    var tempArray1 = msgArray.slice(0, index);
    var tempArray2 = msgArray.slice(index + 1);
    msgArray = tempArray1.concat(tempArray2);
  };

  return oldCathy;

})(Cathy || {});
