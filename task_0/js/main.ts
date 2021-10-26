interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Victor",
    lastName: "Zuluaga",
    age: 26,
    location: "Medellin"
}

const student2: Student = {
    firstName: "Deisy",
    lastName: "Zuluaga",
    age: 23,
    location: "Medellin"
}

const studentsList: Student[] = [student1, student2]
studentsList.forEach(ele => {
    console.table(ele)
});
