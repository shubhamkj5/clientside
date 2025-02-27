"use strict";
var $ = function(id) { return document.getElementById(id); };

var tasks = [];
var sortDirection = "ASC";

var displayTaskList = function() {
    var list = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { tasks = storage.split("|"); }
    }
    
    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }
    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();
}

var addToTaskList = function() {   
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {  
        // add task to array and local storage
        var res=task.value.split(",");
        for (var i in res){
        tasks.push(res[i]);
        }
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

var deleteTask = function() {
    var delindex = prompt("Enter the index you want to delete");
    if(delindex <0 || delindex>tasks.length || delindex.match("\\D")){
        alert("Invalid Input");
    }
    else{
        var itemname=tasks[delindex];
        tasks.splice(delindex,1);
        localStorage.removeItem(itemname);
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

var toggleSort = function() {
    var list="";
    if(sortDirection=="ASC"){
       if (tasks.length > 0) {
         tasks.reverse();
        list = tasks.join("\n");
    }
    // display tasks string and set focus on task text box
    $("task_list").value = list;
       
      
        localStorage.tasks = "";
       
     
        sortDirection="DESC";
    }
    else{
   
        displayTaskList();
        sortDirection="ASC";
    }
}

var setName = function() {
 var namevalue = prompt("Enter Name");
    sessionStorage.name=namevalue;

document.getElementById("name").innerHTML=sessionStorage.name+"'s ";
}


window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    $("delete_task").onclick = deleteTask;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    displayTaskList();
}