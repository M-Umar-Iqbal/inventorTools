import { AddShopToStore } from "../Constants";


const initialState = {
    storeData:[]
};

export default function Add_Shop(state=initialState, action){
    
    switch(action.type){
        
        case AddShopToStore:
            return {
                ...state,
                storeData:[...state.storeData,action.payload]
                
            };
          
            default:
            return state;
    }
}
