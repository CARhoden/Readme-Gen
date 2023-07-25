// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;


function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    switch (license) {
      case 'MIT License':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case 'Unlicense':
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      case 'Mozilla Public License 2.0':
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      case 'ISC License':
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      case 'Eclipse Public License 1.0':
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      case 'BSD 3-Clause License':
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      case 'BSD 2-Clause License':
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      case 'Apache 2.0 License':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
  }
}

function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return `## License

${renderLicenseBadge(license)}

This project is covered under the ${license} license.`
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  Hi! Im ${data.author}! Let me tell you a little about my project.

  ### What was my motivation for creating this project?
  
  ${data.motivation}

  ### What problem does this solve?

  ${data.solve}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![Application in action](${data.screenshot})
  
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions or further inquiries feel free to contact me at either of the following:
  
  Github: [${data.github}](https://github.com/${data.github})

  Email: <${data.email}>

  `;
}

module.exports = generateMarkdown;