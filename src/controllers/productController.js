import { faker } from "@faker-js/faker";

export const generateProducts = async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;

    if (!title || price === undefined) {
      let faltantes = [];
      if (!title) faltantes.push("title");
      if (price === undefined) faltantes.push("price");

      const errormsg = `Faltan campos: ${faltantes.join(", ")}`;
      console.error(errormsg);
      return res.status(400).json({ error: errormsg });
    }

    let product = {
      id: faker.string.uuid(),
      title,
      price,
      description,
      category,
      image,
    };

    res.status(201).json(product);
  } catch (e) {
    req.logger.error(`Error al generar productos ${e}`);
    res.status(500).send(e);
  }
};
