import Product from './Product';
import Tag from './Tag';

export default interface ProductTag {
  tagId: number;
  productId: number;
  tag: Tag;
  product: Product;
}
