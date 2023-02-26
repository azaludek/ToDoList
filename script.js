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

  let editButton = document.createElement("button");
  editButton.innerText = "Editovat";
  editButton.setAttribute("class", "edit");
  editButton.setAttribute("data-task", taskNumber);
  editButton.onclick = Editovat;

  li.appendChild(document.createTextNode(taskNumber + ". " + input));
  li.appendChild(checkbox);
  li.appendChild(editButton);
  ul.appendChild(li);

  taskNumber++;
}

function Smazat() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      let li = checkboxes[i].parentElement;
      ul.removeChild(li);
    }
  }
}

function Editovat() {
  let taskNumber = this.getAttribute("data-task");
  let li = this.parentElement;
  let input = li.childNodes[0];
  let checkbox = li.childNodes[1];
  let editButton = li.childNodes[2];
  let saveButton = document.createElement("button");
  saveButton.innerText = "Uložit";
  saveButton.setAttribute("class", "save");
  saveButton.setAttribute("data-task", taskNumber);
  saveButton.onclick = Ulozit;

  let editInput = document.createElement("input");
  editInput.setAttribute("type", "text");
  editInput.setAttribute("value", input.nodeValue);
  input.replaceWith(editInput);
  editButton.replaceWith(saveButton);
}

function Ulozit() {
  let taskNumber = this.getAttribute("data-task");
  let li = this.parentElement;
  let editInput = li.childNodes[0];
  let checkbox = li.childNodes[1];
  let saveButton = li.childNodes[2];
  let input = document.createTextNode(editInput.value);
  editInput.replaceWith(input);
  saveButton.replaceWith(checkbox);
}

let deleteButton = document.createElement("button");
deleteButton.innerText = "Smazat vybrané";
deleteButton.setAttribute("id", "delete");
deleteButton.onclick = Smazat;
container[0].appendChild(deleteButton);