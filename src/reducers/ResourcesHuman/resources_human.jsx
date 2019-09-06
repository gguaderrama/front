const initialState = {
    datos_holidays : '',
    solicitud_capacitacion:'',
    capacitacion:''
}
const datosHolidays = (state = initialState, action) => {
    switch (action.type){
        case "DATOS_HOLIDAYS":
        return {
            ...state,
            datos_holidays: action.value
        }
        case "SOLICITUD_CAPACITACION":
                return {
                    ...state,
                    solicitud_capacitacion: action.value
                }
        case "CAPACITACION":
                return {
                    ...state,
                    capacitacion: action.value
                }
       
            default :
            return state  
    }
}
export default datosHolidays