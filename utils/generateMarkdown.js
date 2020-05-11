function generateMarkdown(data) {
  return `
# ${data.badge} # ${data.ProjectTitle}


`;
}

module.exports = generateMarkdown;
