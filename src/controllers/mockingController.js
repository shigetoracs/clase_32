import { faker } from "@faker-js/faker";

export const generateMockingProducts = (req, res) => {
  try {
    let products = [];
    for (let i = 0; i < 100; i++) {
      let product = {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.url(),
      };
      products.push(product);
    }
    res.json(products);
  } catch (e) {
    res.status(500).send(e);
  }
};