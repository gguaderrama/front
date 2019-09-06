import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const {
    title = "Warning : ¿Seguro qué desea Eliminar el registro?",
    messageDelete = "Usa vez que seleccione OK no podrá recuperarlo",
    handleOnDelete = e => console.log("On click Alert:>", e),
    handleCloseDialog = e => console.log("Cierre modal:>", e),
    open = false
  } = props;
  return (
    <div>
      <Dialog
        maxWidth={"lg"}
        open={open}
        onClose={handleCloseDialog}
        disableBackdropClick={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {messageDelete}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            color="primary"
          >
            ATRÁS
          </Button>
          <Button
            onClick={handleOnDelete}
            variant="contained"
            style={{ background: "#d32f2f", color: "white" }}
            autoFocus
          >
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
