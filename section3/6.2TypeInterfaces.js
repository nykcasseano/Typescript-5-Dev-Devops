"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let complicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
};
class ProjectManager {
    constructor() {
        this.meetingMaxLength = 60;
        this.holdMeeting = () => {
            console.log('Just holding a meeting');
        };
        this.endMeeting = () => {
            console.log('Finally the meeting ended');
        };
    }
}
