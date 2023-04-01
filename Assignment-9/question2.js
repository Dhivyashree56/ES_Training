/*Explain difference ways in which child process can be created and difference b/w them.

spwan():
    The spawn function launches a command in a new process and we can use it to pass that command any arguments.

fork():
    The difference between spawn and fork is that a communication channel is established to the child process when using fork, 
    so we can use the send function on the forked process along with the global process object itself to exchange messages between the parent and forked processes.
exec():
    The exec() function creates a new shell and executes a given command. 
    The output from the execution is buffered, which means kept in memory, and is available for use in a callback.

execFile():
    The execFile() function works similar as exec() function. But the difference is execFile does not create the shell makes it more efficient than exec(). */

//spawn():

const { spawn } = require('child_process');

const spawn_child = spawn('dir',['C:\\Users'], {shell: true});

spawn_child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
  
spawn_child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
  
spawn_child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

//fork():

//fork.js(Parent process):
const {fork} = require('child_process');

const child = fork(__dirname + '/sub.js');

child.on('message', function(m) {
console.log('Parent process received:', m);
});

child.send({ hello: 'from parent process' });

child.on('close', () => {
    console.log('Stream ended');
});

//sub.js(Child process):
process.on('message', function(m) {
    console.log('Child process received:', m);
  });
    
process.send({ hello: 'from child process' });

//exec():

const {exec}=require('child_process');

exec('dir',(stderr,stdout)=>{
    if(stderr){
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

//execFile():

const {execFile} = require ('child_process');

execFile('./inputfile1.txt',(stderr,stdout) =>{
    if(stderr){
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})