displayOrderCheckout = () =>{
    let orderData = JSON.parse(localStorage.getItem("sandwichOrder"));
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
                  <a href="#" class="btn btn-warning">Remove This Sandwich</a>
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

        dispPrice.innerHTML = "R" + totalPrice +".00";
        dispCal.innerHTML = "Calories: " +totalCal;

    }
}


returnDefault = () =>{
    localStorage.removeItem("sandwichOrder");
    window.location.href = "../index.html";
}