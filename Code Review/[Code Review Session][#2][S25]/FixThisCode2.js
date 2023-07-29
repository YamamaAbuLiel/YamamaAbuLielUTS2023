function foodsAndDrinks() {
    var drinks = ['lemonade', 'soda', 'tea', 'water'];
    var foods = ['beans', 'chicken', 'rice'];
  
    for (var i = 0; i < drinks.length; i++) {
      console.log(drinks[i]);
    }
  
    for (var j = 0; j < foods.length; j++) {
      console.log(foods[j]);
    }
  }
  
  function calculateAge() {
    const birthDate = new Date(1985, 1, 16); // Birthdate
    const currentDate = new Date(); 
  
    const age= currentDate.getFullYear() - birthDate.getFullYear(); // Calculate age
  
    return age;
  }
  
function printNumberAsWord(value) {
    const numbersAsWords = ["zero", "one", "two", "three", "four", "five"];
  
    if (value >= 0 && value < numbersAsWords.length) {
      return numbersAsWords[value];
    }
  
    return " ";
  }
  