import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import DatePickerDecored from "../../../commons/DatePickerDecored";
import * as actions from "../../../../actions";
import TableDecored from "../../../commons/TableDecored";
import { Link } from "react-router-dom";


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
class DatosGeneralesBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      openAdd : false,
      columns : [
        { title: 'Clave', field: 'clave',type : 'numeric' },
        { title: 'Nombre', field: 'nombre' },
        { title: 'Apellido Paterno', field: 'apellidopaterno' },
        { title: 'Apellido Materno', field: 'apellidomaterno' },
        { title: 'Tipo Personal', field: 'tipopersonal'},
        { title: 'Depto/Area', field: 'deptoarea'},
        { title: 'Fecha Ingreso', field: 'fechaingreso'},
        { title: 'Fecha Baja', field: 'fechabaja'},
      ],
      data : [
        { clave: '1', nombre: <a href='#'> Christian </a > , 
        apellidopaterno: 'Cadena',apellidomaterno: 'Mendez',
        tipopersonal: 'externo',deptoarea: 'Finanzas',fechaingreso: '18/12/1994',
        fechabaja: '20/12/1994'  },
        { clave: '2', nombre: 'Christian', 
        apellidopaterno: 'Cadena',apellidomaterno: 'Mendez',
        tipopersonal: 'externo',deptoarea: 'Finanzas',fechaingreso: '18/12/1994',
        fechabaja: '20/12/1994'  },
        { clave: '3', nombre: 'Mario', 
        apellidopaterno: 'Olvera',apellidomaterno: '',
        tipopersonal: 'interno',deptoarea: 'Ipsos',fechaingreso: '10/10/2009',
        fechabaja: ''  },
      ],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnAdd = this.handleOnAdd.bind(this);
    this.handleClose = this.handleClose.bind(this)
  }

  componentWillUnmount() {
    if (this.state.allData !== "") {
      this.props.setDatosGenerales(this.state.allData);
    }
  }
  componentDidMount() {}

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

  handleOnChangeDate(date, name) {
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: date // update the value of specific key
      }
    }));
  }

  handleOnDelete(data) {
    if (data.id >= 1) {
      this.setState({
        tableData: this.state.tableData.filter(function(t) {
          return t.id !== data.id;
        })
      });
    }
  }
  handleOnAdd(){
    this.setState({
      openAdd : true
    });
  }

  handleClose() {
    console.log('ewjnfewjnf')
    this.setState({
      openAdd : false
    });
    // setOpen(false);
  }
  render() {
    const { allData } = this.state;
    const { classes } = this.props;
    return (
      <div style={{ width: "100%" }}>

<Dialog open={this.state.openAdd} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregando....</DialogTitle>
        <Divider></Divider>
        <DialogContent>
        <div style={{ width: "100%" }}>
          <TextFieldDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="nombre_estudio"
            value={allData.nombre_estudio}
            label="Nombre de estudio"
            maxLength="40"
            readonly="true"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "3%" }}
            // variant= "filled"
            name="job"
            value={allData.job}
            maxLength="40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            label="Job"
          />
        </div>  
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
       <div>
          <TableDecored
            addButton={true}
            // Allactions={}
            tableData={this.state.data}
            columns={this.state.columns}
            handleOnAdd = {this.handleOnAdd}
            handleOnDelete={data => this.handleOnDelete(data)}
          />
        </div>
        <br />
        <div style={{ width: "48%", float: "left" }}>
          <TextFieldDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="nombre_estudio"
            value={allData.nombre_estudio}
            label="Nombre de estudio"
            maxLength="40"
            readonly="true"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />
          <TextFieldDecored
            style={{ width: "47%", marginRight: "3%" }}
            // variant= "filled"
            name="job"
            value={allData.job}
            maxLength="40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            label="Job"
          />
          <DatePickerDecored
            style={{ width: "47%", marginRight: "3%" }}
            label="Fecha"
            name="fecha_brief"
            handleOnChange={event => {
              this.handleOnChangeDate(event, "fecha_brief");
            }}
            value={allData.fecha_brief}
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="director"
            value={allData.director}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.director}
            maxLength="40"
            label="Director"
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="gerente"
            value={allData.gerente}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.gerente}
            maxLength="40"
            label="Gerente"
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="unidad_negocio"
            value={allData.unidad_negocio}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            maxLength="40"
            label="Unidad de negocio"
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="tipo_estudio"
            value={allData.tipo_estudio}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            maxLength="40"
            label="Tipo de estudio"
          />
        </div>
        <div style={{ width: "48%", float: "right" }}>
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            label="Objetivos"
            name="objetivos"
            value={allData.objetivos}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.objetivos}
            maxLength="40"
            rows={2}
          />
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="poblacion_objetivos"
            value={allData.poblacion_objetivos}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.poblacion_objetivos}
            label="Población Objetivos"
            rows={2}
          />
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="filtros"
            value={allData.filtros}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.filtros}
            label="Filtros"
            rows={2}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    datosGenerales: state.datosGenerales.datos_generales
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    setDatosGenerales: value => dispatch(actions.datosGenerales(value))
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(DatosGeneralesBrief)));
