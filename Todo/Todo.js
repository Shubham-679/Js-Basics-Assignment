

document.getElementById("myBtn").onclick = addTask;

function addTask() {

  let task = document.getElementById("taskInput").value;
  let taskItem = document.getElementById("taskList")

  if (task != "") {

    let newli = document.createElement("li");
    newli.setAttribute("class", "list-group-item");
    newli.appendChild(document.createTextNode(task));

    let inp = document.createElement("input")
    console.log(inp)
    inp.setAttribute("type", "checkbox")
    inp.setAttribute("class", "float-left mx-sm-4 mt-2")


    inp.addEventListener('change', function() {
    newli.style.textDecoration = inp.checked ? 'line-through' : 'none';
     });

    let btn = document.createElement("button");
    btn.setAttribute("class", "float-right btn btn-danger")
    btn.appendChild(document.createTextNode("Remove"))

    taskItem.appendChild(newli);
    newli.appendChild(inp);
    newli.appendChild(btn);
    task = ""

    btn.onclick = function () {
      let listItem = this.parentNode;
      console.log(listItem)
      let ul = listItem.parentNode;
      console.log(ul)
      //Remove the parent list item from the ul.
      ul.removeChild(listItem);
    }

  }
  else {
    alert("Please Add a New Task");
  }

}