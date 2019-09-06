import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, {Fragment, Component } from "react";
import Admin from "../../../admin";
import { useStyles } from "./estilos/stylesTrainingRequest";
import { withStyles } from "@material-ui/core/styles";
import Header from '../../../header';
import Card from '../../../commons/card'
import Button from '../../../commons/ButtonGlobal'
import Paper from '@material-ui/core/Paper';
import ButtonInfo from '../../../commons/ButtonInfo';
import TextFieldDecored from '../../../commons/TextFieldDecored'
import TextAreaDecored from '../../../commons/TextAreaDecored'
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      allData:this.props.solicitud_capacitacion,
      flagPush: false,
      activeTabIndex: 0
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
 

 render() {
    const { classes } = this.props;
    const { allData } = this.state;
   return (
       <Fragment>
        <div  className="root">
            <Admin {...this.props} />
            <main  className={classes.content}>
            <div className={classes.toolbar} />
            <Header title="Solicitud de capacitación" module="RRHH" name="capacitación"/>
            <Card color="title"> 
            </Card>
            <Paper className={classes.root}>
            <div style={{ width: "3%", float: "right" }}>
                <ButtonInfo></ButtonInfo>
            </div>
        <div style={{ width: "100%" }}>
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
         </div>
          <TextAreaDecored
            style={{ width: "65%", marginRight: "3%" }}
            name="comentarioss" 
            
            handleOnChange = { (event) => {this.handleOnChange(event,'comentarioss' )}} 
            value= {allData.comentarioss}
            label="Comentarios"
            rows={2}
          /> 
      </div>
      <div style={{ width: "10%", float: "right" }}>
            <Button icon="save" color="primary" title="Guardar"/>
            </div>
            </Paper> 
            </main>
        </div>
        <div>
          
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    solicitud_capacitacion: state.datosHolidays.solicitud_capacitacion
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    // setLanguage: event => dispatch(IntlActions.setLocale(event)),
     //menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};
// connect(mapStateToProps)
export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(Brief)));