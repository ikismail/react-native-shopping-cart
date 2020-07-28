export class ProductDetail {
  constructor(
    title,
    subtitle,
    description,
    price,
    image,
    size,
    colors,
    comments
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.price = price;
    this.image = image;
    this.size = size;
    this.colors = colors;
    this.comments = comments;
  }

  static pinkChair() {
    return new ProductDetail(
      "Pink Chair",
      "Furniture",
      "The Vitra Plastic Side Chairs are undoubtedly an absolute classic when it comes to the living area. The unusual mix of a plastic seat shell and wooden frame has since become a source of inspiration for many designers.",
      "150$",
      require("../../../assets/products/image-product-1.png"),
      "H:80cm W:50cm D:40cm",
      [ProductColor.blue(), ProductColor.pink(), ProductColor.orange()],
      [Comment.byHubertFranck()]
    );
  }
}

export class ProductColor {
  constructor(value, description) {
    this.value = value;
    this.description = description;
  }

  static blue() {
    return new ProductColor("#3366FF", "blue");
  }

  static pink() {
    return new ProductColor("#FF708D", "pink");
  }

  static orange() {
    return new ProductColor("#FFC94D", "orange");
  }
}

export class Profile {
  constructor(firstName, lastName, photo) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.photo = photo;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter() {
    return new Profile(
      "Mark",
      "Volter",
      require("../../../assets/image-profile.jpg")
    );
  }

  static hubertFranck() {
    return new Profile(
      "Hubert",
      "Franck",
      require("../../../assets/image-profile.jpg")
    );
  }
}

export class Comment {
  constructor(text, date, author, comments) {
    this.text = text;
    this.date = date;
    this.author = author;
    this.comments = comments;
  }

  static byHubertFranck() {
    return new Comment(
      "The chair has a good quality!",
      "Today 11:10 am",
      Profile.hubertFranck(),
      [Comment.byMarkVolter()]
    );
  }

  static byMarkVolter() {
    return new Comment(
      "Yes! I agree with you",
      "Today 11:10 am",
      Profile.markVolter(),
      []
    );
  }
}
