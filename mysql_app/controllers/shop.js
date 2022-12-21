const Product = require("../models/product");
const Cart = require("../models/cart");
const User = require("../models/user");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({ where: { id: prodId } })
    .then((product) => {
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product[0].title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = async (req, res, next) => {
  const user = await User.findOne({ where: { id: 1 } });
  const cart = await user.getCart();
  const products = await cart.getProducts();
  console.log(cart);
  console.log(products);
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
    products: products,
  });
};

exports.postCart = async (req, res, next) => {
  const prodId = req.body.productId;
  const user = await User.findOne({ where: { id: 1 } });
  const cart = await user.getCart();

  const cartProds = cart.getProducts({ where: { id: prodId } });
  let product;
  if (cartProds.length > 0) {
    product = products[0];
  }

  let newQty = 1;
  if (product) {
    // qty adjust
  }
  const prodToADd = await Product.findOne({ where: { id: prodId } });

  await cart.addProduct(prodToADd, { through: { quantity: newQty } });

  // Product.findById(prodId, (product) => {
  //   Cart.addProduct(prodId, product.price);
  // });

  //THIS WILL BREAK AND WE FIX IT
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
