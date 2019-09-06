import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import Admin from "../../admin";
import { useStyles } from "./estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TabsComponent from '../../commons/tabs/'
import tabsSpread  from "./interfaces/tabsSpread";
import { Button } from '@material-ui/core';
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      activeTabIndex: 0,
  };
  
  }
componentDidMount() {}

 render() {
    const { classes } = this.props;
   return (
      <div className="root">
        <Admin {...this.props} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div><h2>Brief para cotización #5151515-B1</h2></div>
          <Paper className={classes.root}>
              <TabsComponent tabsSpread = {tabsSpread({...this.props })}  />
          </Paper>
        </main>
      </div>
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
