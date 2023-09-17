export{}
// Arrays:

const duties: string[] = ['Write code']

duties.push('fix bugs')
duties.map(duty => {
    console.log(duty.toUpperCase())
});

// Tuples: 

let employeeLockerCode: [string, number ] = ['Nyk', 345]
employeeLockerCode = ['5',6];
employeeLockerCode.push(12);
console.log(employeeLockerCode);