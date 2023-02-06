const rootReducer =(state,action)=>{
    switch(action.type){
        case "toggle":
            return{
                toggle: !state.toggle
            }
        default:
            return state;
    }
}

export default rootReducer;