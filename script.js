let container = document.getElementsByClassName('container');
let ul = document.createElement("ul");
container[0].appendChild(ul);

let taskNumber = 1;

function Pridat() {
  let input = document.getElementById('input').value;
  let li = document.createElement("li");
  
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", "task" + taskNumber);
  
  li.appendChild(document.createTextNode(taskNumber + ". " + input));
  li.appendChild(checkbox);
  ul.appendChild(li);
  
  taskNumber++;
}

function Smazat() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      let li = checkboxes[i].parentElement;
      ul.removeChild    (li);
    }
  }
}

let deleteButton = document.createElement("button");
deleteButton.innerText = "Smazat vybrané";
deleteButton.setAttribute("id", "delete");
deleteButton.onclick = Smazat;
container[0].appendChild(deleteButton);