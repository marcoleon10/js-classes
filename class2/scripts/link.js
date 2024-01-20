//global variables
let iconImportant = false;
function saveTask() {
  console.log("Saving task");
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

function init() {
  console.log("This is the parent of everything");
  //load data

  //hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(changeIcon);
  //document.getElementById("btnSave").click(saveTask);
}

window.onload = init;