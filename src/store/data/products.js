export class Product {
  constructor(title, category, image, price, amount) {
    this.title = title;
    this.category = category;
    this.image = image;
    this.price = price;
    this.amount = amount;
  }

  get formattedPrice() {
    return `$${this.price}`;
  }

  get totalPrice() {
    return this.price * this.amount;
  }

  static pinkChair() {
    return new Product(
      "Pink Chair",
      "Furniture",
      require("../../../assets/products/image-product-1.png"),
      130,
      1
    );
  }

  static whiteChair() {
    return new Product(
      "White Chair",
      "Furniture",
      require("../../../assets/products/image-product-2.jpg"),
      150,
      1
    );
  }

  static woodChair() {
    return new Product(
      "Wood Chair",
      "Furniture",
      require("../../../assets/products/image-product-1.png"),
      125,
      1
    );
  }

  static blackLamp() {
    return new Product(
      "Black Lamp",
      "Lighting",
      require("../../../assets/products/image-product-3.jpg"),
      80,
      1
    );
  }
}
