
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  
  services['Розбити скло'] = "200 грн";
  
  
  services.price = function() {
    var total = 0; 
    for (var key in this) {
      if (typeof this[key] === 'string') { 
        var priceValue = parseInt(this[key]); 
        total += priceValue; 
      }
    }
    return total + " грн"; 
  };
  
  
  services.minPrice = function() {
    var min = Infinity; 
    for (var key in this) {
      if (typeof this[key] === 'string') {
        var priceValue = parseInt(this[key]);
        if (priceValue < min) { 
          min = priceValue; 
        }
      }
    }
    return min + " грн"; 
  };
  
  
  services.maxPrice = function() {
    var max = 0; 
    for (var key in this) {
      if (typeof this[key] === 'string') {
        var priceValue = parseInt(this[key]);
        if (priceValue > max) { 
          max = priceValue; 
        }
      }
    }
    return max + " грн"; 
  };
  
  
  console.log("Загальна вартість послуг: " + services.price()); 
  console.log("Мінімальна ціна: " + services.minPrice()); 
  console.log("Максимальна ціна: " + services.maxPrice()); 
  