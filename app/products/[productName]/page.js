import Image from 'next/image';
import { products } from '../../../database/products';
import AddToCartButton from '../../components/AddToCartButton';
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
    <>
      <div className={styles.product_wrapper}>
        <h1>{oneProduct.firstName}</h1>
        <div className={styles.image_layout}>
          {' '}
          <Image
            src={`/images/${oneProduct.firstName}-${oneProduct.id}.png`}
            alt={oneProduct.type}
            width="566"
            height="809"
          />{' '}
        </div>
      </div>

      <div className={styles.product_description}>
        <p>{oneProduct.description}</p>
        <main> {oneProduct.price}</main>
        <AddToCartButton />
        <Product product={oneProduct} />
      </div>
    </>
  );
}
