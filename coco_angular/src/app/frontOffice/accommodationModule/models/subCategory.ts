import { Category } from './category';

export interface SubCategory {
  subCategoryID: number;
  subCategoryTitle: string;
  subCategoryDescription: string;
  category: Category;
}
