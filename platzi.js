var z;


for(var i=0; i<10; i++)
{
  z = aleatorio(-5, 5);
  document.write(z + ", ");
}

function aleatorio(min, maxi)
{
 var resultado;
 var resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
 return resultado;
}
