import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/styleTrainers";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
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
        { title: 'Nombre', field: 'nombre' },
        { title: 'Telefono', field: 'telefono' },
        { title: 'Correo', field: 'correo' },
        { title: 'Comentarios', field: 'comentarios'},
       
        ],
        data : [
        { clave: '1', nombre: 'Carlos Trejo', 
       telefono: '5535412548',correo: 'trejo@.com',
        comentarios: ' '},
        { clave: '2', nombre: 'Jesus Garcia', 
        telefono: '5524789689',correo: 'mendez@.com',
        comentarios: ' '},
        ],
        };
    
  }
componentDidMount() {}
setDataTabs(data){
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
 render() {
    const { classes } = this.props;
    const { allData } = this.state;
   return (
       <Fragment>
        <div  className="root">
            <Admin {...this.props} />
            <main  className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Capacitadores" module="RRHH" name="capacitación"/>
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