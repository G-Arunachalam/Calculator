const button = document.querySelectorAll("input");
const display = document.querySelector("input");

for(let i = 1;i<button.length ;i++ ){
    button[i].addEventListener('click',calc);
}

function calc(event){
    const clicked = event.target.value;

    if(clicked === "="){
        if(display.value !== ''){
                display.value= eval(display.value);
        }
    }else if(clicked === "AC"){
        display.value = ''
    }else if(clicked === "DE"){
        display.value = display.value.slice(0,display.value.length-1);
    }else if(clicked === "%"){
        display.value = eval(display.value)*(1/100);
    }else{ 
        display.value += clicked;
    }
}