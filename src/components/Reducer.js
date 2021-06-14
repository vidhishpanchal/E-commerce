const reducer = (state, action)=>{
    switch (action.type) {
        case "REMOVE_ITEM":
            return{
                ...state,
                item: state.item.filter((currentElement)=>{
                    return currentElement.id !== action.payload;
                })
            };
        case "CLEAR_CART":
            return{
                ...state,
                item:[]
            }
        case "INCREMENT":
            return{
                 item : state.item.map((currentItem)=>{
                    if (currentItem.id === action.payload){
                        return{
                            ...currentItem,
                            quantity:currentItem.quantity+1 
                        }
                   
                    }
                    return currentItem
                })
              
            }
        
          
    
        default:
            return state;
    }
       
}

export default reducer