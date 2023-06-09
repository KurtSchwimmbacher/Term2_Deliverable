displaySOTM = () =>{
    let SOTM = document.getElementById("carouselDisp");

    for(let i =0; i < sandwichData.length; i++){
        let name = sandwichData[i].sandwichName;
        let bread = sandwichData[i].sandwichBread;
        let sauces = sandwichData[i].sandwichSauce;
        let toppings = sandwichData[i].sandwichTopping;
        let cost = sandwichData[i].sandwichCost;
        let calories = sandwichData[i].sandwichCalories;

        if(i === 0){
            SOTM.innerHTML += `
            <div class="carousel-item active">
                <img class="d-block w-50" src="assets/jumbo/sandwhich header.png" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${name}</h5>
                <p>${bread}, ${toppings.join(", ")}, ${sauces}</p>
                <p>R${cost}.00</p>
                <p>Calories: ${calories}</p>
                </div>
            </div>
            `
        }
        else{
            SOTM.innerHTML += `
            <div class="carousel-item">
                <img class="d-block w-50" src="assets/jumbo/sandwhich header.png" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${name}</h5>
                <p>${bread}, ${toppings.join(", ")}, ${sauces}</p>
                <p>R${cost}.00</p>
                <p>Calories: ${calories}</p>
                </div>
            </div>
            `
        }
        

    }
}