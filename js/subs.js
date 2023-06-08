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
                price += 12;
                calories +=250;
                break;
            case "Pulled Pork":
                price+=15;
                calories+= 168;
                break;
            case "Ham":
                price+= 7;
                calories+= 145;
                break;
            case "Bacon":
                price += 11;
                calories+= 270;
                break;
            case "Tuna":
                price+= 13;
                calories+=132;
                break;
            case "Tomato":
                price+=5;
                calories+= 33;
                break;
            case "Pickles":
                price +=3;
                calories += 11;
                break;
            case "Onion":
                price += 5;
                calories +=40;
                break;
            case "Cucumber":
                price += 3;
                calories+= 30;
                break;
            case "Avocado":
                price += 10;
                calories+=120;
                break;
            case "Lettuce":
                price+=5;
                calories+=15;
                break;
            case "Coleslaw":
                price += 7;
                calories +=152;
                break;
            case "Pineapple":
                price += 6;
                calories +=50;
                break;
            case "Brie":
                price +=12;
                calories+=95;
                break;
            case "Cheddar":
                price += 10;
                calories+= 113;
                break;
            case "Feta":
                price +=11;
                calories += 75;
                break;
            case "Gouda":
                price += 12;
                calories += 101
                break;
            case "Cream Cheese":
                price+=11;
                calories+= 97;
                break;
            case "Goats Cheese":
                price += 16;
                calories+= 103;
                break;
            default:
                price+=0;
                calories+=0;
  }
  //for selected toppings
        for(let i = 0; i<toppingCount;i++){
            switch(toppingArr[i]){
                case "Chicken":
                    price += 10;
                    calories +=165;
                    break;
                case "Beef":
                    price += 12;
                    calories +=250;
                    break;
                case "Pulled Pork":
                    price+=15;
                    calories+= 168;
                    break;
                case "Ham":
                    price+= 7;
                    calories+= 145;
                    break;
                case "Bacon":
                    price += 11;
                    calories+= 270;
                    break;
                case "Tuna":
                    price+= 13;
                    calories+=132;
                    break;
                case "Tomato":
                    price+=5;
                    calories+= 33;
                    break;
                case "Pickles":
                    price +=3;
                    calories += 11;
                    break;
                case "Onion":
                    price += 5;
                    calories +=40;
                    break;
                case "Cucumber":
                    price += 3;
                    calories+= 30;
                    break;
                case "Avocado":
                    price += 10;
                    calories+=120;
                    break;
                case "Lettuce":
                    price+=5;
                    calories+=15;
                    break;
                case "Coleslaw":
                    price += 7;
                    calories +=152;
                    break;
                case "Pineapple":
                    price += 6;
                    calories +=50;
                    break;
                case "Brie":
                    price +=12;
                    calories+=95;
                    break;
                case "Cheddar":
                    price += 10;
                    calories+= 113;
                    break;
                case "Feta":
                    price +=11;
                    calories += 75;
                    break;
                case "Gouda":
                    price += 12;
                    calories += 101
                    break;
                case "Cream Cheese":
                    price+=11;
                    calories+= 97;
                    break;
                case "Goats Cheese":
                    price += 16;
                    calories+= 103;
                    break;
                default:
                    price+=0;
                    calories+=0;
      }
    }

    let sauceInp = document.getElementById("sauceSelect").value;
    switch(sauceInp){
        case "BBQ":
            price+= 5;
            calories+=29;
            break;
        case "German Mustard":
            price += 6;
            calories += 5;
            break;
        case "Mayonnaise":
            price += 6;
            calories += 9
            break;
        case "Tomato Sauce":
            price += 2;
            calories +=4;
            break;
        case "Thousand Islands":
            price += 3;
            calories += 59;
            break;
        default:
            price +=0;
            calories +=0;
    }

    for(let i = 0; i < sauceCount; i++){
        switch(sauceArr[i]){
            case "BBQ":
                price+= 5;
                calories+=29;
                break;
            case "German Mustard":
                price += 6;
                calories += 5;
                break;
            case "Mayonnaise":
                price += 6;
                calories += 9
                break;
            case "Tomato Sauce":
                price += 2;
                calories +=4;
                break;
            case "Thousand Islands":
                price += 3;
                calories += 59;
                break;
            default:
                price +=0;
                calories +=0;
        }
    }
      document.getElementById("orderCal").innerHTML = "Calories: "+calories
      document.getElementById("orderPrice").innerHTML = "Price: R"+price+".00";

      console.log(price);
}

displayOrder = () =>{
    let area = document.getElementById("orderContainer");
    let cost = document.getElementById("orderPrice");
    let cal = document.getElementById("orderCal");

    let overallTotal = 0;

    area.innerHTML = "";

    for(let i = 0; i<orderArr.length;i++){
        let name = orderArr[i].sandwichName;
        let bread = orderArr[i].sandwichBread;
        let sauces = orderArr[i].sandwichSauce;
        let toppings = orderArr[i].sandwichToppings;




        area.innerHTML+= `
        <div class="card border-info mb-3 text-center" id="orderCard">
            <img id="orderCard" class="card-img-top" src="../assets/jumbo/sandwhich header.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${bread} , ${sauces} ${toppings}</p>
              <a href="#" class="btn btn-danger">Remove From Order</a>
            </div>
          </div>
        `
    }
}


removeSandwich = () =>{
    orderArr.pop();
    console.log(orderArr)
}