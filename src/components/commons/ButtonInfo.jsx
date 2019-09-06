import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
}));
export default function FloatingActionButtons() {
  const classes = useStyles();
  return (
    <div>
      <Button  style={{ marginTop:'-30px', minWidth:'30px',height:'34px',background:'#234493'}} >
        <InfoIcon fontSize="small" style={{color:'white'}}/>
      </Button>    
    </div>
  );
}