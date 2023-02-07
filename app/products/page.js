import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.modules.scss';

export default function ProductsPage() {
  return (
    <>
      <h1>ALL PRODUCTS</h1>
      <span className={styles.wrapper}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.firstName.toLowerCase()}`} />
              <Link href={`/products/${product.firstName.toLowerCase()}`}>
                <Image
                  src={`/images/${product.firstName}-${product.id}.png`}
                  alt={product.type}
                  width="566"
                  height="809"
                />

                <h3> {product.firstName.toUpperCase()}</h3>
                <p>{product.price}</p>
              </Link>
            </div>
          );
        })}
      </span>
    </>
  );
}
