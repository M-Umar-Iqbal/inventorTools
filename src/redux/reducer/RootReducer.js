import Add_Shop from "./ShopReducer";
import Add_product from "./ProductReducer";
import { combineReducers } from "redux";



const rootreducer = combineReducers({
    Add_Shop,
    Add_product,
});

export default rootreducer;
