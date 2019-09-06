import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesDashboardBudgets";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import SelectDecored from '../../../commons/SelectDecored'
class Brief extends Component {
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
            <Header title="Dashboard" />
            <Card color="title"> 
            </Card>
            <Paper className={classes.root}>
            <div style={{display:'flex', width: "100%", float: "left" }}>
            <Card color="primary" width="39%" height="165px" margin="2%"/> 
            <Card color="secondary" width="27%" height="165px" margin="2%"/>
            <Card color="fake" width="30%" height="165px"/>
                 
            </div>   
            <div style={{display:'flex', marginTop:"2%",width: "100%", float: "left" }}>
                <div style={{ width: "40%", float: "left" }}>
                    <div style={{display:'flex',width: "100%", float: "left" }}>
                    <Card color="primary" width="100%" height="85px" margin="5%"/> 
                    <Card color="secondary" width="100%" height="85px" margin="5%"/> 
                    </div> 
                    <div style={{display:'flex', marginTop:"2%",width: "100%", float: "left" }}>
                    <Card color="primary" width="100%" height="85px" margin="5%"/> 
                    <Card color="secondary" width="100%" height="85px" margin="5%"/> 
                    </div> 
                    
                </div> 
                <div style={{display:'flex',width: "59%", float: "left" }}>
                    <Card color="fake" width="100%" height="175px">ytyrcytufygiu</Card>
                </div>    
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