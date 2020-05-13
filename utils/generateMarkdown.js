function generateMarkdown(data) {
  return `

 # ${data.ProjectTitle} \n # ![License](https://img.shields.io/badge/License-${data.License}-blue) \n ## Description \n ${data.Description} \n # ${data.Installation} # ${data.Usage} # ${data.License} # ${data.Contributing} # ${data.Tests} # ${data.Username}  # ${data.email} 


`;
}

module.exports = generateMarkdown;




