$(document).ready(function(){
  window.setInterval(switchBack, 800);


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

  $("#triOne").click(function(){
    $("#triOne").toggleClass("color");
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
    $("#triEight").toggleClass("");
  });
});
