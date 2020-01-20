export class Teacher {

    constructor(id='', name='',surname='',area='',salary=0){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.area = area;
        this.salary = salary;
    }

    id: string;
    name: string;
    surname: string;
    area: string;
    salary: number;
}
