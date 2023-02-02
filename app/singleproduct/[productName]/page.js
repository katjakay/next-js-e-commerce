import Image from 'next/image';
import { products } from '../../../database/products';
import AddToCartButton from '../../components/AddToCartButton';

// Use method FIND to loop through database
export default function OneProductPage(props) {
  const oneProduct = products.find((product) => {
    // return item of the database if it matches server info
    return product.firstName.toLowerCase() === props.params.productName;
  });

  console.log(oneProduct);
  return (
    <>
      <Image
        src={`/images/${oneProduct.firstName}-${oneProduct.id}.png`}
        alt={oneProduct.type}
        width="200"
        height="200"
      />
      <h1>{oneProduct.firstName}</h1>
      <main> {oneProduct.price}</main>;
      <AddToCartButton />
    </>
  );
}
