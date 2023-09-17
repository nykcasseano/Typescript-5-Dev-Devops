"use strict";
const bestProgrammer = 'Programmer';
function getSalaryForPosition(position) {
    if (position === 'Programmer') {
        return 100000;
    }
    if (position === 'HR') {
        return 120000;
    }
    console.warn(`We don't have a salary for ${position}`);
}
