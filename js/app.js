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
      let id = parseInt(prompt("Código del producto"));
      let name = prompt("Nombre");
      let brand = prompt("Marca");
      let size = prompt("Talle"); 
      let price = parseInt(prompt("Precio"));

      let newProduct = new Product(id, name, brand, size, price, 1);
      AddProduct(products, newProduct);

    }else if(option === 0){

      welcome = ShowMenu();

    }

  }else if(welcome === 2){

    let option = ShowUserMenu(products);
  
    if(option === 0){
  
      welcome = ShowMenu();
  
    }else if(option === 1){

      let search = prompt(`Buscar productos por marca. \nLista:\n${GetProductsBrand(products)}`);

      while(search == ""){

        search = prompt(`Buscar productos por marca. \nLista:\n${GetProductsBrand(products)} \nDebes completar el campo para continuar.`);

      }

      let filter = products.filter( product => product.brand == search );
      
      if(filter.length > 0){

        let selectedProduct = parseInt(prompt(`Productos encontrados: \n${GetFilterProducts(filter)} \n Para agregar al carrito ingrese el codigo del producto`));
        
        for (let i = 0; i < filter.length; i++) {

          if(selectedProduct === filter[i].code) {

            cart.push(filter[i]);
            option = parseInt(prompt(`1. Para seguir comprando. \n9. Para finalizar compra. \nTu carrito de compras: \n${GetProductDetail(cart)}`));
            break;
          }
          
        }

      }
    
    }else if(option === 2){


    }else if(option === 9){
      alert("Finalizar compra")
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

  let productString = "";
  let productList = new Array();

  for(let i = 0; i < list.length; i){

    for (let c = 0; c < productList.length; c++) {
      
      if(productList[c] != list[i].brand){

        productList.push(list[i].brand);
        break;
      }
      
    }  
    
  }

  console.log(productList);

  return productString;

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

function GetFilterProducts(list){

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

function ShowMenu(){
  return parseInt(prompt("Bienvenido a TiendaMax \n 1. Para ingresar a su panel de control \n 2. Para ingresar a comprar"));
}

function ShowCatalogue(products){
  return prompt(`Inserte el código del producto que desea comprar \nCATÁLOGO DE PRODUCTOS \n${GetProductDetail(products)}`)
}