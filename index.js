var numero_aletorio1 = Math.floor(Math.random()*6)+1;
var numero_aletorio2 = Math.floor(Math.random()*6)+1;

var fuente1 = "dado" + numero_aletorio1 + ".png"
var fuente2 = "dado" + numero_aletorio2 + ".png"

document.querySelector(".img1").setAttribute("src",fuente1)
document.querySelector(".img2").setAttribute("src",fuente2)

function boton(){
    location.reload()
}