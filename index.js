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
        message: 'What 3 characters would you like your logo to display?',
    },{
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
    },
];