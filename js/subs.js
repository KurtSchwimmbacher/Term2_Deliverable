hideElements();

makeSandwich = () =>{
    let name = document.getElementById("inputSubName").value;
    let bread = document.getElementById("breadSelect").value;

    if(bread == "Choose a Bread"){
        console.log("Choose another bread");
    }
    else{
        console.log(name + bread)
    }


}


hideElements = () =>{
    document.getElementById("collect").hidden = true;
    console.log("hello")
}

document.getElementById("sandwichForm").reset();