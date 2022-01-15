// const userName = prompt("Type Your Name : ");
const userName = "Borhan Uddin";
let showName = `হ্যালো ${userName}`;

var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
console.log(date);

//Income Function
function income() {
  let incDetails = document.getElementById("income-detail").value;
  let incAmount = document.getElementById("incamount").value;

  if (incAmount == "" || incAmount == NaN) {
    document.getElementById("modal-title").innerHTML = showName;
    document.getElementById("incMessage").innerHTML =
      "আপনি আপনার কোন প্রকার আয় এর তথ্য প্রদান করেননি।";
    return false;
  } else {
    var incNumber = parseFloat(incAmount);
  }

  if (incNumber < 0) {
    alert("Please enter correct value greater than 0");
  } else {
    let incList = document.createTextNode(
      incDetails + " = " + incAmount + " Taka"
    );
    let inli = document.createElement("li");
    inli.appendChild(incList);
    document.getElementById("income-list").appendChild(inli);
    let balance = document.getElementById("prebalance").innerText;
    let balanceAmount = parseFloat(balance);
    let totalIncome = balanceAmount + incNumber;
    document.getElementById("prebalance").innerText =
      parseFloat(totalIncome).toFixed(2);

    let balancenow = document.getElementById("balance").innerText;
    let balanceNownum = parseFloat(balancenow);

    let dueBalance = balanceNownum + incNumber;
    let dueB = parseFloat(dueBalance).toFixed(2);

    //Modal Show
    document.getElementById("modal-title").innerHTML = showName;
    document.getElementById("incMessage").innerHTML =
      "আপনার " +
      incDetails +
      " আয় সর্বমোট " +
      incNumber +
      " টাকা সফল ভাবে যোগ হয়েছে। ";

    document.getElementById("balance").innerHTML = dueB;
    document.getElementById("income-detail").value = "";
    document.getElementById("incamount").value = "";
  }
}

//Expense Function
function expense() {
  var exDetails = document.getElementById("ex-detail").value;
  var exAmount = document.getElementById("ex-amount").value;
  if (exAmount == "" || exAmount == NaN) {
    document.getElementById("exp-title").innerHTML = showName;
    document.getElementById("expMessage").innerHTML =
      "আপনি আপনার কোন প্রকার ব্যয় এর তথ্য প্রদান করেননি।";
    return false;
  } else {
    var exAmountnumber = parseFloat(exAmount);
  }

  if (exAmountnumber < 0) {
    alert("Please Input Correct Value greater than 0");
  } else {
    var exlist = document.createTextNode(
      exDetails + " = " + exAmount + " Taka"
    );
    var list = document.createElement("li");
    list.appendChild(exlist);
    document.getElementById("expense-list").appendChild(list);

    var expenseBalance = document.getElementById("total-expense").innerText;
    var expenseNumber = parseFloat(expenseBalance);
    var totalExpense = exAmountnumber + expenseNumber;

    var balanceN = document.getElementById("balance").innerText;
    var balanceNum = parseFloat(balanceN);

    var dueBalanceN = balanceNum - exAmountnumber;
    var dueBalanceNew = parseFloat(dueBalanceN).toFixed(2);
    document.getElementById("balance").innerHTML = dueBalanceNew;

    document.getElementById("total-expense").innerHTML =
      parseFloat(totalExpense).toFixed(2);

    //Modal Show
    document.getElementById("exp-title").innerHTML = showName;
    document.getElementById("expMessage").innerHTML =
      "আপনার " +
      exDetails +
      " ব্যয় সর্বমোট " +
      exAmountnumber +
      " টাকা সফল ভাবে যোগ হয়েছে। ";

    document.getElementById("ex-detail").value = "";
    document.getElementById("ex-amount").value = "";
  }
}
