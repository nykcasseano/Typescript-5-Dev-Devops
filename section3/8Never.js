"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function neverReturns() {
    while (true) {
    }
}
function doStuff(arg) {
    if (typeof arg === 'string') {
        console.log(arg);
        return;
    }
    if (typeof arg === 'number') {
        console.log(arg);
        return;
    }
    console.log(arg); //will never happen
}
var Position;
(function (Position) {
    Position["Programmer"] = "Programmer";
    Position["HR"] = "HR";
    Position["CEO"] = "CEO";
})(Position || (Position = {}));
function payAnnualBonus(empl) {
    let bonusPercent = 0;
    const position = empl.position;
    switch (position) {
        case Position.Programmer:
            bonusPercent = 0.2;
            break;
        case Position.HR:
            bonusPercent = 0.8;
            break;
        case Position.CEO:
            bonusPercent = 200;
            break;
        default:
            // exhaustive enum:
            const remainingValues = position;
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`);
}
