import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { ProductNotFoundMetadata } from './not-found';
import styles from './page.module.scss';
import Product from './Product';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata(props: Props) {
  const oneProduct = await getProductById(parseInt(props.params.productId));

  if (!oneProduct) {
    return ProductNotFoundMetadata;
  }

  return {
    title: oneProduct.firstName,
    description: `Our experienced instructors offer a variety of Pilates classes designed to help you achieve your goals, whether you're a beginner or an advanced practitioner. Choose from mat classes, equipment classes, or private sessions tailored to your specific needs. Shop ${oneProduct.firstName} and many more and start feeling stronger and more energized today`,
    icons: {
      shortcut: '/icon.svg',
    },
  };
}

export default async function OneProductPage(props: Props) {
  const oneProduct = await getProductById(parseInt(props.params.productId));

  if (!oneProduct) {
    notFound();
  }

  return (
    <main className={styles.oneProduct_wrapper}>
      <div className={styles.oneProduct_imageLayout}>
        <Image
          data-test-id="product-image"
          src={`/images/${oneProduct.id}.png`}
          alt={oneProduct.type}
          width="498"
          height="712"
        />
      </div>
      <div className={styles.oneProduct_textLayout}>
        <div>
          <h1 className={styles.oneProduct_h1}>{oneProduct.firstName}</h1>
          <p data-test-id="product-price" className={styles.oneProduct_price}>
            {oneProduct.price} €
          </p>
          <hr className={styles.oneProduct_lineBreak} />
          <p className={styles.oneProduct_description}>
            {oneProduct.description}
          </p>
        </div>
        <div className={styles.oneProduct_buttonLayout}>
          <Product product={oneProduct} />
        </div>
      </div>
    </main>
  );
}
