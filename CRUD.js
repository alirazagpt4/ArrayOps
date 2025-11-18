// CRUD with mock array data.
import fs from 'fs';

// load file
let rawData = fs.readFileSync('./data.json');
let database = JSON.parse(rawData);
let tasks = database.tasks || [];


function saveFile(){
    const updatedData = JSON.stringify({ tasks }, null, 2);
    fs.writeFileSync('./data.json', updatedData);
}


// 1. Create a new task
function createTask(title , subtasks = []){
    const newTask = {
        id: tasks.length + 1,
        title: title,
        subtasks: subtasks.map(sub => ({ title:sub.title , done: sub.done || false}))
    
    }
    tasks.push(newTask);
    saveFile();
    return newTask;
}


const newTask = createTask("Project C" , [
    { title: "Set up environment" , done: false },
    { title: "Initial commit" , done: false },
    { title: "Project planning" , done: true },
    { title: "Team meeting" , done: false }
]);

console.log("Created Task:", newTask);
console.log("update task array ", tasks);


// 2. Read all tasks
function readTasks(){
    return tasks;
}

const allTasks = readTasks();
console.log("All Tasks:", allTasks);


// 3. Update a task by id
function updateTask(id , updatedFields){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if(taskIndex === -1){
        return null;
    }
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedFields };
    saveFile();
    return tasks[taskIndex];
}

const updatedTask = updateTask(1 , { title: "Updated Project A" });
console.log("Updated Task:", updatedTask);
console.log("update task array ", tasks);

// 4. Delete a task by id
function deleteTask(id){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if(taskIndex === -1){
        return false;
    }
    tasks.splice(taskIndex , 1);
    saveFile();
    return true;
}

const isDeleted = deleteTask(2);
console.log("Task Deleted:", isDeleted);
console.log("update task array ", tasks);