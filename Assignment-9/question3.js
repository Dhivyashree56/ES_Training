//Create a function which executes linux command (eg: ifconfig) from nodejs and prints the result in console.

const { exec } = require("child_process");

exec("ipconfig", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
