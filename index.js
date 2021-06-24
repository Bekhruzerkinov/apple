let carts = document.querySelectorAll('.buyu')

let products = [
  {
  name: 'MacBook Air',
  tag: 'mac',
  price: 999,
  inCart: 0
  },
  {
  name: 'MacBook Pro 13',
  tag: 'mac',
  price: 1299,
  inCart: 0
    },
    {
  name: 'MacBook Pro 16',
  tag: 'mac',
  price: 2399,
  inCart: 0
  }
]

for(let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
  })
}


function onLoadCartNumbers () {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {}
      document.querySelector('.cart span').textContent = productNumbers;
}

function cartNumbers(product) {
 
  let productNumbers = localStorage.getItem('cartNumbers');
 
  productNumbers = parseInt(productNumbers);

  if( productNumbers ) {
  localStorage.setItem('cartNumbers', productNumbers + 1);
  document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
  localStorage.setItem('cartNumbers', 1);
  document.querySelector('.cart span').textContent = 1;
  }
  setItem(product)
}


function setItem(product) {
  let cartItems = localStorage.getItem('prouctsInCart')
  console.log("My cartItems are", cartItems);

  product.inCart = 1;
  
  cartItems = {
    [product.tag]: product
  }

  localStorage.setItem("productsInCart", JSON.stringify
  (cartItems));
}

onLoadCartNumbers();




// let carts = document.querySelectorAll('.buyu') 
// var priceCostX = 0;
// let products = [
//     {
//         name: 'MacBook Air',
//         tag: "mac",
//         price: "999",
//         inCart: 0
//     },
//     {
//         name: 'MacBook Pro 13',
//         tag: "mac",
//         price: "1299",
//         inCart: 0
//     },
//     {
//         name: 'MacBook Pro 16',
//         tag: "mac",
//         price: "2399",
//         inCart: 0
//     }
// ]


// for (let i=0; i < carts.length; i++ ) {
//    carts[i].addEventListener('click', () => {
//    cartNumbers(products[i])
//    totalCost(products)[i]
//   }
//  )
// }

// function cartNumbers() {
//   let productNumbers = localStorage.getItem('cartNumbers')
//   productNumbers = parseInt(productNumbers)
  
// if(productNumbers) {
//   document.querySelector('.cart span').textContent = productNumbers
//  }
// }

// function cartNumbers (product) {
//   let productNumbers = localStorage.getItem('cartNumbers')
//   productNumbers = parseInt(productNumbers)

// if(productNumbers) {
//   localStorage.setItem('cartNumbers', productNumbers + 1)
//   document.querySelector('.cart span').textContent = productNumbers + 1
// } else {
//   localStorage.setItem('cartNumbers', 1) 
//   document.querySelector('.cart span').textContent = 1;
// }
// setItems(product) 
// }


// function setItems(product) {  
//   let cartItems = localStorage.getItem('productsInCart');
//   cartItems = JSON.parse(cartItems);

// if(cartItems  != null) {


//   if(cartItems[product.tag] != undefined) {
//   cartItems =  {
//       ...cartItems,
//       [product.tag]: product
//  }
// }
//    cartItems[product.tag].inCart += 1;
// }else{
//   product.inCart = 1
//   cartItems = {
//       [product.tag]: product
//  }
// }

//   localStorage.setItem("productsInCart", JSON.stringify 
//   (cartItems));
// } 


// function totalCost(product) {
//  let cartCost = localStorage.getItem('totalCost');

//  console.log('My cartCost', cartCost);
//  console.log(typeof cartCost );

//  if(cartCost != null) {
//    cartCost = parseInt(cartCost);
//    localStorage.setItem("totalCost", cartCost + product.price);
//  } else {
//     localStorage.setItem("totalCost", product.price)
//  }
// }


  
// function priceCost(product) {
//   priceCostX = localStorage.setItem('priceCost', priceCostX)
//   console.log('info', product);
// }

// function myFun(price) {
//   localStorage.setItem("priceCost",   priceCost + priceCost);
//   console.log('price', price);

// if(priceCost != null) {
//   var priceCost = parseInt("1299")
//   var priceCost = parseInt("5")
//  }
// }





// let i = 3;
// while (i) alert(i--);




// let animal = {
//  eat: true
// }
// let rabbit = { 
//     jump: true,
//     __proto__: animal
// }
// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }
// let userName = prompt('Введите имя', '')
// if (userName == 'Bekhruz') {
// alert ('Далее')
// }else{
//     (userName == '')
// } 
// alert('false')

//     let userName = 'Bekhruz';
// while (Bekhruz) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( 'Введите имя' );
//   i--;
// }

// let pass = prompt('Пароль?', '')
// if (pass == '20212') {
//     alert ('Здраствуйте')
// }else{
//    ( pass == '' )
//         alert ('Eror404')       
// }
// let user = {
//     name:  'Bekhruz',
//     surName:  'Erkinov'
// }

// let ingame = {
//     nick: 'Tendi',
//     id: 5349091495,
//     __proto__: user
// }
// console.log(ingame);

