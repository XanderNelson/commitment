$(document).ready(function(){
  // window.setInterval(switchBack, 800);


  function switchBackRed(){
    $("body").toggleClass("moveRed");
    $("h1").toggleClass("letterMove");
  }
  function switchBackGrey(){
    $("body").toggleClass("moveGrey");
    // $("h1").toggleClass("letterMove");
  }
  function switchBackBlue(){
    $("body").toggleClass("moveBlue");
    // $("h1").toggleClass("letterMove");
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
    window.setInterval(switchBackBlue, 800);
    $("body").addClass("greyBod");
    $("body").removeClass("redBod, blueBod");
  });
  $("#red").click(function(){
    window.setInterval(switchBackRed, 800);
    $("body").addClass("redBod");
    $("body").removeClass("greyBod, blueBod");

  });
  $("#blue").click(function(){
    $("body").addClass("blueBod");
    $("body").removeClass("redBod, greyBod");

  });

});
