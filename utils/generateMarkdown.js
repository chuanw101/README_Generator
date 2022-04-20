// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    return `## License
This project is licensed with ${license}`
}

// TODO: Create a function to generate markdown for README
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
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
