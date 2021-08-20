function getPin(params) {
    const pin = Math.floor(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else{
        return getPin();
    }
  
}

function generatePin(params) {
    const pin = getPin();
    document.getElementById('display-pin').value = pin ;
}

document.getElementById('key-pad').addEventListener('click',function(event) {
    const number = event.target.innerText;

    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
       if (number == 'C') {
           calcInput.value = '';
       }
    }else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number ;
        calcInput.value = newNumber;
    }

});

function verifyPin(params) {
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-number').value;
    const sucessNotify = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typeNumber) {
       
        sucessNotify.style.display = 'block';
        failError.style.display = 'none';
        
    }else{
        
        failError.style.display = 'block';
        sucessNotify.style.display = 'none';

    }
}