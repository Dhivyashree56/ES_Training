setInterval(
    ()=> console.log('HEY GOOGLE is printed every 5 seconds'),'5000'
);

let counter=0;

const myIntervalFunc=()=>{
    console.log('Hello world');
    counter+=1;
    if(counter === 5){
        console.log('Done');
        clearInterval(TimerId);
    }
};
const TimerId=setInterval(myIntervalFunc,'1000');