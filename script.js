(function () {
  //create variables that take information from the html code
  const buttonCalculate = document.querySelector("#buttonCalculate");
  const outputCalculator = document.querySelector("#outputCalculator");
  const weightItem = document.querySelector("#calculatorr");
  //the function that accepts the number that the user has set and based on it calculates the normalized number of calories per day
  buttonCalculate.addEventListener("click", function () {
    const changeWeightItem = weightItem.value;
    let numberOfCalories = changeWeightItem * 35;
    outputCalculator.innerHTML = `<p> Ваша норма калорій на день:${numberOfCalories}</p>`;
  });
  //create variables that take information from the html code
  const buttonData = document.querySelector("#buttonData");
  const outputData = document.querySelector("#outputData");
  const nameProductItem = document.querySelector("#inputDataItem");
  //the function that accepts the product name specified by the user and based on it searches for the desired "products" key and its value
  buttonData.addEventListener("click", function () {
    const changeNameProductItem = nameProductItem.value;
    for (let key of Object.keys(products)) {
      if (changeNameProductItem.toLowerCase() === key) {
        const value = products[key];
        outputData.innerHTML = `<p>${key}: ${value}ккал/100гр</p>`;
        break;
      }
    }
  });
})();
