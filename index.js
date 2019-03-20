//jshint esversion:6

//Inicializo express.
const express=require('express');
const app=express();

//Inicializo body-parser.
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//Activo carpeta public para archivos estaticos.
app.use(express.static('public'));

//Seccion de rutas.
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  //Recojo los valores que envian desde el formulario.
  console.log(req.body);
  var sexo=req.body.sexo;
  var apellidoPaterno=(req.body.apadre);
  var apellidoMaterno=(req.body.amadre);

  //Declaro dos arrays de nombres (masculinos y femeninos).
  var nombresNene=["Andres","Julian","Pelayo","Martin","Rodrigo"];
  var nombresNena=["Jimena","Fulgencia","Andrea","Petra","Lucia"];
  //Escogemos aleatoriamente un nombre.
  
});

//Arranca el servidor.
app.listen(3000,function(){
  console.log("Servidor escuchando en el puerto 3000.");
});
