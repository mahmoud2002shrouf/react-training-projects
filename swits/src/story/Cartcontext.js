import React from "react";

export const Cartcontext = React.createContext({
    item: [],
    totalamount: 0,
    additem: (item) => { },
    removeitem: (id) => { }

})