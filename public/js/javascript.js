$(".sexo").on("change",function(){
  var opcion=$(this).val();

  switch(opcion){
    case "0":{
      $(".foto").attr("src","images/anonimo.png");
        break;
    }
    case "1":{
      $(".foto").attr("src","images/niño.jpg");
        break;
    }
    case "2":{
      $(".foto").attr("src","images/niña.png");
        break;
    }
  }
});
