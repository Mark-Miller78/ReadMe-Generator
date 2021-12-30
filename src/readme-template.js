const generateInstall = installText =>{
    if(!installText){
        return '';
    }

    return `
## Installation

${installText}
    `
}

const generateContribute =contributeText=>{
    if(!contributeText){
        return '';
    }

    return `
## Contributing

${contributeText}
    `
}

const generateTest = testText=>{
    if(!testText){
        return ''
    }

    return `
## Test

${testText}
    `
}
module.exports = answers =>{
    const{confirmTable, installation, contributing, test, ...required} = answers;

    return `
# ${required.name}

## Description

${required.Description}

${generateInstall(installation)}

## Usage

${required.usage}

${generateContribute(contributing)}

${generateTest(test)}

## Questions 

Click on my username to be directed to my GitHub profile. [${required.username}](https://github.com/${required.username})
    
If you have any questions about this project, please feel free to reach out via email at ${required.questions}

`
};

