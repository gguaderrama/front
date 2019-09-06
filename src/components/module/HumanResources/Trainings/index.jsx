import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesTrainings";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import ButtonInfo from '../../../commons/ButtonInfo';
import TextFieldDecored from '../../../commons/TextFieldDecored'
import TextAreaDecored from '../../../commons/TextAreaDecored'
import TableDecored from '../../../commons/TableDecored';
import { Link } from "react-router-dom";

class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      
      columns : [
        { title: 'Clave', field: 'clave',type : 'numeric' },
        { title: 'Curso', field: 'curso' },
        { title: 'Nombre', field: 'Nombre' },
        { title: 'Fecha Registro', field: 'fecharegistro' },
        { title: 'Participantes', field: 'participantes'},
        ],
        data : [
        { clave: '1',  curso: <a className="enlace" href="/participants">Excel</a>, 
        nombre: 'Carlos Trejo',fecharegistro: '30/Marzo/19',
        participantes: '0' },
        {clave: '2', curso:<a className="enlace" href="/participants">Excel basico</a> , 
        nombre: 'Fabiola Rojas',fecharegistro: '20/Febrero/19',
        participantes: '0'},
        { clave: '3', curso: <a className="enlace" href="/participants">Ortografía</a>, 
        nombre: 'Carlos Trejo',fecharegistro: '14/Junio/18',
        participantes: '15' },
        ],
        };
    
  }
componentDidMount() {}
setDataTabs(data){
}
 render() {
    const { classes } = this.props;
  
   return (
       <Fragment>
        <div  className="root">
            <Admin {...this.props} />
            <main  className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Capacitaciones" module="RRHH" name="capacitación"/>
            <Card color="title"> 
            </Card>
            <Paper className={classes.root}>
            <TableDecored
            addButton={false}
            Allactions={false}
            tableData={this.state.data}
            columns={this.state.columns}
            handleOnAdd = {this.handleOnAdd}
            handleOnDelete={data => this.handleOnDelete(data)}
          /> 
            </Paper> 
            </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu
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