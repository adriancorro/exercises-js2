/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
}; 
var product3 = {
  id: 3,
  name: "pla5",
  price: 10,
  stock: 56
};
var product4 = {
  id: 4,
  name: "Swipe",
  price: 56.66,
  stock: 45
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
   
};

 
// creamos propiedad substractStock que es igual a una funcion por cada uno 
products.forEach( product => product.substractStock = function(){ this.stock -- } )
// creamos la funcion que permita restar el Stock cada vez que la llamemos
// el parametro productos tiene que ser igual al array con todos los objetos literales luego se hace forEach (por cada uno)
let allSubstractStock = productos => productos.forEach(producto => producto.substractStock())


products.forEach( product => product.addStock = function(){ this.stock ++} )
let allAddStock = productos => productos.forEach(producto => producto.addStock())


 function addToShoppingCart(id){
  /*  -Usamos find porq devuelve un valor
      -No usamos filter porque devuelve un array entonces tendriamos que colocar filtramos[0] ejemplo shoppingCart.selectedProducts.push(filtramos[0])   shoppingCart.totalPrice =  shoppingCart.totalPrice + filtramos[0].price  
  */
  let filtramos =  products.find( producto =>  producto.id == id)
  
  let filtramos2 =  products.filter( producto =>  producto.id == id)

  filtramos2.forEach( producto =>  { if(producto.stock == 0){ 
                                      console.log( `----------NO se puede agregar el producto ${producto.name} porque su stock esta en ${producto.stock} ----------------------- `)
                                    }else{
                                      allSubstractStock(filtramos2)
                                      shoppingCart.selectedProducts.push(filtramos)
                                      shoppingCart.totalPrice =  shoppingCart.totalPrice + filtramos.price
                                    }  
    })

 
    
 }

 

function removeFromShoppingCart(id){
  let filtro =  shoppingCart.selectedProducts.filter(producto=>{if(producto.id == id){return producto}})
  filtro.pop();

  let filtro2 =  shoppingCart.selectedProducts.filter(producto=>{if(producto.id !== id){return producto}})

  let array3 = filtro.concat(filtro2);
 
  shoppingCart.selectedProducts = array3;

  

 // console.log(shoppingCart.selectedProducts )
  let add = products.filter(producto=> producto.id == id)
  allAddStock(add)

  let totalPrice =  products.find( producto => producto.id == id )
  // del total del precio restale el resultado actual del return del find precio actual
  

  if ( shoppingCart.totalPrice > 0.1 ){
    shoppingCart.totalPrice = shoppingCart.totalPrice  -   totalPrice.price
  }else{
    "no"
  }
     
 
  
 
}

function shop(){
  
  if(shoppingCart.totalPrice > 0){
    shoppingCart.selectedProducts.forEach(product =>  product.stock = product.stock - 1 ) 
  } else if(shoppingCart.totalPrice < 0){
     console.log( "no")
  }
  

    shoppingCart.selectedProducts = []
    shoppingCart.totalPrice = 0

}

//results
 addToShoppingCart(1);

console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
console.log( products.map (p => console.log (`d  ${p.name} ${p.stock} ` ) )  )
 addToShoppingCart(2);
console.log( products.map (p => console.log (`d  ${p.name} ${p.stock} ` ) )  )
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
 addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

removeFromShoppingCart(2);


console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

