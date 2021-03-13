// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceWhite = document.querySelector('.sauce');
  if (state.whiteSauce){
    // False
    document.querySelector('.sauce').classList.add("sauce-white");
  }else{
    //true 
    document.querySelector('.sauce').classList.remove("sauce-white");
  }  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  
  if (state.glutenFreeCrust){
    // False
    document.querySelector('.crust').classList.add("crust-gluten-free");
  }else{
    //true 
    document.querySelector('.crust').classList.remove("crust-gluten-free");
  }  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelectorAll('.btn').forEach(btn => {
  //   console.log(btn);
  //   console.log("classname:",btn.className)
  //   if (btn.className.indexOf("active") !== -1) {      
  //     btn.classList.remove("active");
  //   } else {
  //     btn.classList.add("active");
  //   }
  // });

  let btn;
  // pour le btn pepperoni
  btn = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni){
    btn.classList.add('active')
  } else{
    btn.classList.remove('active')
  }

  // pour le btn mushroom
  btn = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms){
    btn.classList.add('active')
  } else{
    btn.classList.remove('active')
  }

  // pour le btn green peppers
  btn = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers){
    btn.classList.add('active')
  } else{
    btn.classList.remove('active')
  }

  // pour le btn white sauce
  btn = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce){
    btn.classList.add('active')
  } else{
    btn.classList.remove('active')
  }

  // pour le btn crust
  btn = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust){
    btn.classList.add('active')
  } else{
    btn.classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ingredientList = document.querySelector('.panel.price ul');
  let sum = 10;
  //pour le pepperoni
  if (state.pepperoni){
    ingredientList.children[0].style.textDecoration = "none";
    sum += ingredients.pepperoni.price;
  } else{
    ingredientList.children[0].style.textDecoration = "line-through";
  }

  //pour le Mushroom
  if (state.mushrooms){
    ingredientList.children[1].style.textDecoration = "none";
    sum += ingredients.mushrooms.price;
  } else{
    ingredientList.children[1].style.textDecoration = "line-through";
  }

  //pour le green pepper
  if (state.greenPeppers){
    ingredientList.children[2].style.textDecoration = "none";
    sum += ingredients.greenPeppers.price;
  } else{
    ingredientList.children[2].style.textDecoration = "line-through";
  }
  //pour white sauce
  if (state.whiteSauce){
    ingredientList.children[3].style.textDecoration = "none";
    sum += ingredients.whiteSauce.price;
  } else{
    ingredientList.children[3].style.textDecoration = "line-through";
  }
  //pour crust
  if (state.glutenFreeCrust){
    ingredientList.children[4].style.textDecoration = "none";
    sum += ingredients.glutenFreeCrust.price;
  } else{
    ingredientList.children[4].style.textDecoration = "line-through";
  }
  document.querySelector('.panel.price strong').innerHTML = "$"+sum;
  console.log(sum)
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});