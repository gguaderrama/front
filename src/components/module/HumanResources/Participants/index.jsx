import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesParticipants";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import ButtonInfo from '../../../commons/ButtonInfo';
import Typography from '@material-ui/core/Typography';
import TextFieldDecored from '../../../commons/TextFieldDecored'
import TextAreaDecored from '../../../commons/TextAreaDecored'
import TableDecored from '../../../commons/TableDecored'
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.capacitacion,
      flagPush: false,
      columns : [
        { title: 'Clave', field: 'clave',type : 'numeric' },
        { title: 'Curso', field: 'curso' },
        { title: 'Nombre', field: 'Nombre' },
        { title: 'Fecha Registro', field: 'fecharegistro' },
        { title: 'Participantes', field: 'participantes'},
        ],
        data : [
        { clave: '1', curso: 'Excel', 
        nombre: 'Carlos Trejo',fecharegistro: '30/Marzo/19',
        participantes: '0' },
        {clave: '2', curso: 'Excel basico', 
        nombre: 'Fabiola Rojas',fecharegistro: '20/Febrero/19',
        participantes: '0'},
        { clave: '3', curso: 'Ortografía', 
        nombre: 'Carlos Trejo',fecharegistro: '14/Junio/18',
        participantes: '15' },
        ],
        };
  }
  handleOnChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(name, "este es el nombre");
    console.log(value, "este es el valor");
    let fillValue = value;
    if (typeof fillValue === "string") {
      fillValue = fillValue.toUpperCase();
    }
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: fillValue // update the value of specific key
      }
    }));
  }
componentDidMount() {}
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
    const { classes } = this.props;
    const { allData } = this.state;
   return (
       <Fragment>
        <div  className="root">
            <Admin {...this.props} />
            <main  className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Capacitación" module="RRHH" name="capacitación"/>
            <Card color="title"> 
            </Card>
            <Paper className={classes.root}>
            <div style={{ width: "3%", float: "right" }}>
                <ButtonInfo></ButtonInfo>
            </div>
        <div style={{ width: "100%", marginTop:"1%"}}>
            <div style={{ display:'flex',width: "100%", float: "left" }}>
                <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    name="curso_taller"
                    value='Excel basico'
                    label="Curso taller"
                    readOnly='true'
                    maxLength = "40"
                    handleOnChange={event => {
                    this.handleOnChange(event);
                    }}
                />
                <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    // variant= "filled"
                    name="solicita"
                    value='Christian Cadena Mendez'
                    readOnly='true'
                    maxLength = "40"
                    handleOnChange={event => {
                    this.handleOnChange(event);
                    }}
                    label="Solicita"
                />
                  <TextFieldDecored
                    style={{ width: "30%"  }}
                    // variant= "filled"
                    name="capacitador"
                    value='Carlos Trejo'
                    readOnly='true'
                    maxLength = "40"
                    handleOnChange={event => {
                    this.handleOnChange(event);
                    }}
                    label="Capacitador"
                />   
            </div>
            <div style={{ display:'flex',width: "100%", float: "left" }}>
                <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%" }}
                    name="lugar"
                    value='Allende #43,zona centro'
                    label="Lugar"
                    readOnly='true'
                    maxLength = "40"
                    handleOnChange={event => {
                    this.handleOnChange(event);
                    }}
                />
                <TextFieldDecored
                    style={{ width: "30%", marginRight: "5%"}}
                    name="fecha_desde"
                    value='01/julio/19'
                    label="Fecha Desde"
                    readOnly='true'
                    maxLength = "40"
                    handleOnChange={event => {
                    this.handleOnChange(event);
                    }}
                />
                  <TextFieldDecored
                    style={{ width: "30%" }}
                    // variant= "filled"
                    name="fecha_hasta"
                    value='15/julio/19'
                    readOnly='true'
                    maxLength = "40"
                    handleOnChange={event => {
                    this.handleOnChange(event);
                    }}
                    label="Fecha Hasta"
                />
            </div>
          <TextAreaDecored
            style={{ width: "100%"}}
            name="comentario_cap" 
            value= {allData.comentario_cap}
            handleOnChange = { (event) => {this.handleOnChange(event,'comentario_cap')}} 
            label="Comentarios"
            rows={1}
          /> 
        </div>
        <div style={{display:'flex', width: "100%"}}> 
            <Typography color="textPrimary">Lista de Participantes</Typography>
        </div>
        <TableDecored
            addButton={false}
            Allactions={true}
            tableData={this.state.data}
            columns={this.state.columns}
            handleOnAdd = {this.handleOnAdd}
            handleOnDelete={data => this.handleOnDelete(data)} 
          /> 
        <div style={{display:'flex', width: "26.5%", float: "right" }}>
            <Button style={{display:'flex', width: "30%", float: "right" }}  title="Guardar" icon="save" color="primary"/>
            <Button  style={{display:'flex', width: "30%", float: "right" }} title="Descargar" icon="download" color="secondary"/>
  </div>
      </Paper> 
    </main>
    </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
   capacitacion: state.datosHolidays.solicitud_capacitacion
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    // setLanguage: event => dispatch(IntlActions.setLocale(event)),
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));