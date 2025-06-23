import { configureStore } from '@reduxjs/toolkit';
import GenderReducer from '../features/category/GenderSlice';
import CategoryReducer from '../features/category/childcategory/CategorySlice';
import Assortmentreducer from '../features/category/childcategory/assortment/AssortmentSlice';
import ProductReducer from '../features/category/childcategory/assortment/product/ProductSlice';
import RegisterReducer from '../features/category/components/RegisterSlice';


export const store = configureStore({
  reducer: {
    gender: GenderReducer,
    category: CategoryReducer,
    assortment: Assortmentreducer,
    products: ProductReducer,
    register:RegisterReducer
  },
});
