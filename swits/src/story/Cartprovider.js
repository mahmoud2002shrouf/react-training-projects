import React, { useReducer } from 'react';
import { Cartcontext } from './Cartcontext';
const defultcartstate = {
    item: [],
    totalamount: 0,
}
const cartreduser = (state, action) => {
    if (action.type === 'Add') {

        const updatedTotalAmount =
            state.totalamount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.item[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.item];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.item.concat(action.item);
        };



        return {
            item: updatedItems,
            totalamount: updatedTotalAmount,
        }
    }

    if (action.type === 'Remove') {
        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.item[existingCartItemIndex];
        const updatedTotalAmount = state.totalamount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.item.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.item];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            item: updatedItems,
            totalamount: updatedTotalAmount
        };
    }
}


export default function Cartprovider(props) {
    const [cartstate, dispatchstate] = useReducer(cartreduser, defultcartstate)
    const addnewitem = item => {
        dispatchstate({ type: 'Add', item: item })

    }
    const removeitem = id => {
        dispatchstate({ type: 'Remove', id: id })


    }
    const Cartcontexts = {
        item: cartstate.item,
        totalamount: cartstate.totalamount,
        additem: addnewitem,
        removeitem: removeitem,

    }
    return (
        <Cartcontext.Provider value={Cartcontexts}>
            {props.children}
        </Cartcontext.Provider>
    )
}
