import { cache } from 'react';
import { sql } from './connect';

/* export const products = [
  {
    id: 1,
    firstName: 'Pilates Retreat',
    type: 'Service',
    price: '560',
    description:
      'Taking place at the auspicious time of summer solstice, our program is about healing and growth, deep rest, heartfelt sensuality and self acknowledgement: A shedding of the superficial, an ode to the beauty of life, a celebration of re-connection between nature, your body and your mind.',
  },
  {
    id: 2,
    firstName: 'Pilates Class',
    type: 'Service',
    price: '75',
    description:
      'The classes of Ka-linaw Pilates Practice are designed to be modern, dynamic and fun. There are no previous skills needed to start the journey, as all the classes are created and destined for beginner to advanced practitioners.',
  },
  {
    id: 3,
    firstName: 'Ka-linaw Socks',
    type: 'Print',
    price: '34',
    description:
      'Get a grip and hold your pose with our light-weight, cotton Ka-linaw Pilates grip crew socks.',
  },
  {
    id: 4,
    firstName: 'Ka-linaw Hoodie',
    type: 'Garment',
    price: '120',
    description:
      'This new cropped long-sleeve is the perfect layering piece for a chilly morning. The raw hem and dropped shoulder seam are streetwear inspired, while the lightweight Airlume cotton is fit to flatte.',
  },
];
*/

type Product = {
  id: number;
  firstName: string;
  type: string;
  price: string;
  description: string | null;
};

// get all products
export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;

  return products;
});

// get a single product
export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
    products
    WHERE
      id = ${id}
  `;
  return product;
});

// create a new product
export const createProduct = cache(
  async (
    firstName: string,
    type: string,
    price: string,
    description: string,
  ) => {
    const [product] = await sql<Product[]>`
      INSERT INTO products
        (first_name, type, price, description)
      VALUES
        (${firstName}, ${type}, ${price}, ${description})
      RETURNING *
    `;
    return product;
  },
);

// update a product by ID
export const updateProductById = cache(
  async (
    id: number,
    firstName: string,
    type: string,
    price: string,
    description: string,
  ) => {
    const [product] = await sql<Product[]>`
      UPDATE
        products
      SET
        first_name = ${firstName},
        type = ${type},
        price = ${price},
        description = ${description}
      WHERE
        id = ${id}
      RETURNING *
    `;
    return product;
  },
);

// delete a product by ID
export const deleteProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    DELETE FROM
      products
    WHERE
      id = ${id}
    RETURNING *
  `;
  return product;
});
