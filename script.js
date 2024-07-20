/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(v => {
        if (v.profession === "developer") {
            console.log(v);
        }
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(v => {
        if (v.profession === "developer") {
            console.log(v);
        }
    });
}

function addData() {
  //Write your code here, just console.log
  let val = {id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(val);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(val => val.profession !== "admin");
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
        {id: 5, name: "alice", age: "22", profession: "developer"},
        {id: 6, name: "bob", age: "23", profession: "admin"},
        {id: 7, name: "charlie", age: "24", profession: "intern"}
    ];
    let concatenatedArray = arr.concat(newEmployees);
    console.log(concatenatedArray);
}
