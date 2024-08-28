const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");

let hexanumbers = "0123456789abcdef";
let hexanumbersList = hexanumbers.split();
// console.log(hexanumbersList);

function rightButton(){
changeColor();

}

function leftButton(){
changeColor();
}

function changeColor(){
    let hexa = "#";
    let hexa2 = "#";

    for(let i=0; i<6; i++){
        // console.log(hexanumbers[i]);
        let num = (Math.floor(Math.random()*16));
        let num2 = (Math.floor(Math.random()*16));

            hexa+=hexanumbers[num];
            hexa2+=hexanumbers[num2];
 
    }
    console.log(hexa);
    console.log(hexa2);

document.body.style.background = `linear-gradient(${hexa},${hexa2}`;
button1.innerText = hexa;
button2.innerHTML = hexa2;

    // return hexa;

}



button1.addEventListener("click",rightButton);
button2.addEventListener("click",leftButton);

