/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


var amountBought = 400;
var coke = 30;

if(amountBought > 500){
    console.log("Burger and Free Coke");
} else{
    console.log("Burger: ", amountBought, "\nCoke Added: ", coke, "\nTotal Amount: ", amountBought+coke)
}