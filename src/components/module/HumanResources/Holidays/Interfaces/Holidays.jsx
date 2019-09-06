import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import { useStyles } from "../estilos/styleHolidays";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../../commons/TextFieldDecored";
import SelectDecored from '../../../../commons/SelectDecored';
import TableDecored from '../../../../commons/TableDecored';
import ButtonGlobal from '../../../../commons/ButtonGlobal';

class  Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      flagPush : false,
      columns : [
        { title: 'Clave', field: 'clave',type : 'numeric' },
        { title: 'Fecha Desde', field: 'fechadesde' },
        { title: 'Fecha Hasta', field: 'fechahasta' },
        ],
        data : [
        { clave: '1', fechadesde: '09/Enero/2019', 
        fechahasta: '11/Febrero/2019'},
        { clave: '1', fechadesde: '12/Julio/2018', 
        fechahasta: '25/Julio/2019'},
        ],
        };
  }
  componentWillUnmount() {
    if(this.state.allData !== ''){
      console.log(this.state.allData, 'all Data')
     // this.props.setDatosHolidays(this.state.allData)
      // this.setState({
      //   allData: this.props.datosGenerales
      // });
    }
  }
  componentDidMount() {
    // console.log(this.props.datosGenerales, 'did mount')
    // this.setState({
    //   allData: this.props.datosGenerales
    // });
  }
  handleOnChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let fillValue = value
    if(typeof(fillValue) === 'string'){
      fillValue =  fillValue.toUpperCase() ;
    }
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: fillValue // update the value of specific key
      }
    }));
  }
  handleOnChangeDate(date, name) {
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: date // update the value of specific key
      }
    }));
  };
  handleOnDelete(data) {
    if (data.id >= 1) {
      this.setState({
        tableData: this.state.tableData.filter(function(t) {
          return t.id !== data.id;
        })
      });
    }
  }
  render() {
    const { allData } = this.state;
    return (
      <Fragment>
      <div style={{ width: "100%" }}>
          <TextFieldDecored
            style={{ width: "35%", marginRight: "5%" }}
            name="empleado"
            value={'Christian Cadena Mendez'}
            label="Empleado"            
            readOnly='true'
            maxLength = "40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />  
           <SelectDecored   name="prueba" 
           label = 'Periodo'
           value={''}
           itemList = {[{id: '1', name: 'hola'}, {id: '2', name: 'test'}]}
           keySelect = 'id'
           valueSelect = 'name'
           handleOnChange={event => {
            this.handleOnChange(event);
          }}
            style={{height:'50%', width: "25%", marginRight: "5%" }} />      
          <TextFieldDecored
            style={{ width: "25%", marginRight: "3%" }}
            name="DiasDisponibles"
            value={6}
            readOnly='true'
            label="Días Disponibles"
            maxLength = "40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />               
      </div>
      <TableDecored
            addButton={false}
            Allactions={true}
            tableData={this.state.data}
            columns={this.state.columns}
            handleOnAdd = {this.handleOnAdd}
            handleOnDelete={data => this.handleOnDelete(data)}     
          />
  <div style={ this.state.data.length>=1 ? { display:'flex',width: "25%", float: "right" } : {display : 'none',width: "25%", float: "right" } }   >
            <ButtonGlobal style={{display:'flex', width: "30%", float: "right" }}  title="Guardar" icon="save" color="primary"/>
            <ButtonGlobal  style={{display:'flex', width: "30%", float: "right" }} title="Descargar" icon="download" color="secondary"/>
  </div>
  </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    datosHolidays: state.datosHolidays.datos_holidays
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    //setDatosHolidays: value => dispatch(()=>{}),
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Holidays)));
