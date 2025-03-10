import { getCategories } from "../services/RecipeService";

export const createRecipesSlice = (set) => ({
    categories:[],
    fetchCategories: async ()=>{
        const categories=await getCategories()
        set({categories})
    }
})