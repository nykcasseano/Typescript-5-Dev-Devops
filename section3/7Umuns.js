"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enums: a group of constants
var Position;
(function (Position) {
    Position["Programmer"] = "Programmer";
    Position["HR"] = "HR";
    Position["Manager"] = "Manager";
    /**

     * Must receive at least 2000% yearly bonus

     */
    Position["CEO"] = "CEO";
})(Position || (Position = {}));
function payBonus(empl) {
    // Pay CEO bonus:
    if (empl.position === Position.CEO) {
        // surprize bonus
    }
}
function payAnnualBonus(empl) {
    let bonusPercent = 0;
    switch (empl.position) {
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
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`);
}
