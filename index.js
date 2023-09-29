

let colors = ["blue", "black", "yellow", "yellowgreen", "red", "brown", "pink", 
"purple", "lightgray", "gray", "orange", "cyan"];


const randomNumber = () => {
return Math.floor((Math.random() * 12) + 1);
};

const mensaje = () => {
return colors[randomNumber()];

};

function cambiar(){
    document.getElementById("demo").style.backgroundColor = mensaje();
    
}


function cambiar1(){
   
    document.getElementById("demo1").style.backgroundColor = mensaje();
}