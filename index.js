/*
1) Realizar una clase “ProductManager” que gestione un conjunto de productos.
2) Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
3) Cada producto que gestione debe contar con las propiedades:
- title (nombre del producto)
- description (descripción del
producto)
- price (precio)
- thumbnail (ruta de imagen)
- code (código identificador)
- stock (número de piezas
disponibles)
4)Debe contar con un método “addProduct” el cual agregará un
producto al arreglo de productos inicial.
- Validar que no se repita el campo
“code” y que todos los campos
sean obligatorios
- Al agregarlo, debe crearse con un
id autoincrementable
✓ Debe contar con un método
“getProducts” el cual debe devolver el
arreglo con todos los productos
creados hasta ese momento
5)Debe contar con un método
“getProductById” el cual debe buscar en
el arreglo el producto que coincida con
el id
- En caso de no coincidir ningún id,
mostrar en consola un error “Not
found”

 */

class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    ProductManager.id++;
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      console.log("Ya existe el codigo");
      return;
    }

    const newProduct = {
      id: ProductManager.id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (product) {
      return product;
    } else {
      console.log("Not Found");
    }
  }
}

const productManager = new ProductManager();

console.log("Productos iniciales:", productManager.getProducts());

const addedProduct = productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "indefinido",
  "1234",
  10
);

console.log("Productos después de agregar uno:", productManager.getProducts());

productManager.addProduct(
  "producto prueba duplicado",
  "Este es otro producto prueba",
  150,
  "indefinido",
  "4321",
  2
);

const foundProduct = productManager.getProductById(addedProduct.id);
console.log("Producto encontrado por ID:", foundProduct);

productManager.getProductById(40);
