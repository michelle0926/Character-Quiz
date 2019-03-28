$("button").click(function (){
    $(".header, .content").hide();

var numberOne = $(".age").val();
var numberTwo = $(".music").val();

if(numberOne < 23 && numberTwo === "older music") {
    $(".result").text("CONGRATS!!!! You got Carlton Banks. You are intelligent, kind an loyal. Even though you can be a bit insensitive, your loved ones know they can count on you. You also do not turn down a nice dance.");
    $(".carlton").show();
}

else if(numberOne < 23 && numberTwo === "modern music") {
    $(".result").html("CONGRATS!!!! You got Will Smith. You are witty, funny and kind. You care very much about your family, even if you tease them. You are a role model to those that come before you. Even if you are a little reckless, you are loyal and will do anything for those you care about.");
    $(".will").show();
}

else if (numberOne >= 23 && numberTwo === "older music") {
    $(".result").text("CONGRATS!!!! You got Uncle Phil. You are one of the pillars of the Banks family. You are wise and offer advise to those that look up to you. You are accomplished and push those around you to be their best. Under your stern exterior is a soft person.");
    $(".uncle-phil").show();
}

else if (numberOne >= 23 && numberTwo === "modern music") {
    $(".result").text("Congrats!!!! You got Geoffrey Butler. You are an optimistic, loyal, even-temopered, kind, and posh person. Even in the toughest of times, you stick to the people you care about. While you may be posh, that does not mean you cannot be witty when necessary.");
    $(".geoffrey").show();
}

});



