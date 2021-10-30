interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any;
};

const teacher3: Teacher = {
    firstName: 'Victor',
    fullTimeEmployee: false,
    lastName: 'Zuluaga',
    location: 'Colombia',
    contract: false,
};
console.log(teacher3);
