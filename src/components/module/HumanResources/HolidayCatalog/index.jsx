import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesHolidayCatalog";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import ButtonInfo from '../../../commons/ButtonInfo';
import Paper from '@material-ui/core/Paper';
import TableDecored from '../../../commons/TableDecored'; 
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      columns : [
        { title: 'Clave', field: 'clave',type : 'numeric' },
        { title: 'Curso', field: 'curso' },
        { title: 'Nombre', field: 'nombre' },
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
componentDidMount() {}
setDataTabs(data){
}
 render() {
    const { classes } = this.props;
   return (
       <Fragment>
        <div className="root">
            <Admin {...this.props} />
            <main  className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Catalogo de vacaciones" module="RRHH" name="catalogos"/>
            <Card color="title"> 
            </Card>
                <Paper className={classes.root}>
                 
                    <TableDecored
            addButton={false}
            Allactions={true}
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