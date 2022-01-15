const userName = prompt("আপনার নাম লিখুন : ");
// const userName = "Borhan Uddin";
let showName = `হ্যালো ${userName}`;

var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

//Get Income Data From Localstorage
let incData = JSON.parse(localStorage.getItem("incomeDetails"));

if (incData) {
  incData.forEach((element) => {
    income(element);
  });
}

//Get Expense Data From Localstorage
let expData = JSON.parse(localStorage.getItem("expenseDetails"));

if (expData) {
  expData.forEach((element) => {
    expense(element);
  });
}

//Income Function
function income(obj) {
  let incDtl = document.getElementById("income-detail");
  let incAmnt = document.getElementById("incamount");

  let incDetails = incDtl.value;
  let incAmount = incAmnt.value;

  if (obj) {
    date = obj.idate;
    incDetails = obj.idesc;
    incAmount = obj.iamm;
  }

  if (incAmount == "" || incAmount == NaN) {
    document.getElementById("modal-title").innerHTML = showName;
    document.getElementById("incMessage").innerHTML =
      "আপনি আপনার কোন প্রকার আয় এর তথ্য প্রদান করেননি।";
    return false;
  } else {
    var incNumber = parseFloat(incAmount);
  }

  if (incNumber < 0) {
    inclclAdd();
    alert("Please enter correct value greater than 0");
  } else {
    // Creating and adding data to table
    let tr = document.createElement("tr");
    tr.setAttribute("id", "itr");
    // Create Table <td>
    let crdate = document.createElement("th");
    crdate.innerHTML = date;
    crdate.setAttribute("id", "idate");
    let cedesc = document.createElement("td");
    cedesc.innerHTML = incDetails;
    cedesc.setAttribute("id", "idesc");
    let cramm = document.createElement("td");
    cramm.innerHTML = incAmount;
    cramm.setAttribute("id", "iamm");

    // <td> Append Inside <tr>
    tr.appendChild(crdate);
    tr.appendChild(cedesc);
    tr.appendChild(cramm);
    //  Pick Income List Id
    let tbody = document.getElementById("income-list");
    // <tr> Append Inside Income List Id
    tbody.appendChild(tr);

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
  inclclAdd();
}

//Expense Function
function expense(obj) {
  var exdtl = document.getElementById("ex-detail");
  var exAmnt = document.getElementById("ex-amount");

  let exDetails = exdtl.value;
  let exAmount = exAmnt.value;

  if (obj) {
    date = obj.edate;
    exDetails = obj.edesc;
    exAmount = obj.eamm;
  }

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
    // Creating and adding data to table
    let tr = document.createElement("tr");
    tr.setAttribute("id", "etr");
    // Create Table <td>
    let crdate = document.createElement("th");
    crdate.innerHTML = date;
    crdate.setAttribute("id", "edate");
    let cedesc = document.createElement("td");
    cedesc.innerHTML = exDetails;
    cedesc.setAttribute("id", "edesc");
    let cramm = document.createElement("td");
    cramm.innerHTML = exAmount;
    cramm.setAttribute("id", "eamm");
    // <td> Append Inside <tr>
    tr.appendChild(crdate);
    tr.appendChild(cedesc);
    tr.appendChild(cramm);
    //  Pick Income List Id
    let tbody = document.getElementById("expense-list");
    // <tr> Append Inside Income List Id
    tbody.appendChild(tr);

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
  explclAdd();
}

// Income Add Localstorsge
function inclclAdd() {
  let inclcs = document.querySelectorAll("#itr");

  let lisArr = Array.from(inclcs);

  let arr = [];

  lisArr.forEach((element) => {
    arr.push({
      idate: element.children[0].innerText,
      idesc: element.children[1].innerText,
      iamm: element.children[2].innerText,
    });
  });

  localStorage.setItem("incomeDetails", JSON.stringify(arr));
}

// Expense Add Localstorsge
function explclAdd() {
  let exclcs = document.querySelectorAll("#etr");

  let lisArr = Array.from(exclcs);

  let arr = [];

  lisArr.forEach((element) => {
    arr.push({
      edate: element.children[0].innerText,
      edesc: element.children[1].innerText,
      eamm: element.children[2].innerText,
    });
  });

  localStorage.setItem("expenseDetails", JSON.stringify(arr));
}
