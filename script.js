let container = document.getElementsByClassName('container');

let ul = document.createElement("ul");
container[0].appendChild(ul);

function Pridat() {
    let input = document.getElementById('input').value;
    for (let i = 0; i < 1; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input));
        ul.appendChild(li); 
    }
}