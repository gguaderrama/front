import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "../Holidays/estilos/styleHolidays";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import TabsComponent from '../../../commons/tabs'
import tabspread from './Interfaces/tabspread'
import Paper from '@material-ui/core/Paper';
import ButtonInfo from '../../../commons/ButtonInfo';
class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      activeTabIndex: 0
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
            <Header title="Vacaciones/Permisos/Capacitaciones" module="RRHH" name="empleados"/>
            <Card color="title"/>
            <Paper className={classes.root}>
              <div style={{float:'right'}}>
              <ButtonInfo></ButtonInfo> 
              </div>  
              <TabsComponent tabsSpread = {tabspread({...this.props })}  />            
            </Paper>
          </main>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    datosHolidays: state.datosHolidays
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
)(withStyles(useStyles)(withTranslate(Holidays)));
