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
let welcome = ShowMenu();

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
      welcome = ShowMenu();

    }

  }else if(welcome === 2){

    // Mostramos el menu del usuario
    let option = ShowUserMenu(products);
    
    switch (option) {

      case 0: // Mostramos el menu del usuario
        welcome = ShowMenu();
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
  
          shopping = AddProductToCart(parseInt(prompt(`Productos encontrados: \n${GetStockProducts(filter)} \nPara agregar al carrito ingrese el codigo del producto`)), filter);
  
        }
  
        // while(shopping !== 1 || shopping !== 2){
  
        //   shopping = KeepShopping();
      
        // }
  
        // if(shopping === 1){
        //   option = 1;
        // }else if(shopping === 2){
        //   option = 2;
        // }
        break;
        
      case 2:
        shopping = AddProductToCart(parseInt(prompt(`Productos: \n${GetStockProducts(products)} \n\nPara agregar al carrito ingrese el codigo del producto`)), products);

        // while(shopping === 1){

        //   shopping = KeepShopping();
      
        // }

        // if(shopping === 2){
        //   // let subtotal = cart.reduce(acummulator, cart.price)
        //   // alert(`Has comprado: ${GetProductDetail(cart)} \n\n`);
        //   option = 4;

        // }
        break;

      case 3:
        console.log('Ver carrito');
        break;

      case 4:
        console.log("finalizar compra");
        break;
        
      default:
        welcome = ShowMenu();
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

function GetProductsCode(list){

  let codeList = new Array();

  for(let i = 0; i < list.length; i++){
    
    if(!codeList.includes(list[i].code)){

      codeList.push(list[i].code);
      

    }

  }

  return codeList;

}

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

function GetStockProducts(list){

  let productList = "";

  list.forEach(product => {

    if(product.stock > 0)
    
    productList += `Cód. ${product.code} - ${product.name} ${product.brand} $${product.price}\n`;

  });              
  
  return productList;

}

function AddProduct(list, product){
  list.push(product);
  alert("Nuevo producto añadido");
}

function GoBack(selection){

  if(selection == "volver"){
    ShowMenu;
  }

}

function ShowAdminMenu(products){
  return parseInt(prompt(`1. Para agregar un producto. \n0. Para volver al menú principal. \n\nTienes los siguientes productos en el catálogo: \n${GetProductsName(products)}`));
}

function ShowUserMenu(){
  return parseInt(prompt(`1. Para buscar productos. \n2. Ver todos los productos. \n0. Para volver al menú principal.`));
}

function ShowShoppingMenu(){
  return parseInt(prompt(`1. Para buscar productos. \n2. Ver todos los productos. \n3. Ver carrito. \n4. Finalizar compra.`));
}

function ShowMenu(){
  return parseInt(prompt("Bienvenido a TiendaMax \n 1. Para ingresar a su panel de control \n 2. Para ingresar a comprar"));
}

function ShowCatalogue(products){
  return prompt(`Inserte el código del producto que desea comprar \nCATÁLOGO DE PRODUCTOS \n${GetProductDetail(products)}`)
}

function KeepShopping(){
  return prompt(`1. Para seguir comprando. \n2. Para finalizar compra`)
}

function AddProductToCart(selectedProduct, productArray){

  let codes = GetProductsCode(productArray);

  while(!codes.includes(selectedProduct)){
    selectedProduct = parseInt(prompt(`Productos: \n${GetStockProducts(productArray)} \n\nPara agregar al carrito ingrese el codigo del producto`));
  }

  for (let i = 0; i < productArray.length; i++) {

    if(selectedProduct === productArray[i].code) {

      cart.push(productArray[i]);
      
      break;
    }
    
  }

  return parseInt(prompt(`1. Para seguir comprando. \n2. Para finalizar compra. \n\nTu carrito de compras: \n${GetProductDetail(cart)}`));

}