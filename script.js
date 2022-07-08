var displaybox = document.getElementById('display-box');
var calculator = document.getElementById('calculator');

function buttonClick(val){
    // console.log(val)
    if(val == 'evaluate'){
        displaybox.value = eval(displaybox.value);
    }
    else if(val == 'clear'){
        displaybox.value = ' ';
    }
    else{
        displaybox.value += val;
    }
}
