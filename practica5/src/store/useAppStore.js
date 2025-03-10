import {create} from "zustand"
import {devtools} from "zustand/middleware";
import { createRecipesSlice } from "./recipeSlice";

export const useAppStore=create(devtools((...args)=>({
    ...createRecipesSlice(...args)
})))