let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentbyMap() {
  arr.map(function(student) {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function PrintStudentbyForEach() {
  arr.forEach(function(student) {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  let failedStudents = arr.filter(function(student) {
    return student.marks >= 50;
  });
  console.log(failedStudents);
}

function ConcatenateArray() {
  let newStudents = [
    { id: 4, name: "ovaid", age: "24", marks: 90 },
    { id: 5, name: "suhaib", age: "16", marks: 50 },
    { id: 6, name: "tafim", age: "16", marks: 50 },
  ];

  let concatenatedArr = arr.concat(newStudents);
  console.log(concatenatedArr);
}

// Function calls
PrintStudentbyMap();
PrintStudentbyForEach();
addData();
removeFailedStudent();
ConcatenateArray();
