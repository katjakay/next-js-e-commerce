import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { ProductNotFoundMetadata } from './not-found';
import styles from './page.modules.scss';
import Product from './Product';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props) {
  const oneProduct = await getProductById(props.params.productId);

  if (!oneProduct) {
    return ProductNotFoundMetadata;
  }

  return {
    title: oneProduct.firstName,
    description: `Single product page for ${oneProduct.firstName}`,
  };
}

export default async function OneProductPage(props) {
  const oneProduct = await getProductById(props.params.productId);

  if (!oneProduct) {
    notFound();
  }

  return (
    <span className={styles.main_wrapper}>
      <div>
        <div className={styles.image_wrapper}>
          <Image
            src={`/images/${oneProduct.firstName}-${oneProduct.id}.png`}
            alt={oneProduct.type}
            width="498"
            height="712"
          />
        </div>
        <div className={styles.description_wrapper}>
          <div>
            <h1>{oneProduct.firstName}</h1>
            <p>{oneProduct.description}</p>
            <p> {oneProduct.price}</p>
          </div>
          <div>
            <Product product={oneProduct} />
          </div>
        </div>
      </div>
    </span>
  );
}
