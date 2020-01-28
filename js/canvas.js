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

  });
  $("#red").click(function(){

  });
  $("#blue").click(function(){

  });

});
