//Sauce Variables
let sauceArr = [];
let sauceCount = 0;
//Topping Variables 
let toppingArr = [];
let toppingCount = 0;
//order variables
let orderArr = [];


addTopping = () =>{
    let toppingInp = document.getElementById("toppingSelect").value
    toppingArr[toppingCount] = toppingInp;
    toppingCount++;

    console.log(toppingArr)
}

addSauce = () =>{
    let sauceInp = document.getElementById("sauceSelect").value
    sauceArr[sauceCount] = sauceInp;
    sauceCount++; 

    console.log(sauceArr);

}



makeSandwich = () =>{
    let name = document.getElementById("inputSubName").value;
    let bread = document.getElementById("breadSelect").value;


    
       orderArr.push({
            sandwichName: name,
            sandwichBread: bread,
            sandwichToppings: toppingArr,
            sandwichSauce: sauceArr
       });
    
    console.log(orderArr);
    document.getElementById("sandwichForm").reset();
}



sandwichCost = () =>{
    console.log("hello World")
    let price = 0;
    let calories = 0;
    let bread = document.getElementById("breadSelect").value;
    switch(bread) {
        case "White":
            price+= 15;
            calories +=132;
            break;
        case "Ciabatta":
            price+=20;
            calories += 140;
            break;
        case "Rye":
            price+=18;
            calories += 110
            break;
        case "Sourdough":
            price+=25;
            calories += 185;
            break;
        case "French Loaf":
            price+=30;
            calories += 190;
            break;
        default:
            calories = 0;
            price = 0;
      }

      let toppingInp = document.getElementById("toppingSelect").value;
      switch(toppingInp){
            case "Chicken":
                price += 10;
                calories +=165;
                break;
            case "Beef":
                price += 15;
                calories +=250;
                break;
            case "Pulled Pork":
                break;
            case "Ham":
                break;
            case "Bacon":
                break;
            case "Tuna":
                break;
            case "Tomato":
                break;
            case "Pickles":
                break;
            case "Onion":
                break;
            case "Cucumber":
                break;
            case "Avocado":
                break;
            case "Lettuce":
                break;
            case "Coleslaw":
                break;
            case "Pineapple":
                break;
            case "Brie":
                break;
            case "Cheddar":
                break;
            case "Feta":
                break;
            case "Gouda":
                break;
            case "Cream Cheese":
                break;
            case "Goats Cheese":
                break;
            default:
                price+=0;
                calories+=0;
      }
  
      console.log(toppingArr)

      document.getElementById("orderCal").innerHTML = "Calories: "+calories
      document.getElementById("orderPrice").innerHTML = "Price: R"+price+".00";

      console.log(price);
}