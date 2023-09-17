"use strict";
function manage(manager) {
    var _a, _b;
    (_b = (_a = manager.team) === null || _a === void 0 ? void 0 : _a.scrumMaster) === null || _b === void 0 ? void 0 : _b.holdScrumMeetings();
}
function manageOldWays(manager) {
    if (manager.team && manager.team.scrumMaster) {
        manager.team.scrumMaster.holdScrumMeetings();
    }
}
// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature
manage({
    team: {
    // scrumMaster: {
    //     holdMeaningfulMeetings: ()=>{
    //         console.log('Holding e very useful meeting')
    //     }
    // }
    }
});
