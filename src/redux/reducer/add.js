const initialState={
    add:0,
    data:[]
}

 const Addred =(state=initialState,action)=>{
    switch(action.type){
        case 'ADD' : 
        return {...state,
            add:state.add +1,
        data:[...state.data,action.data]}
        
        default: return state
    }
    
}
export default Addred;