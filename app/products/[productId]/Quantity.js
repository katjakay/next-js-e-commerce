import { cookies } from 'next/headers';
import { getProducts } from '../../../database/products';

export default async function quantityPage() {
  const products = await getProducts();

  const productsCookie = cookies().get('productsCookie');

  let productsCookieParsed = [];
  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, quantity: 0 };

    // read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  return (
    <div>
      {productsWithQuantity.map((product) => {
        return (
          <div key={product.id}>
            <p>QTY: {product.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}
