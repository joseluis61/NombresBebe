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
  var nombresNene=["Andrés","Julián","Pelayo","Martin","Rodrigo"];
  var nombresNena=["Jimena","Fulgencia","Andrea","Petra","Lucia"];

  //Escogemos aleatoriamente un nombre.
  //1. genero un numero aleatorio entre 0 y X-1, siendo X el numero total  de nombres de que dispongo.
  //2.Ese numero sera la posicion en el array de nombres.
  //3.En este caso seria entre 0 y 4.

  var posicionNene=Math.round(Math.random()*(nombresNene.length-1));
  var posicionNena=Math.round(Math.random()*(nombresNena.length-1));

  //Comprobamos si es niño o niña y respondemos con un nombre.
  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"}); //Esta linea es para que coja los acentos y tildes del castellano.
  res.write("<h1>Enhorabuena!!!</h1>");
  if (sexo==="1"){
    //Es niño.
    res.write("<h2>Puedes llamarle: "+nombresNene[posicionNene]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");
  }
  if (sexo==="2"){
    //Es niña.
    res.write("<h2>Puedes llamarla: "+nombresNena[posicionNena]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");
  }
  res.send();
});

//Arranca el servidor.
app.listen(3000,function(){
  console.log("Servidor escuchando en el puerto 3000.");
});
