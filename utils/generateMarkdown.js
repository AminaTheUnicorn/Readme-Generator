function generateMarkdown(data) {
  return `

 # ${data.ProjectTitle} \n # ![License](https://img.shields.io/badge/License-${data.License}-blue) \n ## Description \n ${data.Description} \n ## Installation \n ${data.Installation} \n ## Data  \n ${data.Usage} \n ## License  \n ${data.License} \n ## Contributing  \n ${data.Contributing} \n ## Test  \n ${data.Tests} \n ## Username  \n ${data.Username} \n ## Email \n${data.email} 


`;
}

module.exports = generateMarkdown;




