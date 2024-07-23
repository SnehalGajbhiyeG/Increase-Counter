
let Data = document.getElementById('value').innerText;

function Increment() {
    Data = parseInt(Data) + 1;
    document.getElementById('value').innerText = Data;
}

function Decrement() {
    Data = parseInt(Data) - 1;
    document.getElementById('value').innerText = Data;
}