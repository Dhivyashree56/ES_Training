//Write a program that takes a date and prints the day on which the date falls on.

const date=new Date('Jun 5, 2003 23:25:10');
function dateDay(date){
    const day=date.getDay();
    switch(day){
    case 0:
        return 'Sunday';
        break;
    case 1:
        return 'Monday';
        break;
    case 2:
        return 'Tuesday';
        break;
    case 3:
        return 'Wednesday';
        break;
    case 4:
        return 'Thursday';
        break;
    case 5:
        return 'Friday';
        break;
    case 6:
        return 'Saturday';
    }
}
//dateDay(date);
module.exports=dateDay;