const tasks = [
  {
    id: 1,
    title: "Project A",
    subtasks: [
      { title: "Design UI", done: true },
      { title: "Fix bugs", done: false }
    ]
  },
  {
    id: 2,
    title: "Project B",
    subtasks: [
      { title: "Write docs", done: false },
      { title: "Review code", done: false }
    ]
  }
];


// 1. Use forEach to log all task titles
const alltasksTitle = tasks.forEach(task => {
    console.log("All task titles" ,task.title)
});


// 2. Use filter to task count by incomplete subtasks
tasks.forEach(task => {
    const incompleteSubtasks = task.subtasks.filter(sub => sub.done === false).length;
    console.log(`Incomplete subtasks for ${task.title}:`, incompleteSubtasks)
});




// 3. Use reduce to get total count of subtasks across all tasks
const totalTasks =tasks.reduce((acc , task) => {
     const total = acc + task.subtasks.length;
     return total;

},0);


console.log("Total subtasks count:", totalTasks) ;


// 4. Use reduce , filter and map 
const filterIncompleteTasks = tasks.reduce((acc ,task) =>{
    const incompleteTasks = task.subtasks.filter(sub => sub.done === false)
    .map(sub => sub.title);
    return  acc + incompleteTasks

    
} , []);

console.log("Incomplete subtasks titles:", filterIncompleteTasks) ;



// tasks.subtasks.every(sub => sub.done === true)


// 5. using every method
const allTasksStatus = tasks.map(task => task.subtasks.every(s => s.done));

console.log("All subtasks done status for each task:", allTasksStatus);


// 6. using flat + map to return all subtasks titles in a single array

const allTitles = tasks.flatMap(task => task.subtasks.map(st => st.title));
console.log("All subtasks titles:", allTitles);

