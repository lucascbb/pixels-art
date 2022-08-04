document.getElementById('title').innerHTML = 'Paleta de Cores';

document.getElementsByClassName("color")[0].style.backgroundColor = 'black';
document.getElementsByClassName("color")[1].style.backgroundColor = 'darkblue';
document.getElementsByClassName("color")[2].style.backgroundColor = 'orange';
document.getElementsByClassName("color")[3].style.backgroundColor = 'darkgreen';

document.getElementById('pixel-board').style.backgroundColor = "red";
document.getElementById('pixel-board').style.width= "210px";
document.getElementById('pixel-board').style.height= "210px";


let trocaCor = [];

window.onload = preto



document.getElementsByClassName("color")[0].onclick = preto;

function preto(){
    selected =  "black"
    document.getElementsByClassName("color")[0].classList.add('selected')
    document.getElementsByClassName("color")[1].classList.remove('selected')
    document.getElementsByClassName("color")[2].classList.remove('selected')
    document.getElementsByClassName("color")[3].classList.remove('selected')

    }

document.getElementsByClassName("color")[1].onclick = azul;

function azul(){
    selected =  "darkblue"
    document.getElementsByClassName("color")[1].classList.add('selected')
    document.getElementsByClassName("color")[0].classList.remove('selected')
    document.getElementsByClassName("color")[2].classList.remove('selected')
    document.getElementsByClassName("color")[3].classList.remove('selected')
    }

document.getElementsByClassName("color")[2].onclick = laranja;
    
function laranja(){
    selected =  "orange"
    document.getElementsByClassName("color")[2].classList.add('selected')
    document.getElementsByClassName("color")[0].classList.remove('selected')
    document.getElementsByClassName("color")[1].classList.remove('selected')
    document.getElementsByClassName("color")[3].classList.remove('selected')
    }

document.getElementsByClassName("color")[3].onclick = verde;
    
function verde(){
    selected =  "darkgreen"
    document.getElementsByClassName("color")[3].classList.add('selected')
    document.getElementsByClassName("color")[0].classList.remove('selected')
    document.getElementsByClassName("color")[1].classList.remove('selected')
    document.getElementsByClassName("color")[2].classList.remove('selected')
        }
    

for(let index = 0; index < 25; index += 1){
    let corSelect = [];
document.getElementsByClassName("pixel")[index].addEventListener("mousemove", myFunction);

function myFunction(){
    document.getElementsByClassName("pixel")[index].style.backgroundColor = selected;
}
}

document.getElementsByClassName("clear-board").onclick = resetButton;

function resetButton() {
    for(let index = 0; index < 25; index += 1){
    document.getElementsByClassName("pixel")[index].style.backgroundColor = "white";
}
}









// let form = document.getElementById('formulario');
// let boardSize = document.getElementById('board-size');

// form.addEventListener('submit'){
//     alert(boardSize.value);
// }




















// 1) Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: 'Board inválido!'
// 2) Verifica se ao clicar no botão com um valor preenchido, o tamanho do board muda.
// 3) Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca


