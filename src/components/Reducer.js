const reducer = (state, action)=>{
    switch (action.type) {
        case "REMOVE_ITEM":
            return{
                ...state,
                item: state.item.filter((currentElement)=>{
                    return currentElement.id !== action.payload;
                })
            }
          
    
        default:
            return state;
    }
       
}

export default reducer