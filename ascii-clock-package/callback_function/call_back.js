function greetMe(name, callback) {
    setTimeout(() => {
        callback(null, `Hello, ${name}!`);
    },3000);
}

greetMe("Alice", (error, greeting) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log(greeting);
    }
});

console.log("This will log before the greeting due to the asynchronous nature of the callback.");