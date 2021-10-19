import { createSlice } from "@reduxjs/toolkit";
import Data from "../service/api";

const productSlice = createSlice({
  name: "product",
  initialState: {
    brandsDate: [],
    filterCategory: [],
    // filterProductDate: [],
  },

  reducers: {
    // Glavniy api.js file dagi filteredCategory funksiyasini Redux Toolkit orqali qilingani 
    filteredCategory(state, action) {
      state.filterCategory = Data.filter(date =>  date.category === action.payload);
    },

    // Glavniy api.js file dagi filteredBrands funksiyasini Redux Toolkit orqali qilingani. SidebarCategoryLinks uchun, yani biron brand ga kirib uni bronta category siga kirganda sidebar dagi category lani linki saqlanib qolishi va chiqib turishi uchun agar redux orqali qilinmaganda biron brandga kirib categorysini uzgartirganda linkla uzgarib usha tanlagan categorysini nomlari chiqib qolayotgandi linklarda
    filteredBrands(state, action) {
      state.brandsDate = Data.filter((date) => date.brand === action.payload);
    },

    // Glavniy api.js file dagi filteredBrandCategory funksiyasini Redux Toolkit orqali qilingani
    // filteredBrandCategory(state, action) {
    //   state.filterProductDate = Data.filter(date => date.brand === action.payload && date.category === action.payload)
    // },
  },
});

export const { filteredBrands, filteredCategory, filteredBrandCategory } = productSlice.actions;

export default productSlice.reducer;
