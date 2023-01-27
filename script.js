let container = document.getElementsByClassName('container');
container[0].style.backgroundColor = "teal";

let par = document.createElement("p");
container[0].appendChild(par).innerHTML = "Odstavec";

let heading = document.createElement("h1");
heading.setAttribute("class", "nadpis");
heading.setAttribute("onclick", "Test()")
container[0].appendChild(heading).innerHTML = "Další velký nadpis";

let ul = document.createElement("ul");
container[0].appendChild(ul);

let umisteni = document.getElementsByTagName("ul")

function Test() {
    alert("Vymyšlení funkce");
}