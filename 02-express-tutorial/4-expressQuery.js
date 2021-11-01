const app = require("express")();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// app.get("/api/products/1", (req, res) => {
//   const product = products.find((product) => product.id === 1);
//   res.json(product);
// });

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const product = products.find((product) => product.id === Number(productID));
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  //   res.send("Hello World");
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);

  //! GO TO '/api/v1/query?search=a&limit=2'
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
