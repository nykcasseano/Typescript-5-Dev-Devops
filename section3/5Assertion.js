"use strict";
let simpleJob = { codingLanguage: 'TS', sourceControl: 'git' };
let complicatedJob = {
    codingLanguage: 'TS', sourceControl: 'git', hasManyMeetings: true, reportsToBeCompleted: ['hourly', 'daily', 'weekly']
};
let qaJob = {
    scriptingLanguage: 'Python',
    hasAutomatedTests: true
};
simpleJob = complicatedJob;
complicatedJob = simpleJob;
complicatedJob = qaJob;
// same meaning:
complicatedJob = simpleJob;
complicatedJob = qaJob;
// usage: build objects in steps:
// advantage: autocomplete assistance
// disadvantage: the compiler won't complain about incomplete objects
const complicatedJobMadeInSteps = {};
complicatedJobMadeInSteps.codingLanguage = 'C#';
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = 'git';
