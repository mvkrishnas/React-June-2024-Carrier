import { CartItem } from "../model/CartItem";

export interface GadgetsState{
    cart: CartItem[]
}

const initialState: GadgetsState  = {
    cart: []
}

export const gadgetsReducer = (currentState: GadgetsState= initialState, action:any) => {

    //add to cart {type: "addToCart", payload: cartItem}
    //remove from cart {type: "removeCartItem", id: 3}
    //clear cart {type: "clearCart"}
    if(action.type === "addToCart"){
        const copy_of_cart = [...currentState.cart];
        copy_of_cart.push(action.payload);
        return {...currentState, cart: copy_of_cart};
    }
    if(action.type === "removeCartItem"){
        const copy_of_cart = [...currentState.cart];
        const index_of_item_to_remove = copy_of_cart.findIndex(ci => ci.product.id === action.id);
        if(index_of_item_to_remove !== -1){
            copy_of_cart.splice(index_of_item_to_remove, 1);
        }
        return {...currentState, cart: copy_of_cart};
    }
    if(action.type === "clearCart"){
        return {...currentState, cart: []};
    }
    return currentState;
}

export function createAddtoCartAction(cartItem: CartItem){
    return {type:"addToCart", payload: cartItem}
}