import { configureStore } from '@reduxjs/toolkit';
import globalSearchSlice from "@/features/globalSearch/globalSearchSlice";
import catalogSlice from "@/features/catalog/catalogSlice"
import topFilterSlice from "@/features/topFilter/topFilterSlice";

export const store = configureStore({
  reducer: {
    topfilter: topFilterSlice,
    globalsearch: globalSearchSlice,
    catalog: catalogSlice
  },
});