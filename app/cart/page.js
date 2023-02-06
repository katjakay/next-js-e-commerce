import { cookies } from 'next/headers';
import Link from 'next/link';
import { products } from '../../database/products';

// import CheckoutButton from '../components/CheckoutButton';

export default function cartPage() {
  const productsCookie = cookies().get('productscookie');

  let productsCookieParsed = [];
  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, quantity: 0 };

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

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
            <Link href={`/products/${product.firstName.toLocaleLowerCase()}`}>
              <h2>{product.firstName}</h2>
              <p>{product.price}</p>
              <p>quantity: {product.quantity}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
