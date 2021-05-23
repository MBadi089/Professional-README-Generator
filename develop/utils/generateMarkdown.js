// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(chooseLicense) {
    //Apache Badge
if (chooseLicense === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
}
    //GNU Badge
else if (chooseLicense === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
}
    //MIT Badge
else if (chooseLicense === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
}
    //IBM Badge
else if (chooseLicense === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`;
}
    //Boost Badge
else if (chooseLicense === 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`;
}
    //Eclipse Badge
else if (chooseLicense === 'Eclipse') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
}
else {
    return '';
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(chooseLicense) {
  //Apache Badge
  if (chooseLicense === 'Apache') {
    return `[![License](https://opensource.org/licenses/Apache-2.0)`;
}
    //GNU Badge
else if (chooseLicense === 'GNU') {
    return `[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
}
    //MIT Badge
else if (chooseLicense === 'MIT') {
    return `[![License: MIT](https://opensource.org/licenses/MIT)`;
}
    //IBM Badge
else if (chooseLicense === 'IBM') {
    return `[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`;
}
    //Boost Badge
else if (chooseLicense === 'Boost') {
    return `[![License](https://www.boost.org/LICENSE_1_0.txt)`;
}
    //Eclipse Badge
else if (chooseLicense === 'Eclipse') {
    return `[![License](https://opensource.org/licenses/EPL-1.0)`;
}
else {
    return '';
}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseBadge(data.chooseLicense)}
${renderLicenseLink(data.chooseLicense)}
`;
}

module.exports = generateMarkdown;