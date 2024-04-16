function sayHello(): void {
  console.log("hello world");
}

// sayHello()

interface Iuser {
  id?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  phoneNumber?: number;
  email?: string;
}

const user: Iuser = {
  id: "asd",
  firstName: "",
  lastName: "qwerty",
  gender: "male",
  phoneNumber: 123456789,
  email: "q@queueMicrotask.com",
};

function displayData(data: Iuser[]): Iuser[] {
  let output: Iuser[] = [];
  data.forEach((ele: Iuser) => {
    let result = {};
    for (let key in ele) {
      if (ele[key]) {
        result[key] = ele[key];
      }
    }
    output.push(result);
  });
  return output;
}

const sample = [user];
// console.log(displayData(sample));

const prices = [34, 56, 35, 58, 76, 23, 67, 89, 12, 74];

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(maxProfit(prices));
