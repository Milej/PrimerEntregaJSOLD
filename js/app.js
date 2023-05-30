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

    switch (option) {
      case 0: // Mostramos el menu principal
        welcome = ShowMainMenu();
        break;

      case 1: // Mostramos el menu para la busqueda por marca

        let search = ShowBrands(products);
  
        // Filtramos por marca
        let filterProducts = products.filter( product => product.brand === search );

        if(filterProducts.length > 0){

          // Muestra la lista de los productos encontrados, cuando el usuario completa el campo devuelve el codigo del producto
          let code = ShowCatalogue(filterProducts);

          // Agregamos el producto a la lista del carrito
          AddProductToCart(code, cart, products);

          // Pregunta si quiere seguir comprando o finalizar la compra
          // EN CASO DE QUE QUIERA FINALIZAR LA COMPRA 1
          let shopping = KeepShopping(cart);

          // En caso de que elija 1 le mostramos los productos a comprar
          if(shopping === 1){

            shopping = FinishShopping(cart);

            if(shopping === "COMPRAR"){
              console.log('Muchas gracias por tu compra <3');
              welcome = null;
            }

          }
  
        }
        break;
        
      case 2: // Catalogo entero
        // Muestra todos los productos y devuelve el codigo del producto
        let code = ShowCatalogue(products);

        // Agregamos el producto a la lista del carrito
        AddProductToCart(code, cart, products);

        // Pregunta si quiere seguir comprando o finalizar la compra
        // EN CASO DE QUE QUIERA FINALIZAR LA COMPRA 1
        let shopping = KeepShopping(cart);

        // En caso de que elija 1 le mostramos los productos a comprar
        if(shopping === 1){

          shopping = FinishShopping(cart);

          if(shopping === "COMPRAR"){
            console.log('Muchas gracias por tu compra <3');
            welcome = null;
          }

        }
        break;

    }

  }

}

