import { AddShopToStore } from "../Constants";
import { AddProductToShop } from "../Constants";
export const AddShop = (shop)=>{
    console.warn("Action Called");
    
    return{
        type:AddShopToStore,
        payload:shop,  
    };
};

export const Add_Product = (product)=>{
    return{
        type:AddProductToShop,
        payload:product,
    };
};