// ******************
//      PRODUCT 
// ******************

// Agrega un producto de la clase Product que se la pasa por parametro a la lista que se le pase por paramentro
function AddProduct(list, product){

  list.push(product);
  alert(`${product.name} añadido`);

}

// Devuelve un array con las marcas de los productos del array del parametro
function GetProductsBrand(list){

  let brandList = new Array();

  for(let i = 0; i < list.length; i++){
    
    if(!brandList.includes(list[i].brand)){

      brandList.push(list[i].brand);
      

    }

  }

  return brandList;

}

// Devuelve el nombre de los productos
function GetProductsName(list){

  let productList = "";

  list.map( (product) => {
    productList += product.name + "\n";
  })

  return productList;

}

// Devuelve el array con los codigos del array pasado por parametro
function GetProductsCode(list){

  let codeList = new Array();

  for(let i = 0; i < list.length; i++){
    
    if(!codeList.includes(list[i].code)){

      codeList.push(list[i].code);
      

    }

  }

  return codeList;

}

// MEJORAR
function GetProductDetail(list){

  let productList = "";

  list.map( (product) => {

    if(product.stock > 0){

      productList += `Cód. ${product.code} - ${product.name} ${product.brand} $${product.price}\n`;
    
    }else{

      productList += `Cód. ${product.code} - ${product.name} ${product.brand} $${product.price} (sin stock)\n`;

    }
  
  })

  return productList;

}

// MEJORAR
function GetStockProducts(list){

  let productList = "";

  list.forEach(product => {

    if(product.stock > 0)
    
    productList += `Cód. ${product.code} - ${product.name} ${product.brand} $${product.price}\n`;

  });              
  
  return productList;

}


// ******************
//      PROMPTS 
// ******************

// Devuelve un int para saber que hacer luego
function ShowMainMenu(){
  return parseInt(prompt("Bienvenido a TIENDAMAX \n1. Para ingresar a su panel de control \n2. Para ingresar a comprar"));
}

// Devuelve un int para saber que hacer luego
function ShowAdminMenu(products){
  return parseInt(prompt(`1. Para agregar un producto. \n0. Para volver al menú principal. \n\nTienes los siguientes productos en el catálogo: \n${GetProductsName(products)}`));
}

// Devuelve un int para saber que hacer luego
function ShowUserMenu(){
  return parseInt(prompt(`1. Para buscar productos. \n2. Ver todos los productos. \n0. Para volver al menú principal.`));
}

// Devuelve un string con lo que introduce el usuario, también muestra una lista de marcas
function ShowBrands(productArray){

  let brandString = "";
  let brandsArray = GetProductsBrand(productArray);
  
  for(let i = 0; i < brandsArray.length; i++){

    brandString += `${brandsArray[i]}\n`;

  }

  let response = prompt(`Buscar productos por marca. \nMarcas disponibles:\n${brandString}`);

  while(!brandsArray.includes(response)){
  
    response = prompt(`Buscar productos por marca. \nMarcas disponibles:\n${brandString}`);

  }

  return response;

}

// Devuelve un int con el codigo del producto
function ShowCatalogue(productArray){

  let allCodes = GetProductsCode(productArray);
  let code = parseInt(prompt(`Productos: \n${GetStockProducts(productArray)}\n\nPara agregar al carrito ingrese el codigo del producto`));
  
  while(!allCodes.includes(code)){

    code = parseInt(prompt(`Productos: \n${GetStockProducts(productArray)}\n\nPara agregar al carrito ingrese el codigo del producto`));

  }

  return code;


}

// Devuelve un int con la opcion del usuario. Muestra el menu para seguir comprando.
function KeepShopping(cart){
  return parseInt(prompt(`1. Para finalizar compra. \nEnter para continuar comprando. \n\nTu carrito de compras: \n${GetProductDetail(cart)}`));
}

// Devuelve un int para saber que hacer luego y otras cosas dentro de la funcion
function AddProductToCart(productCode, cartArray, listOfProducts){

  for (let i = 0; i < listOfProducts.length; i++) {

    if(productCode === listOfProducts[i].code) {

      cartArray.push(listOfProducts[i]);
      
      break;
    }
    
  }

}

function FinishShopping(cart){

  let iva = 0;
  let total = 0;
  let subtotal = cart.reduce( 
    (acc, item) => acc += item.price, 0
  );

  iva = (subtotal * 21) / 100

  total = subtotal + iva;

  let response = prompt(`Estás por comprar: \n${GetProductDetail(cart)} \nSUBTOTAL: $${subtotal} \nIVA: $${iva} \nTOTAL: $${total} \nEscribe "COMPRAR" para finalizar la compra para confirmar.`);

  return response;

}