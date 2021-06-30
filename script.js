// document.getElementById('')
// document.querySelector('')


// Total Balance -- target the element
//const balanceElement = document.getElementById("balance");
const balanceElement = document.querySelector("#balance");

//---->> Values from the user --> footer
// Value input -- target input that the user typed
const valueInputElement = document.querySelector("#numberUser");

// Description -- target the description typed by the user
const descriptionInput = document.querySelector("#descUser");
//const descriptionInput = document.getElementById("descUser");

// Income/expense -- target the select option: Income or Expense 
const selectElement = document.querySelector("select");
console.log(selectElement);

// Addition button
const additionButtonElement = document.querySelector("footer button");

// ---> New Entry list -- to populate what the user typed: Description, value, expense/income
const entryListElement = document.querySelector("section ul");

// console.log(balanceElement)
// console.log(valueInputElement)
// console.log(descriptionInput)
// console.log(selectElement )
// console.log(additionButtonElement)
// console.log(entryListElement)

// Add entries with what the user typed: amount, description and income/expense
function addEntry(amount, operation, description) {
  // OPTION 2 -- string and Inner HTML
  let sign = "";
  if (operation === "income") { // check if the operation is income or expense
    sign = "+";
  } else if (operation === "expense") {
    sign = "-";
  }
 // adding a class to <li>, it will be red or green background
  const card = `<li class="${operation}"> 
                  <em>${description}</em>
                  <span>${sign}</span>
                  <strong>${amount}$</strong>
                  <button class="remove" onclick="deleteItemHandler(event)">Delete</button>
               </li>`
  console.log(card); // this is a string
  // element.insertAdjacentHTML(position, text) ---->>>>
  // ---->>>> parses HTML string and insert the node into the DOM at a specified position.

  entryListElement.insertAdjacentHTML("beforeend", card);
  console.log(entryListElement)




  // OPTION 1 -- Create element -- by Ironhack

  // const listEntry = document.createElement("li");
  // listEntry.classList.add(operation);

  // const listEntryDescription = document.createElement("em");
  // listEntryDescription.innerText = description; // using arguments
  // //listEntryDescription.innerText = "Description"; // manually by Ironhack

  // const listEntryOperator = document.createElement("span");
  // if (operation === "income") {
  //   listEntryOperator.innerText = "+";
  // } else if (operation === "expense") {
  //   listEntryOperator.innerText = "-";
  // }

   // const listEntryValue = document.createElement("strong");
  // listEntryValue.innerText = amount + "$";

  // listEntry.appendChild(listEntryDescription); // <em>
  // listEntry.appendChild(listEntryOperator); // <span>
  // listEntry.appendChild(listEntryValue); //<strong>

  // entryListElement.appendChild(listEntry);
}

function updateBalance() {
  let total = 0;

  // // OPTION 1
  // entryListElement --> is the ("section ul"), a collection of "li"
  // entryListElement.children --> HTMLCollection(2) [li.income, li.expense, ......]
  console.log(entryListElement);
  console.log(entryListElement.children);
  for (let list of entryListElement.children) {
    const valueElement = list.querySelector("strong").innerHTML;
    
    // parseInt --> parse a string into a number
    const value = parseInt(valueElement);
    //let temp = <strong>10$</strong>
    // temp.innerText --> "10$"
    //parseInt("10$") ---> 10
    
    const operation = list.querySelector("span").innerHTML;
    

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }
  // OPTION 2
  // Array.from(entryListElement.children).forEach(item => {
  //   const valueElement = item.querySelector("strong");
  //   const operationElement = item.querySelector("span");

  //   const value = parseInt(valueElement.innerText);
  //   //console.log(valueElement.innerText); // 10$
  //   //console.log(value); // 10
  //   const operation = operationElement.innerText;

  //   if (operation === "+") {
  //     total = total + value;
  //   } else if (operation === "-") {
  //     total = total - value;
  //   }
  // });

  balanceElement.innerText = total + "$";
}

// When the button is clicked
additionButtonElement.onclick = function() {
  // get the values from: input number, input text or description and select option: income or expense
  // and store the values in variables
  const amount = valueInputElement.value; // get the value from the input
  const operation = selectElement.value; // get select option 
  const description = descriptionInput.value; // get the input description



  console.log(amount, operation, description);

  // add the items to display it
  addEntry(amount, operation, description);

  // change/set the value to empty string
  valueInputElement.value = "";
  
  descriptionInput.value = "";

  // option 1 -- select the option index 0, which is "income"
  selectElement.selectedIndex = "0"; // <option id="income"value="income"  selected>+ Income</option>
  // option 2 -- using an id and set selected to true
  //document.getElementById("income").selected = true;

  // update the Total Balance
  updateBalance();
};

console.log(entryListElement.children)

const deleteItemHandler = event => {
  event.preventDefault();
  debugger
  const item = event.target.closest("li");
  item.remove();
  updateBalance();
}

  

