import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./createslic";

// import productSlice from "./createslic1";


export const store=configureStore({
    reducer:{  
    // createe:productcreate,
    
        // ord : orderdetailslic,
    productss:productSlice,
   
    // posts : postsSlice,
  
    // filterss:counterItem,
  
    // fil : filterSlice
    
    
    }
    
    })