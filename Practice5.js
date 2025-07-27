/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 50;

var ticketPrice = 800;

if (age < 10){
    console.log("Students get a 50% discount.", "\nTicket Price: ", ticketPrice * 50 /100)
} else if(age >= 60){
    console.log("Senior citizens get a 15% discount.", "\nTicket Price: ", ticketPrice - (ticketPrice * 15 /100))
} else{
    console.log("Regular Price: ", ticketPrice)
}
