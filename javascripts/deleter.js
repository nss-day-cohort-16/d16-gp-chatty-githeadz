"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){



    //this little chunk is gonna need to be changed too
    Cathy.removeMsgArray(parseInt(myElement.id));
    //the message limiter also calls this function, but it's not what I'm looking for right now so I disabled it.






    myElement.remove();
    
    var tempArray = ulMessages.getElementsByTagName("li");

    for (let i = parseInt(myElement.id); i < tempArray.length; i++){
      tempArray[i].setAttribute("id", i);
    }
  };

  return oldCathy;

})(Cathy || {});


