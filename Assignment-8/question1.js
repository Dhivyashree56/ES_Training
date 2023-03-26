//Write a program that takes a date and prints the day on which the date falls on.

const date=new Date('Jun 5, 2003 23:25:10');
const day=date.getDay();
switch(day){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
}