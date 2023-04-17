const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
const result = {};

for (let i = 0; i < domains.length; i++) {
const parts = domains[i].split('.').reverse();

let domain = '';
for (let j = 0; j < parts.length; j++) {
  domain += `.${parts[j]}`;

  result[domain] = (result[domain] || 0) + 1;
}
}

return result;
}

module.exports = {
getDNSStats
};