// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        default:
            return "";
    }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return `## License
        This project  is not licensed.`;
    }
    const badge = renderLicenseBadge(license);
    return `## License
This project is licensed with ${license}.
${badge}`
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    const license = renderLicenseSection(data.license);

    return `# ${data.title}

## Description
${data.descrip}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [GitHub](#github)
- [Contact](#contact)

## Installation
${data.install}

## Usage
${data.usage}

## Contribution Guidelines
${data.contrib}

## Test Information
${data.test}

${license}

## GitHub
https://github.com/${data.username}

## Contact
- Author: ${data.name}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
