"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){

    console.log("myElement", myElement);
    console.log("myElement.id", myElement[0].id);



    //this little chunk is gonna need to be changed too
    Cathy.removeMsgArray(parseInt(myElement[0].id));



    // Cathy.removeMsgArray(parseInt(myElement.id));




    //the message limiter also calls this function, but it's not what I'm looking for right now so I disabled it.
    myElement.remove();
    
    var tempArray = $("li");

    // no errors popping up, but message isn't being removed from the array. probably some problem in whichever function that the messages are removed from the array.
    // ... is tempArray even used anywhere?

    // var tempArray = ulMessages.getElementsByTagName("li");

    for (let i = parseInt(myElement.id); i < tempArray.length; i++){
      tempArray[i].setAttribute("id", i);
    }
  };

  return oldCathy;

})(Cathy || {});


