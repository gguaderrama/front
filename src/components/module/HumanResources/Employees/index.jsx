import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./stylesEmployees";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import TableDecored from '../../../commons/TableDecored';
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false, 
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
        { clave: '1', nombre:<a className="enlace" href="/holidays">Christian</a>, 
        apellidopaterno: 'Cadena',apellidomaterno: 'Mendez',
        tipopersonal: 'externo',deptoarea: 'Finanzas',fechaingreso: '18/12/1994',
        fechabaja: '20/12/1994' },
        { clave: '2', nombre: <a className="enlace" href="/holidays">Christian</a>, 
        apellidopaterno: 'Cadena',apellidomaterno: 'Mendez',
        tipopersonal: 'externo',deptoarea: 'Finanzas',fechaingreso: '18/12/1994',
        fechabaja: '20/12/1994' },
        { clave: '3', nombre: <a className="enlace" href="/holidays">Mario</a>, 
        apellidopaterno: 'Olvera',apellidomaterno: '',
        tipopersonal: 'interno',deptoarea: 'Ipsos',fechaingreso: '10/10/2009',
        fechabaja: '' },
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
            <Header title="Empleados" module="RRHH" name="empleados"/>
            <Card color="title"> 
            </Card>
            <TableDecored
            addButton={true}
            Allactions={false}
            tableData={this.state.data}
            columns={this.state.columns}
            handleOnAdd = {this.handleOnAdd}
            handleOnDelete={data => this.handleOnDelete(data)}
            />
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
