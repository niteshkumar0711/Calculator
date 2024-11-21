let intput = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            intput.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            intput.value = string;
        }
        else{
            string += e.target.innerHTML;
            intput.value = string;
        }

    })
})