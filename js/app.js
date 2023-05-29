// Clase Producto
class Product{

  constructor(code, name, brand, size, price, stock){
    this.code = code;
    this.name = name;
    this.brand = brand;
    this.size = size;
    this.price = price;
    this.stock = stock;

  }

}

// Productos para cargar en el array "products"
let productOne = new Product(1001, "Joggin", "Fila", "M", 17500, 2);
let productTwo = new Product(1002, "Remera", "Nike", "XL", 9600, 5);
let productThree = new Product(1003, "Buzo", "Adidas", "L", 19500, 1);
let productFour = new Product(1004, "Campera", "Adidas", "S", 19500, 3);
let productFive = new Product(1005, "Jean", "Nike", "XS", 25000, 10);
let productSix = new Product(1006, "Gorra", "NewBalance", "", 10000, 0);

// Array de productos
const products = [
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix
];

// Array para cargar los productos por input del usuario
let newProducts = new Array();

// Obtiene el valor del input del usuario
let welcome = ShowMainMenu();

let cart = new Array();

// Si el input es 1 se abre el menú para el "admin" y si es 2 se abre el menú para el "user".
while(welcome === 1 || welcome === 2){

  if(welcome === 1){

    let option = ShowAdminMenu(products);

    if(option === 1){

      // Diferentes variables para cargar el producto
      let id = parseInt(prompt("Código del producto. Por ejemplo: 1001"));
      let name = prompt("Nombre. Por ejemplo: Zapatilla, Mochila");
      let brand = prompt("Marca. Por ejemplo: Nike, Adidas");
      let size = prompt("Talle. Por ejemplo: S, M, XL"); 
      let price = parseInt(prompt("Precio. Por ejemplo: 2500, 17000"));

      // Asignamos una nueva instancia del producto
      let newProduct = new Product(id, name, brand, size, price, 1);
      AddProduct(products, newProduct);

    }else if(option === 0){

      // Mostramos el menu
      welcome = ShowMainMenu();

    }

  }else if(welcome === 2){

    // Mostramos el menu del usuario
    let option = ShowUserMenu(products);
    console.log("option " + option);
    switch (option) {
      case 0: // Mostramos el menu del usuario
        welcome = ShowMainMenu();
        break;

      case 1: // Mostramos el menu para la busqueda por marca
        let brands = GetProductsBrand(products);
        let brandString = "";
        brands.forEach( (brand) => brandString += `${brand}\n`)
  
        let search = prompt(`Buscar productos por marca. \nMarcas disponibles:\n${brandString}`);
  
        while(!brands.includes(search)){
  
          search = prompt(`Buscar productos por marca. \nMarcas disponibles:\n${brandString}`);
  
        }
  
        // Filtramos por marca
        let filter = products.filter( product => product.brand === search );
        
        if(filter.length > 0){

          // MOSTRAR LA LISTA DE LOS PRODUCTOS ENCONTRADOS
          // OBTENER EL CODIGO QUE INGRESA EL USUARIO
          // PREGUNTAR SI QUIERE SEGUIR COMPRANDO O SI QUIERE FINALIZAR LA COMPRA
          // EN CASO DE QUE QUIERA SEGUIR COMPRANDO 1
          // EN CASO DE QUE QUIERA FINALIZAR LA COMPRA 2
          
          
          // let productCode = GetProductCode(filter);
          // console.log(productCode);
          // AddProductToCart(productCode);
  
        }
  
        // while(shopping !== 1 || shopping !== 2){
  
        //   shopping = KeepShopping();
      
        // }
  
        // if(shopping === 2){
        //   option = 3;
        // }
        break;
        
      case 2:
        // MOSTRAR TODOS LOS PRODUCTOS
        // OBTENER EL CODIGO QUE INGRESA EL USUARIO
        // PREGUNTAR SI QUIERE SEGUIR COMPRANDO O SI QUIERE FINALIZAR LA COMPRA
        // EN CASO DE QUE QUIERA SEGUIR COMPRANDO 1
        // EN CASO DE QUE QUIERA FINALIZAR LA COMPRA 2
        
        // shopping = AddProductToCart(parseInt(prompt(`Productos: \n${GetStockProducts(products)} \n\nPara agregar al carrito ingrese el codigo del producto`)), products);
        break;

      case 3:
        // EN CASO DE QUE ELIJA 2, MOSTRAR LOS PRODUCTOS A COMPRAR. MOSTRAR EL SUBTOTAL, EL IVA Y EL TOTAL. LE DAMOS UNA VENTANIA PARA QUE PUEDA ESCRIBIR COMPRAR Y FINALICE LA COMPRA Y SE CIERRA EL PROGRAMA.
        console.log("finalizar compra");
        break;
    }

  }

}

function GetProductsName(list){

  let productList = "";

  list.map( (product) => {
    productList += product.name + "\n";
  })

  return productList;

}

function GetProductsBrand(list){

  let brandList = new Array();

  for(let i = 0; i < list.length; i++){
    
    if(!brandList.includes(list[i].brand)){

      brandList.push(list[i].brand);
      

    }

  }

  return brandList;

}

// Devuelve un int de lo que el usuario escribio en el input, pero revisa que exista en la lista pasada de parametros
function GetProductCode(code, listOfProducts){

  let allCodes = GetProductsCode(listOfProducts);

  while(!allCodes.includes(code)){
    return parseInt(prompt(`Productos: \n${GetStockProducts(listOfProducts)} \n\nPara agregar al carrito ingrese el codigo del producto`));
  }

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

// Agrega un producto de la clase Product que se la pasa por parametro a la lista que se le pase por paramentro
function AddProduct(list, product){
  list.push(product);
  alert(`${product.name} añadido`);
}

// 
function KeepShopping(){
  return prompt(`1. Para seguir comprando. \n2. Para finalizar compra`)
}

// Devuelve un int para saber que hacer luego y otras cosas dentro de la funcion
function AddProductToCart(selectedProduct){

  

  for (let i = 0; i < listOfProducts.length; i++) {

    if(selectedProduct === listOfProducts[i].code) {

      cart.push(listOfProducts[i]);
      
      break;
    }
    
  }

  return parseInt(prompt(`1. Para finalizar compra. Enter para continuar comprando. \n\nTu carrito de compras: \n${GetProductDetail(cart)}`));

}

// Devuelve un int para saber que hacer luego
function ShowAdminMenu(products){
  return parseInt(prompt(`1. Para agregar un producto. \n0. Para volver al menú principal. \n\nTienes los siguientes productos en el catálogo: \n${GetProductsName(products)}`));
}

// Devuelve un int para saber que hacer luego
function ShowUserMenu(){
  return parseInt(prompt(`1. Para buscar productos. \n2. Ver todos los productos. \n0. Para volver al menú principal.`));
}

// Devuelve un int para saber que hacer luego
function ShowShoppingMenu(){
  return parseInt(prompt(`1. Para buscar productos. \n2. Ver todos los productos. \n3. Ver carrito. \n4. Finalizar compra.`));
}

// Devuelve un int para saber que hacer luego
function ShowMainMenu(){
  return parseInt(prompt("Bienvenido a TiendaMax \n 1. Para ingresar a su panel de control \n 2. Para ingresar a comprar"));
}

// Devuelve lo que el usuario escribio en el input para elegir un producto del catalogo
function ShowCatalogue(products){
  return prompt(`Inserte el código del producto que desea comprar \nCATÁLOGO DE PRODUCTOS \n${GetProductDetail(products)}`)
}