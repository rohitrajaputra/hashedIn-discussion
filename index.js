function sayHello() {
    console.log("hello world");
}
var user = {
    id: "asd",
    firstName: "",
    lastName: "qwerty",
    gender: "male",
    phoneNumber: 123456789,
    email: "q@queueMicrotask.com"
};
function displayData(data) {
    var output = [];
    data.forEach(function (ele) {
        var result = {};
        for (var key in ele) {
            if (ele[key]) {
                result[key] = ele[key];
            }
        }
        output.push(result);
    });
    return output;
}
var sample = [user];
// console.log(displayData(sample));
var prices = [34, 56, 35, 58, 76, 23, 67, 89, 12, 74];
function maxProfit(prices) {
    var maxProfit = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var j = 1; j < prices.length; j++) {
            var profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
console.log(maxProfit(prices));
