"use strict";
console.log("Reader: ", Cathy);
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
    msgHTML += '<li class="right clearfix" id="' + idCounter + '"><span class="chat-img pull-right"><img src="http://placehold.it/50/FA6F57/fff&text=';
    msgHTML += msgObject.user;
    msgHTML += '" alt="User Avatar" class="img-circle"><button class="btn btn-default" type="button">Delete</button></span><div class="chat-body clearfix"><div class="header"><small class=" text-muted"><span class="glyphicon glyphicon-time"></span>';
    msgHTML += msgObject.timestamp;
    msgHTML += '</small><strong class="pull-right primary-font">';
    msgHTML += msgObject.user;
    msgHTML += '</strong></div><p>';
    msgHTML += msgObject.message;
    msgHTML += '</p></div></li>';
    elementID.innerHTML += msgHTML;
  };

  oldCathy.removeMsgArray = function(index){
    var tempArray1 = msgArray.slice(0, index);
    var tempArray2 = msgArray.slice(index + 1);
    msgArray = tempArray1.concat(tempArray2);
  };

  return oldCathy;

})(Cathy || {});
