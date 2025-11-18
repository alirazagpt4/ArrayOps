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


const mapped =tasks.map(task=>task.subtasks.map(sub=>sub.title));
console.log("Mapped Titles:", mapped);

// Mapped Titles: [ [ 'Design UI', 'Fix bugs' ], [ 'Write docs', 'Review code' ] 
// ] output


const allTitles = mapped.flat();
console.log("Flat Mapped Titles:", allTitles);




// Flat Mapped Titles: [ 'Design UI', 'Fix bugs', 'Write docs', 'Review code' ] output



const flatMapped = tasks.flatMap(task => task.subtasks.map(sub => sub.title));
console.log("FlatMap Titles:", flatMapped);