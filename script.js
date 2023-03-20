// select alement or variable  in  dom 

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUI = document.querySelector('#item')
let completeUI = document.querySelector('.complete-list uI')


// select function and variable  


let createTask =  function(task){
    let listItem = document.createElement("li");
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
     
    label.innerText = task;
    checkbox.type= "checbox"

    listItem.appendChild("checkbox")
    listItem.appendChild("label")

    return listItem 
}

 let  addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value)
    todoUI.appendChild(listItem);
    newTask.value = "";

    bindIncompliateTask(listItem,completeTask)


 }
 let completeTask = function(){

 let listItem =  this.parentNode;
  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.className = "delete"
  listItem.appendChild(deletebtn)

  let checbox = listItem.querySelector('input [type:checbox]')
  checbox.remove();

  completeUI.appendChild("listItem");
  bindCompleteItem(listItem,deleteTask)


 }


 let deleteTask = function(){
    let listItem = this.parentNode;
    let uI = listItem.parentNode;
    uI.removeChild('listItem')
 }


  let bindIncompliateTask = function(TaskItem,checboxclick){
  let checbox = TaskItem.querySelector('input[type="checkbox"]')   

  checbox.onChange = checboxclick;

 }


 let bindCompleteItem = function(TaskItem,deleteButtonClick){
    let deleteButtonClick = TaskItem.querySelector('.delete')   
  deleteButton.Click = deleteButtonClick;

 }