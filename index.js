const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'What shape would you like your logo to be?',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your logo to be?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What (3) characters would you like your logo to display?',
    },{
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
    },
];

function shapeChoice(shape, shapeColor) {
    let logoShape;
    if (shape === 'Circle') {
        logoShape = new Circle();

    } else if (shape === 'Square') {
        logoShape = new Square();

    } else {
        logoShape = new Triangle();
    }

    logoShape.setColor(shapeColor);
    return logoShape.render();
};

function generateLogo(userInput) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shapeChoice(userInput.shape, userInput.shapeColor)}
    <text x="150" y="125" font-size="80" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text></svg>`
    
};

function saveFile(file, userInput){
    const fileData = generateLogo(userInput);
    // const filePath = `${__dirname}/${file}`;
    fs.writeFile(file, fileData, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Generated ${file}`);
        }
});
}

function startLogoGenerator() {
    inquirer.prompt(questions)
    .then((answers) => {
        if (answers.text.length < 1 || answers.text.length > 3) {
            console.log('Enter only 1-3 characters')
            generateLogo(userInput)
        } else {
            saveFile('logo.svg', answers)
        }
    });

};

startLogoGenerator();