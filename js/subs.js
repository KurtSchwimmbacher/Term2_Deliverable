//Sauce Variables
let sauceArr = [];
let sauceCount = 0;
//Topping Variables 
let toppingArr = [];
let toppingCount = 0;
//Drink variables
let drinkArr = [];
let drinkCount = 0;
//order variables
let orderArr = [];
let drinkOrderArr = [];


addTopping = () =>{
    let toppingInp = document.getElementById("toppingSelect").value
    toppingArr[toppingCount] = toppingInp;
    toppingCount++;

    let area = document.getElementById("toppingList");
    area.innerHTML = `
        <p>
            Your Toppings: ${toppingArr.join(", ")}
        </p>
    `
}

addSauce = () =>{
    let sauceInp = document.getElementById("sauceSelect").value
    sauceArr[sauceCount] = sauceInp;
    sauceCount++; 

    let area = document.getElementById("sauceList");
    area.innerHTML = `
        <p>
            Your Sauces: ${sauceArr.join(", ")}
        </p>
    `

}

addDrink = () =>{
    let drinkInp = document.getElementById("drinkSelect").value
    drinkArr[drinkCount] = drinkInp;
    drinkCount++; 

    console.log("Drink Order: "+drinkArr);

    let area = document.getElementById("drinksList");
    area.innerHTML = `
        <p>
            Your Drinks: ${drinkArr.join(", ")}
        </p>
    `

}

validateSauceTopping = () =>{
    if(sauceCount>=1 && toppingCount>=5){
        return 0;
    }
    else if(sauceCount<1 && toppingCount>=5){
        return 1;
    }
    else if(sauceCount>=1 && toppingCount<5){
        return 2;
    }
    else if(sauceCount<1 && toppingCount<5){
        return 3;
    }
}



makeSandwich = () =>{
    let name = document.getElementById("inputSubName").value;
    let bread = document.getElementById("breadSelect").value;
    let calories = 0;
    let price = 0;


    if(validateSauceTopping() === 1){
        let area = document.getElementById("sauceList");
        area.innerHTML += `
            <p  style="color: red;">Please add at least one sauce</p>
        `
    }
    if(validateSauceTopping() === 2){
        let area = document.getElementById("toppingList");
        area.innerHTML += `
            <p  style="color: red;">Please add at least five toppings</p>
        `
    }
    if(validateSauceTopping() === 3){
        let area = document.getElementById("sauceList");
        let areaTwo = document.getElementById("toppingList");
        area.innerHTML += `
            <p  style="color: red;">Please add at least one sauce</p>
        `
        areaTwo.innerHTML += `
            <p  style="color: red;">Please add at least five toppings</p>
        `
    }

    if(validateSauceTopping() === 0){
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
    
        //for selected sauce
        for(let i =0; i < sauceCount; i++){
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
       

        orderArr.push({
            sandwichName: name,
            sandwichBread: bread,
            sandwichToppings: toppingArr,
            sandwichSauce: sauceArr,
            sandwichCal: calories,
            sandwichCost: price,
        });

 
        document.getElementById("sandwichForm").reset();
    }

    
}


drinkOrderArr = () =>{
         //for drinks
         let drinkPrice = 0;
         let drinkCal = 0;
         let drinkInp = document.getElementById("drinkSelect").value;
         switch(drinkInp){
             case "Coke":
                 drinkPrice+= 14;
                 drinkCal+=139;
                 break;
             case "Pepsi":
                 drinkPrice += 14;
                 drinkCal += 150;
                 break;
             case "Sprite":
                drinkPrice += 14;
                drinkCal += 49;
                 break;
             case "Fanta Orange":
                 drinkPrice += 14;
                 drinkCal +=63;
                 break;
             case "2l Coke":
                 drinkPrice += 30;
                 drinkCal += 417;
                 break;
             default:
                 drinkPrice +=0;
                 drinkCal +=0;
         }

         for(i = 0; i<drinkCount;i++){
            switch(drinkArr[i]){
                case "Coke":
                    drinkPrice+= 14;
                    drinkCal+=139;
                    break;
                case "Pepsi":
                    drinkPrice += 14;
                    drinkCal += 150;
                    break;
                case "Sprite":
                   drinkPrice += 14;
                   drinkCal += 49;
                    break;
                case "Fanta Orange":
                    drinkPrice += 14;
                    drinkCal +=63;
                    break;
                case "2l Coke":
                    drinkPrice += 30;
                    drinkCal += 417;
                    break;
                default:
                    drinkPrice +=0;
                    drinkCal +=0;
            }
         }

         drinkArr.push({
            drink:drinkInp,
            drinkCost: drinkPrice,
            drinkCalories: drinkCal
         })
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

    //for selected sauce
    for(let i =0; i < sauceCount; i++){
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
      
    //for drinks
    let drinkInp = document.getElementById("drinkSelect").value;
         switch(drinkInp){
             case "Coke":
                price+= 14;
                calories+=139;
                 break;
             case "Pepsi":
                price += 14;
                calories += 150;
                 break;
             case "Sprite":
                price += 14;
                calories += 49;
                 break;
             case "Fanta Orange":
                price += 14;
                calories +=63;
                 break;
             case "2l Coke":
                price += 30;
                calories += 417;
                 break;
             default:
                price +=0;
                calories +=0;
         }

         //for selected drinks
         for(i = 0; i<drinkCount;i++){
            switch(drinkArr[i]){
                case "Coke":
                    price+= 14;
                    calories+=139;
                    break;
                case "Pepsi":
                    price += 14;
                    calories += 150;
                    break;
                case "Sprite":
                    price += 14;
                    calories += 49;
                    break;
                case "Fanta Orange":
                    price += 14;
                    calories +=63;
                    break;
                case "2l Coke":
                    price += 30;
                    calories += 417;
                    break;
                default:
                    price +=0;
                    calories +=0;
            }
         }


    document.getElementById("orderCal").innerHTML = "Calories: "+calories
    document.getElementById("orderPrice").innerHTML = "Price: R"+price+".00";
    
}

displayOrder = () =>{
    let area = document.getElementById("orderContainer");
    let cost = document.getElementById("orderPrice");
    let cal = document.getElementById("orderCal");


    area.innerHTML = "";

    for(let i = 0; i<orderArr.length;i++){
        let name = orderArr[i].sandwichName;
        let bread = orderArr[i].sandwichBread;
        let sauces = orderArr[i].sandwichSauce;
        let toppings = orderArr[i].sandwichToppings;
        let cost = orderArr[i].sandwichCost;
        let calories = orderArr[i].sandwichCal;

        area.innerHTML+= `
        <div class="card border-info mb-3 text-center" id="orderCard">
            <img id="orderCard" class="card-img-top" src="../assets/jumbo/sandwhich header.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${bread}, ${sauces}, ${toppings}</p>
              <p class="card-text">R${cost}.00</p>
              <p class="card-text">Calories: ${calories}</p>
            </div>
          </div>
        `
    }
}

storeOrderCheckout = () =>{
    let orderData = JSON.stringify(orderArr);
    localStorage.setItem("sandwichOrder",orderData);
    window.location.href = 'checkout.html';
}

collectionSelected = () =>{
    let area = document.getElementById("enterAddress")
    area.innerHTML = ``
}


deliverySelected = () =>{
    let area = document.getElementById("enterAddress")
       

    area.innerHTML = `
    <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter address">
            <small id="emailHelp" class="form-text text-muted">We'll never share your address with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="phoneNo">Phone Number</label>
            <input type="text" class="form-control" id="phoneNo" placeholder="Phone Number">
          </div>`
}


addOrderTotals = () =>{
    let dispPrice = 0;
    let dispCal = 0;
    

    for(let i = 0; i < orderArr.length; i++){
        let cost = orderArr[i].sandwichCost;
        let calories = orderArr[i].sandwichCal;

        dispCal += calories;
        dispPrice += cost;
    }

    let livePrice = document.getElementById("totalPrice");
    let liveCalories = document.getElementById("totalCal");

    console.log(dispCal);
    console.log(dispPrice);

    livePrice.innerHTML = "Total Price: R" + dispPrice +".00";
    liveCalories.innerHTML = "Total Calories: "+dispCal;
}