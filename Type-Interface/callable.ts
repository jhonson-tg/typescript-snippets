interface IPayable {
    (percent: number): boolean;
}

class Person {
    constructor(private validator: IPayable) {
    }

    increasePay(percent: number): boolean {
        return this.validator(percent);
    }
}

let forEmployees: IPayable = (percent) => {
    console.log("Increasing salary by ", percent);
    return true;
};

let forContractors: IPayable = (percent) => {
    var increaseCap: number = 20;

    if (percent < increaseCap) {
        console.log("Increasing hourly rate by", percent);
        return true;
    } else {
        console.log("Sorry, the increase cap for contractors is ",
            increaseCap);
        return false;
    }
}

let forTempWorkers: IPayable = (percent) => {
    console.log("Can't increase salary for temps");
    return false;
}

let workers: Array<Person> = [];

workers[0] = new Person(forEmployees);
workers[1] = new Person(forContractors);
workers[1] = new Person(forTempWorkers);

workers.forEach(worker => worker.increasePay(30));