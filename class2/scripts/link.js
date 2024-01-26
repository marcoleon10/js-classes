//global variables
let iconImportant = false;
function saveTask() {
  console.log("Saving task");
  //get the values 
  const title = $("#title").val();
  const description = $("#description").val();
  const color = $("#color").val();
  const startDate = $("#startDate").val();
  const status = $("#status").val();
  const budget = $("#budget").val();
  //build the object
  let taskToSave = new Task(title, description, color, startDate, status, budget);
  console.log(taskToSave);
//save logic
$.ajax({
  type: "POST",
  url: "http://fsdiapi.azurewebsites.net/api/tasks/",
  data: JSON.stringify(taskToSave),
  contentType: "application/json",
  success: function(res){
    console.log(res);
  },
  error: function(error) {
  console.log(error);
  }
})
}

function changeIcon() {
  console.log("Changing icon");
  const nonImportant = "fa-solid fa-umbrella";
  const isImportant = "fa-solid fa-mug-hot";
  if (iconImportant) {
    $("#iImportant").removeClass(isImportant).addClass(nonImportant);
    iconImportant = false;
  } else {
    $("#iImportant").removeClass(nonImportant).addClass(isImportant);
    iconImportant = true;
  }
  //please try to restore the icon
}

function testRequest(){
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net"
  });

  displayTask(taskToSave);
}

function displayTask(task){
  let syntax = `<div class='task'>
<div class='info'>
<h5>${task.title}</h5>
<p>${task.description}</p>
</div>
<label>${task.status}</label>
<div class='date-budget'>
<label>${task.startDate}</label>
<label>${task.budget}</label>
</div>
</div>`;

$("#sectionA").append(syntax);
}
//Try to read all the elements in the inputs

function init() {
  console.log("This is the parent of everything");
  //load data

  //hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(changeIcon);
  //document.getElementById("btnSave").click(saveTask);
}

window.onload = init;