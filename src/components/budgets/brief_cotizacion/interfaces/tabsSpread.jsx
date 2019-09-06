import React from 'react'

import DatosGeneralesBrief from './datos_generales'
const tabsSpread = (props) => {
    return (
        [{       
            tabs : [
               {name : 'DATOS GENERALES'},
               {name : 'METODOLOGIA 1'},
               {name : 'METODOLOGIA 2'},
               {name : 'METODOLOGIA 3'},
               {name : 'OTROS'},
               {name : 'MUESTRAS'}
            ],
            component : [
              { component : <DatosGeneralesBrief {...props}/>},
              { component : 'hwebfhwebgh'},
              { component : 'hwebfhwebgh'},
              { component : 'hwebfhwebgh'},
              { component : 'hwebfhwebgh'},
              { component : 'hwebfhwebgh'},
           ]
        }]
      );
}
export default tabsSpread