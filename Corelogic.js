const tasks = [
  {
    id: 1,
    title: "Project A",
    subtasks: [
      { title: "Design UI", done: true },
      { title: "Fix bugs", done: true }
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


const result = [];


for(let i = 0 ; i < tasks.length; i++){
    const task = tasks[i];
    
    let alldone = true;
    for(let j = 0 ; j< task.subtasks.length; j++){
        if(task.subtasks[j].done === false){
            alldone = false;
            break;
        }
    }
    result.push(alldone);
}

console.log(result);
