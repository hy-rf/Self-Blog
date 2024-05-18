import Category from './Category';

export default interface Product {
  id: number;
  name: string;
  price: number;
  number: number;
  category: Category;
}
