// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `![MIT](https://img.shields.io/badge/License-MIT-blue)`
  }
  if(license === "Apache"){
    return `![Apache](https://img.shields.io/badge/License-Apache-blue)`
  }
  if(license === "GPL") {
    return `![GPL](https://img.shields.io/badge/License-GPL-blue)` 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.Licenses)}
  * [Information](#information)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  # information
  ${data.projectInformation}
  # installation
  ${data.projectInstallation}
  # Usage
  ${data.projectUsage}
  # Contributing
  ${data.projectContributing}
  # Test 
  ${data.projectTest}
  # Questions
  ${data.projectQuestions}
  


`;
}

module.exports = generateMarkdown;
