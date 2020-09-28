const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.map((member) => {
    if (typeof member !== 'string') return;
    return member.toUpperCase().trim().split('')[0];
  }).sort().join('');
};