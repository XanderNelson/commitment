$(document).ready(function(){
  // window.setInterval(switchBack, 800);
  var interval = setInterval(switchBack, 800);
  // window.interval;


  function switchBack(){
    $("body").toggleClass("move");
    $("h1").toggleClass("letterMove");
  }
  // function triangleflash(){
  //   if ($("#triFive").hasClass("flash")){
  //     $("#triFive").addClass("flash");
  //   }
  //   else{
  //     $("#triFive").removeClass("flash");
  //   }
  // }

  $("#triOne, #triEleven").click(function(){
    $(this).toggleClass("color");
  });
  $("#triTwo").click(function(){
    $("#triTwo").toggleClass("opac");
  });
  $("#triThree").click(function(){
    $("#triThree").toggleClass("turn");
  });
  $("#triFour").click(function(){
    $("#triFour").toggleClass("size");
  });
  $("#triFive").click(function(){
    $("#triFive").toggleClass("flash");
  });
  $("#triSix").click(function(){
    $("#triSix").toggleClass("rotate");
  });
  $("#triSeven").click(function(){
    $("#triSeven").toggleClass("moveDown");
  });
  $("#triEight").click(function(){
    $("#triEight").toggleClass("topLeft");
  });
  $("#triNine").click(function(){
    $("#triNine").toggleClass("nine");
  });
  $("#triTen").click(function(){
    $("#triTen").toggleClass("ten");
  });
  $("#grey").click(function(){
    $("body").addClass("grey");
    $("body").removeClass("red");
    $("body").removeClass("blue");
    $("body").removeClass("move");
    $("h1").css("color", "black");
    $("h2").css("color", "#800000");
    $(this).css("color", "black");
    clearInterval(interval);
  });
  $("#red").click(function(){
    $("body").addClass("red");
    $("body").removeClass("grey");
    $("body").removeClass("blue");
    $("h1").css("color", "#800000");
    $("h2").css("color", "#800000");
    $(this).css("color", "#800000");
    interval = setInterval(switchBack, 800);
  });
  $("#blue").click(function(){
    $("body").addClass("blue");
    $("body").removeClass("move");
    $("h1").css("color", "blue");
    $("h2").css("color", "#800000");
    $(this).css("color", "blue");
    clearInterval(interval);
  });

});
