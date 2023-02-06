const rootReducer =(state,action)=>{
    switch(action.type){
        case "toggle":
            return{
                ...state,
                toggle: !state.toggle
            }
        case "text":
            return{
                ...state,
                text: action.val
            }
        default:
            return state;
    }
}

export default rootReducer;