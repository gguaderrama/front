    
const initialState = {
    menu : '',
}

const MenuAdmin = (state = initialState, action) => {
    switch (action.type){
        case "CALL_MENU":
        return {
            ...state,
            menu: action.value
        }
 
            default :
            return state  
    }

}

export default MenuAdmin
