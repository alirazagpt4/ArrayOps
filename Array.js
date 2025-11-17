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


tasks.forEach(task => {
    const incompleteSubtasks = task.subtasks.filter(sub => sub.done === false).length;
    console.log(`Incomplete subtasks for ${task.title}:`, incompleteSubtasks)
})





