
displayOrderCheckout = () =>{
    let orderData = JSON.parse(localStorage.getItem("sandwichOrder"));
    let drinkData = JSON.parse(localStorage.getItem("drinkOrder"));
    let orderItems = document.getElementById("orderField");
    let dispPrice = document.getElementById("finalPrice");
    let dispCal = document.getElementById("finalCal");

    let totalPrice = 0;
    let totalCal = 0;

    for(let i = 0; i < orderData.length; i++){
        let name = orderData[i].sandwichName;
        let bread = orderData[i].sandwichBread;
        let sauces = orderData[i].sandwichSauce;
        let toppings = orderData[i].sandwichToppings;
        let cost = orderData[i].sandwichCost;
        let calories = orderData[i].sandwichCal;


        totalPrice += cost;
        totalCal += calories;

        orderItems.innerHTML+= `
        <div class="row">
            <div class="col-12">
              <div class="card" style="width: 100%;">
                <div class="card-body">
                  <img class="card-img-top" src="../assets/jumbo/sandwhich header.png" alt="Card image cap">
                  <div class="card-content">
                    <h5 class="card-title" id="removeID" value="${name}">${name}</h5>
                    <p class="card-text">${bread}, ${toppings}, ${sauces}</p>
                  <a href="#" class="btn btn-warning" onclick="popSandwich()">Remove This Sandwich</a>
                  <div class="card-details">
                    <p>Price: R${cost}.00</p>
                    <p>Calories: ${calories}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    }


    for(i =0; i < drinkData.length ;i++){
      let drink = drinkData[i].drink;
      let dCals = drinkData[i].drinkCalories;
      let dCost = drinkData[i].drinkCost;

      totalPrice += dCost;
      totalCal += dCals;

      orderItems.innerHTML += `
      <div class="row">
            <div class="col-12">
              <div class="card" style="width: 100%;">
                <div class="card-body">
                  <img class="card-img-top" src="../assets/jumbo/drink png.png" alt="Card image cap">
                  <div class="card-content">
                    <h5 class="card-title">${drink}</h5>
                  <a href="#" class="btn btn-warning" onclick="popDrink()">Remove This Drink</a>
                  <div class="card-details">
                    <p>Price: R${dCost}.00</p>
                    <p>Calories: ${dCals}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `

    }

    dispPrice.innerHTML = "R" + totalPrice +".00";
    dispCal.innerHTML = "Calories: " +totalCal;
}


updatePrice = () =>{ 
  let drinkData = JSON.parse(localStorage.getItem("drinkOrder"));
  let orderData = JSON.parse(localStorage.getItem("sandwichOrder"));
  let discount = 0;
  let inputCode = document.getElementById("couponInput").value;

console.log(inputCode)

  if(inputCode == "Coupon Code"){
    discount= 0.8;
  }
  else{
    discount = 1;
    console.log("not valid")
  }
 
  let dispPrice = document.getElementById("finalPrice");

  let totalPrice = 0;

  for(let i = 0; i < orderData.length; i++){
    let cost = orderData[i].sandwichCost;
    totalPrice += cost;
  }

  for(i = 0; i< drinkData.length; i++){
    let cost = drinkData[i].drinkCost;
    totalPrice+= cost;
  }

  totalPrice = totalPrice*discount;

  dispPrice.innerHTML = "R" + totalPrice +".00";

}



function displayNewOrderSandwich (orderData){
  let orderItems = document.getElementById("orderField");
  let dispPrice = document.getElementById("finalPrice");
  let dispCal = document.getElementById("finalCal");



  let totalPrice = 0;
  let totalCal = 0;

  for(let i = 0; i < orderData.length; i++){
      let name = orderData[i].sandwichName;
      let bread = orderData[i].sandwichBread;
      let sauces = orderData[i].sandwichSauce;
      let toppings = orderData[i].sandwichToppings;
      let cost = orderData[i].sandwichCost;
      let calories = orderData[i].sandwichCal;


      totalPrice += cost;
      totalCal += calories;

      orderItems.innerHTML+= `
      <div class="row">
          <div class="col-12">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <img class="card-img-top" src="../assets/jumbo/sandwhich header.png" alt="Card image cap">
                <div class="card-content">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${bread}, ${toppings}, ${sauces}</p>
                <a href="#" class="btn btn-warning" onclick="popSandwich()">Remove This Sandwich</a>
                <div class="card-details">
                  <p>Price: R${cost}.00</p>
                  <p>Calories: ${calories}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  }

  dispPrice.innerHTML = "R" + totalPrice +".00";
  dispCal.innerHTML = "Calories: " +totalCal;
}

function displayNewOrderDrink (orderData){
  let orderItems = document.getElementById("orderField");
  let dispPrice = document.getElementById("finalPrice");
  let dispCal = document.getElementById("finalCal");



  let totalPrice = 0;
  let totalCal = 0;

  for(i =0; i < orderData.length ;i++){
    let drink = orderData[i].drink;
    let dCals = orderData[i].drinkCalories;
    let dCost = orderData[i].drinkCost;
  
    totalPrice += dCost;
    totalCal += dCals;
  
    orderItems.innerHTML += `
    <div class="row">
          <div class="col-12">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <img class="card-img-top" src="../assets/jumbo/drink png.png" alt="Card image cap">
                <div class="card-content">
                  <h5 class="card-title">${drink}</h5>
                <a href="#" class="btn btn-warning " onclick="popDrink()">Remove This Drink</a>
                <div class="card-details">
                  <p>Price: R${dCost}.00</p>
                  <p>Calories: ${dCals}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  
  }

  dispPrice.innerHTML = "R" + totalPrice +".00";
  dispCal.innerHTML = "Calories: " +totalCal;
}



popSandwich = () =>{
  let orderData = JSON.parse(localStorage.getItem("sandwichOrder"));

  //console.log(top.document.getElementById("removeID").)
 // for(i = 0; i < orderData.length;i++){
    //let id = orderData[i].sandwichName;
    //if(top.document.getElementById(id)!=null){
      //console.log("This one and its name is "+id +"found at "+i)
    //}
    
 // }
 // let index = orderData.findIndex();
 
  //orderData.splice(index,1);

  orderData.pop();
  localStorage.removeItem("SandwichOrder");
  localStorage.setItem("SandwichOrder",orderData);
  let orderItems = document.getElementById("orderField");
  orderItems.innerHTML = ``;
  displayNewOrderSandwich (orderData);
}

popDrink = () =>{
  let drinkData = JSON.parse(localStorage.getItem("drinkOrder"));
  drinkData.pop();
  localStorage.removeItem("drinkOrder");
  localStorage.setItem("drinkOrder",drinkData);
  let orderItems = document.getElementById("orderField");
  orderItems.innerHTML = ``;
  console.log(newOrder);
  displayOrderDrink(drinkData);
}


returnDefault = () =>{
    localStorage.removeItem("sandwichOrder");
    localStorage.removeItem("drinkOrder")
    window.location.href = "../index.html";
}