// https://github.com/AhsanSium/ph-assignment3 
// Function to convert Meter unit from Kilometer Unit .......................

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var result = kilometer * 1000;
        return result;
        
    } 
    else if (kilometer < 0) {
        return 'Error, Distance Cannot be Negative';
    }
    else{
        return 'Error Input';
    }
}

console.log(kilometerToMeter(100));
console.log(kilometerToMeter(-100));

//Function to determine total Buddget from given item numbers...........................

function budgetCalculator(watchCount, mobileCount, laptopCount) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;

    if (watchCount, mobileCount, laptopCount >= 0) {
        var budget = (watchCount * watchPrice) + (mobileCount * mobilePrice) + (laptopCount * laptopPrice);
        return budget;    
    } 
    else if (watchCount, mobileCount, laptopCount < 0) {
        return 'Error, Quantity Cannot be Negative';
    }
    else{
        return 'Error Input';
    }
}

console.log(budgetCalculator(1, 1, 1));
console.log(budgetCalculator(5, 4, 1));

//Function to find out total hotel bills from given days.........................

function hotelCost(days) {
    var fair = 0;
    if ((days < 11) && (days >= 0)) {
        fair = days * 100;
        return fair;
    } 
    else if((days > 10) && (days < 21)){
        fair = 1000 + ((days - 10) * 80);
        return fair;
    }
    else if(days > 20){
        fair = 1800 + ((days - 20) * 50);
        return fair;
    }
    else{
        return "Invalid Input";
    }
}

console.log(hotelCost(199));
console.log(hotelCost(-19));

//Function to find the largest name from a given array of names................................

function megaFriend(friend) {
    var large = '';
    if(friend.length == 0){
        return 'Empty Array';
    }
    for (var index = 0; index < friend.length; index++) {
        if(friend[index].length > large.length){
            large = friend[index];
        }
    }
    return large;
}

var friendList = ["Ahsan", "Sium", "Nafis", "Ayman", "Arya", "rayan", "Shabab","Ahsanul"];
var emptyList = [];

console.log(megaFriend(friendList));
console.log(megaFriend(emptyList));