import axios from "axios";

const newProduct = {
  name: "new product for testing purposes",
  currentPrice: 199.99,
  previousPrice: 250,
  categories: "men",
  imageUrls: [
    "img/products/men/001.png",
    "img/products/men/002.png",
    "img/products/men/003.png",
    "img/products/men/004.png",
  ],
  quantity: 100,
  color: "red",
  productUrl: "/men",
  brand: "braaaand",
  myCustomParam: "some string or json for custom param",
};
console.log("newProduct", newProduct);

const setProduct = () => {
  return axios
    .post("/api/products", newProduct)
    .then((newProduct) => {
      /*Do something with newProduct*/
      console.log("POST OK");
    })
    .catch((err) => {
      /*Do something with error, e.g. show error to user*/
      console.log(err);
    });
};

export default setProduct;
