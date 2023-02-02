import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export default function SingleProductPage() {
  return (
    <>
      <h1>Single products here</h1>
      <main>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/singleproduct/${product.firstName.toLowerCase()}`}>
                <h3> {product.firstName}</h3>
              </Link>
              <Link href={`/singleproduct/${product.firstName.toLowerCase()}`}>
                <Image
                  src={`/images/${product.firstName}-${product.id}.png`}
                  alt={product.type}
                  width="200"
                  height="200"
                />
                <p>{product.price}</p>;
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
