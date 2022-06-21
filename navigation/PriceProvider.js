import React, { createContext, useState } from "react";


const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
export const PriceContext = createContext({});

export const PriceProvider = ({children}) =>{
    const [profitLoss,setProfitLoss] = useState([]);
    
    return(

        <PriceContext.Provider value={{profitLoss,setProfitLoss,getProfitLoss:async (id,bought_price,quantity) =>{
            try{
                if (quantity <= 0) return
                
                   const getProfitLoss = async () =>{
                    const response = await fetch(
                        `https://api.coinlore.net/api/ticker/?id=${id}`,
                        options
                      );
                    const result = await response.json();
                     let change = parseFloat(result[0].price_usd).toFixed(2) - quantity *  parseFloat(bought_price).toFixed(2);      
                    console.log(change)
                    let loss_price = [change,result[0].price_usd]
                    setProfitLoss([parseFloat(change).toFixed(2),result[0].price_usd]);

                }
                getProfitLoss(id,bought_price,quantity);
            }
          
                   
            
            catch(e){
                console.log(e)
            }
        }}}>
            {children}
        </PriceContext.Provider>
    )
}