var obj = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];


function PrintStudentbyMap() {
    var res = obj.map(ind => {
        if(ind.marks > 50)
            console.log(ind.name);
    })
    
}

function PrintStudentbyForEach() {
    obj.forEach((ind) => {
        if (ind.marks > 50) {
            console.log(ind.name);
        }
    })
}

function addData() {
    obj.push({ id: 4, name: "susan", age: "20", marks: 45 });
    console.log(obj);
}

function removeFailedStudent() {
    for(var i = 0; i < obj.length; i++){
        if (obj[i].marks > 50) {
            console.log(obj[i]);
        }
    }
}

var obj1 = [
    { id: 5, name: "fatiha Ayat", age: "20", marks: "89" },
    { id: 6, name: "Zoya Akhter", age: "22", marks: "79" },
    { id: 7, name: "Fatima", age: "19", marks: "60" }
];

function ConcatenateArray() {
    var new_object = obj.concat(obj1);
    console.log(new_object);
}