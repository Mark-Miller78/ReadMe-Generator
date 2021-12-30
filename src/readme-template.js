const generateInstall = installText =>{
    if(!installText){
        return '';
    }

    return `
        ## Installation
        ${installText}
    `
}
module.exports = answers =>{
    const{confirmTable, installation, contributing, test, ...required} = answers;

    return `
        # ${required.name}

        ## Description
        ${required.description}

        ${generateInstall(installation)}

        ## Usage
    `
};

