const organizeInstructors = function(instructors) {
  const organizedList = {};
  const listOfCourses = [];
  let j = 0;
  const listOfStudents = [];

  // Create array of different courses from inputted object
  for (let i = 0; i < instructors.length; i++) {
    if (listOfCourses.includes(instructors[i].course) !== true) {
      listOfCourses[j] = instructors[i].course;
      j += 1;
    }
  }

  // Create an array[arrays] of instructors in charge for each different course
  for (let k = 0; k < listOfCourses.length; k++) {
    const partArray = [];
    let z = 0;
    for (let i = 0; i < instructors.length; i++) {
      if (instructors[i].course === listOfCourses[k]) {
        partArray[z] = instructors[i].name;
        z += 1;
      }
    }
    listOfStudents[k] = partArray;
  }

  // Create an object with the different courses and the instructors in charge for each
  for (let i = 0; i < listOfCourses.length; i++) {
    organizedList[listOfCourses[i]] = listOfStudents[i];
  }

  return organizedList;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);
