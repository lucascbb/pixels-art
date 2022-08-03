document.getElementById('title').innerHTML = 'Paleta de Cores';

document.getElementsByClassName("color")[0].style.backgroundColor = 'black';
document.getElementsByClassName("color")[1].style.backgroundColor = 'darkblue';
document.getElementsByClassName("color")[2].style.backgroundColor = 'orange';
document.getElementsByClassName("color")[3].style.backgroundColor = 'darkgreen';

document.getElementById('pixel-board').style.backgroundColor = "red";
document.getElementById('pixel-board').style.width= "210px";
document.getElementById('pixel-board').style.height= "210px";


// document.getElementsByClassName("color")[1].addEventListener("click", myFunction);
// function myFunction() {
//   document.getElementsByClassName("color")[1].style.backgroundColor = "black";
// }





for(let index = 0; index < 25; index += 1){
document.getElementsByClassName("pixel")[index].addEventListener("mousemove", myFunction);

function myFunction(){
    document.getElementsByClassName("pixel")[index].style.backgroundColor = "black";
}
}

// document.getElementById("color-palette").onclick = jsCarregado

// function jsCarregado(){
//    if (document.getElementById("title").style.color = "white") {
//     document.getElementById("title").style.color = "red"
//    }
// }


// document.getElementsByClassName("pixel")[0].onclick = trocaCor

// function trocaCor(){
//     if (document.getElementsByClassName("pixel")[0].style.backgroundColor = "black") {
//     document.getElementsByClassName("pixel")[0].style.backgroundColor = "white";}
// }

// for(let index = 0; index < 25; index += 1){
// document.getElementsByClassName("reset-button").onclick = resetButton

// function resetButton(){
//     document.getElementsByClassName("pixel")[index].style.backgroundColor = "white";
// }
// }

document.getElementsByClassName("reset-button").onclick = resetButton;

function resetButton() {
    for(let index = 0; index < 25; index += 1){
    document.getElementsByClassName("pixel")[index].style.backgroundColor = "white";
}
}
