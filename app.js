// we are going to read the user input from the command line
//we will need to use a module of node.js because node.js does not
// have built-in support for reading user input from the command line
//here we will use the 'readline'module.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Please enter your age: ', (age) => {
    if (age < 18){
        console.log('You are under age to enter into this app.');
    }
    else{
        console.log('Welcome to our app!');
    }
    rl.close();
})
rl.on('close', () => {
    console.log('Exiting the application....');
    process.exit(0);
});