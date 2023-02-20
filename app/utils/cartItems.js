import { cookies } from 'next/headers';
import { getProducts } from '../../database/products';

// import { getParsedCookie, setStringifiedCookie } from './cookies';

export async function cartPage() {
  const products = await getProducts();
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, quantity: 0 };

    // Read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  export default function cartTotalSum() {
    let totalPrice = 0;
    productsWithQuantity.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
  }
}
