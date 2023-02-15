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
    description: `Single product page for ${oneProduct.firstName}`,
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
    <span>
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
              {oneProduct.price}
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
    </span>
  );
}
