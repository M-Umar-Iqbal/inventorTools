import { AddProductToShop } from "../Constants";


const initialState = {
    shopData:[]
};

export default function Add_product(state=initialState, action){
    
    switch(action.type){
        
        case AddProductToShop:
            return {
                ...state,
                shopData:[...state.shopData,action.payload]
            };
            
            default:
            return state;
    }
}
