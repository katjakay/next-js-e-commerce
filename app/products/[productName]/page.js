import Image from 'next/image';
import { products } from '../../../database/products';
import styles from './page.module.scss';
import Product from './Product';

export const dynamic = 'force-dynamic';

// Use method FIND to loop through database
export default function OneProductPage(props) {
  const oneProduct = products.find((product) => {
    // return item of the database if it matches server info
    return product.firstName.toLowerCase() === props.params.productName;
  });

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.image_wrapper}>
        <div>
          <Image
            src={`/images/${oneProduct.firstName}-${oneProduct.id}.png`}
            alt={oneProduct.type}
            width="566"
            height="809"
          />
        </div>
        <div className={styles.product_description}>
          <div>
            <h1>{oneProduct.firstName}</h1>
            <p>{oneProduct.description}</p>
            <p> {oneProduct.price}</p>
          </div>
          <div>
            <Product product={oneProduct} />
            <a className={styles.product_button} href="/">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
