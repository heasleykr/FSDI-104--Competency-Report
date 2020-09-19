
console.log("directory.js");
// Function to display total registered pets, youngest/oldest pets, & individual registered pets on screen
function display(){
    // create varaibles. Grab copy of array in new variable!!!
    var pets = salon.pets;
    var text = "";
    var petSection = document.getElementById("petSection");
    var totalPets = document.getElementById("totalPets");
    var displayImg = "";
    var oldPet = "";
    var youngPet = "";
    var profit = "";
    const dogIcon ='<i class="fas fa-dog"></i>';
    const catIcon ='<i class="fas fa-cat"></i>';
    const birdIcon ='<i class="fas fa-crow"></i>';
    const cake ='<i class="fas fa-birthday-cake"></i>';
    const heart = '<i class="fas fa-heart"></i>';

    // traverse pet array
    for(var i = 0; i < pets.length; i++){
        // Print pets to console
        console.log(pets[i]);

        //Grab correct image icon on HTML for type of pet 
        if(pets[i].type === "Dog" || pets[i].type === "dog"){
            displayImg = dogIcon;
        }
        else if(pets[i].type === "Cat" || pets[i].type === "cat"){
            displayImg = catIcon;
        }
        else if(pets[i].type === "Bird" || pets[i].type === "bird"){
            displayImg = birdIcon;
        }
        else{
            displayImg = heart;
        }

        //Grab current oldest/youngest pet & total profit
        oldPet = oldest();
        youngPet = youngest();
        profit = totalProfit();

        // create the HTML text & add/concat to current roster
        text+=` 
            <div class="pet">
                    <h2>Name: ${pets[i].name} </h2>
                    <p>${displayImg}</p>
                    <p> Age: ${pets[i].age} </p>
                    <p> Type: ${pets[i].type} </p>
                    <p> Breed: ${pets[i].breed} </p>
                    <p> Gender: ${pets[i].gender} </p>
                    <p> Service: ${pets[i].service.getType()} </p>
                    <p> Annual Vaccine Needed: ${pets[i].vaccine} </p>
                    <p> Owner's Name: ${pets[i].ownerName} </p>
                    <p> Contact Phone: ${pets[i].contactPhone} </p>
                    <p> Total Price: $${pets[i].service.getPrice()} </p>
            </div>
            `;
        console.log(text);
    }


    // display total number, oldest/youngest, & total profit
    totalPets.innerHTML=`
        <h2> Total Number of Furry Guests: ${pets.length}</h2>
        <h3> Current Salon Profit: $${profit}</h3>
        <p>${cake} Oldest Pet: ${oldPet}</p>
        <p>${cake} Youngest Pet: ${youngPet}</p>
        <hr />
        <h3> Current Furry Guests: </h2>
        `;
    
    // display pets to screen
    petSection.innerHTML = text;

}

display();

// Function to display the oldest pet to console 
function oldest(){
    // store the first pet's age
    var oldest = salon.pets[0].age;
    var petOld = salon.pets[0].name;

        // loop through all the pets in the salon
        for(let i = 1; i < salon.pets.length; i++){

            // if the age is smaller than comparison, update
            if(oldest < salon.pets[i].age){
                oldest = salon.pets[i].age;
                petOld = salon.pets[i].name;
            }
        }
        // Print oldest pet in the salon
        console.log("The oldest pet in the salon is " + petOld + ".");

        return petOld;
}

// Function to display the youngest pet to the console
function youngest(){
    // store the first pet's age
    var youngest = salon.pets[0].age;
    var petYoung = salon.pets[0].name;

        // loop through all the pets in the salon
        for(let i = 1; i < salon.pets.length; i++){

            // if the age is larger than comparison, update
            if(oldest > salon.pets[i].age){
                youngest = salon.pets[i].age;
                petYoung = salon.pets[i].name;
            }
        }
        // Print youngest pet in the salon
        console.log("The youngest pet in the salon is " + petYoung + ".");

        return petYoung;
}

//function to add total salon profit and return value
function totalProfit(){
    // store the first pet's profit
    var add = salon.pets[0].service.getPrice();
    var total = salon.pets[0].service.getPrice();

        // loop through all the pets in the salon
        for(let i = 1; i < salon.pets.length; i++){

            // Covert to doubles and add all the prices
                add = salon.pets[i].service.getPrice();
                total = Number(total) + Number(add);
            
        }
        // Print Total Amount to console
        console.log("The total profit for the Fashion Salon is $" + total + ".");

        return total;
}