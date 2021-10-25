import { createSlice } from "@reduxjs/toolkit";
import Data from "../service/api";
import {
  addItemToCard,
  decreaseItemToCard,
  removeItemFromCard,
} from "./product-utils";

const productSlice = createSlice({
  name: "product",
  initialState: {
    brandsDate: [],
    filterCategory: [],
    productDate: [],
    products: [],
    heart: false,
  },

  reducers: {
    // Glavniy api.js file dagi filteredCategory funksiyasini Redux Toolkit orqali qilingani
    filteredCategory(state, action) {
      state.filterCategory = Data.filter(
        (date) => date.category === action.payload
      );
    },

    // Glavniy api.js file dagi filteredBrands funksiyasini Redux Toolkit orqali qilingani. SidebarCategoryLinks uchun, yani biron brand ga kirib uni bronta category siga kirganda sidebar dagi category lani linki saqlanib qolishi va chiqib turishi uchun agar redux orqali qilinmaganda biron brandga kirib categorysini uzgartirganda linkla uzgarib usha tanlagan categorysini nomlari chiqib qolayotgandi linklarda
    filteredBrands(state, action) {
      state.brandsDate = Data.filter((date) => date.brand === action.payload);
    },

    // Har bir productni uziga tegishli malumotini chiqarish uchun
    productView(state, action) {
      state.productDate = Data.filter(
        (date) => date.secondTitle === action.payload
      );
    },

    // Savatchaga qushishga bosganda va mahsulotni sonini oshirganda ishledigan function
    addProduct(state, action) {
      return {
        ...state,
        products: addItemToCard(state.products, action.payload),
      };
    },

    // Savatchadan mahsulotni sonini kametirganda ishledigan function
    decreaseProduct(state, action) {
      return {
        ...state,
        products: decreaseItemToCard(state.products, action.payload),
      };
    },

    // Mahsulotni uchirib tashlash funksiyasi
    removeProduct(state, action) {
      return {
        ...state,
        products: removeItemFromCard(state.products, action.payload),
      };
    },

    activeHeart(state, action) {
      return {
        ...state,
        heart: action.payload,
      };
    },
  },
});

export const {
  filteredBrands,
  filteredCategory,
  productView,
  addProduct,
  decreaseProduct,
  removeProduct,
  activeHeart,
} = productSlice.actions;

export default productSlice.reducer;
