import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import DatePickerDecored from "../DatePickerDecored";
import TextFieldDecored from "../TextFieldDecored";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import AlertDialog from "../Dialog";

import MaterialTable from "material-table";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import Search from "@material-ui/icons/Search";
import Sort from "@material-ui/icons/ArrowUpward";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Clear from "@material-ui/icons/CancelOutlined";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import Remove from "@material-ui/icons/Delete";
import { forwardRef } from 'react';

class TabledDecored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      rowToDelete: [],
      data: this.props.tableData,
      columns: this.props.columns
    };
    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
    this.onRowAdd = this.onRowAdd.bind(this);
  }
  filterCaseInsensitive(filter, row) {
    const id = filter.pivotId || filter.id;
    if (typeof row[id] === "string") {
      return row[id] !== undefined
        ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
        : true;
    }
    if (typeof row[id] === "number") {
      return row[id] !== undefined
        ? String(row[id]).startsWith(filter.value)
        : true;
    }
  }

  handleClickOpenModal(event = null) {
    this.setState({
      openModal: !this.state.openModal,
      rowToDelete: event
    });
  }

  onRowAdd(data) {
    console.log("llego on row dara");
    this.setState({ ...this.state, data });
  }

  render() {
    const {
      title = '',
      addButton = false,
      Allactions = true,
      search = false,
      paging = true,
      filtering = true,
      handleOnAdd = e => console.log("Add Table:>", e),
      handleOnDelete = e => console.log("Delete Table:>", e),
      handleOnEdit = e => console.log("Edit Table:>", e),
      nameButtonAdd = "AGREGAR",
      columns = [
        { title: "Clave", field: "clave", type: "numeric" },
        { title: "Nombre", field: "nombre" },
        { title: "Apellido Paterno", field: "apellidopaterno" },
        { title: "Apellido Materno", field: "apellidomaterno" },
        { title: "Tipo Personal", field: "tipopersonal" },
        { title: "Depto/Area", field: "deptoarea" },
        { title: "Fecha Ingreso", field: "fechaingreso" },
        { title: "Fecha Baja", field: "fechabaja" }
      ],
      tableData = []
    } = this.props;

    let actions = [
      {
        Header: "Acciones",
        width: 100,
        accessor: "age",
        sortable: false,
        filterable: false,
        Cell: row => (
          <div style={{ textAlign: "center", width: "71%" }}>
            <div onClick={handleOnEdit} style={{ float: "left" }}>
              <EditIcon color="primary" />
            </div>
            <div
              onClick={() => {
                this.handleClickOpenModal(row.original);
              }}
              style={{ float: "right" }}
            >
              <DeleteIcon style={{ color: "#d32f2f" }} />
            </div>
          </div>
        )
      }
    ];
    // let tableColumns = columns;
    // if (Allactions === true) {
    //   tableColumns = [...tableColumns, ...actions];
    // }


    let addedAll = {}
   
    if(Allactions === true){
      addedAll = {
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              console.log(newData, "esta es la data");
              data.push(newData);
              this.onRowAdd(data);
              // setState({ ...this.state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data[data.indexOf(oldData)] = newData;
              // setState({ ...this.state, data });
              this.onRowAdd(data);
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.splice(data.indexOf(oldData), 1);
              // setState({ ...this.state, data });
              this.onRowAdd(data);
            }, 600);
          })
      }

    }
   

    return (
      <div>
        <AlertDialog
          open={this.state.openModal}
          handleCloseDialog={() => {
            this.handleClickOpenModal();
          }}
          handleOnDelete={() => {
            handleOnDelete(this.state.rowToDelete);
            this.handleClickOpenModal();
          }}
        />
        {addButton ? (
          <div
            style={{
              width: "10%",
              float: "right",
              marginBottom: "1%",
              textAlign: "right"
            }}
          >
            <Button variant="contained" color="primary" onClick={handleOnAdd}>
              {nameButtonAdd || ""}
            </Button>
            <br />
          </div>
        ) : (
          <div />
        )}
        <div className="tablas">
          <MaterialTable
            title={title}
            icons={{
              Check: Check,
              DetailPanel: ChevronRight,
              Clear: Clear,
              Export: SaveAlt,
              Filter: FilterList,
              FirstPage: FirstPage,
              LastPage: LastPage,
              NextPage: ChevronRight,
              PreviousPage: ChevronLeft,
              Search: Search,
              SortArrow: Sort,
              Add: (() => <Add className= "color-icons" /> ),
              Edit: (() => <Edit className= "color-icons" /> ),
              Delete: (() => <Remove className= "delete" /> ),
            }}
            options={{
              filtering: filtering,
              actionsColumnIndex: -1,
              search: search,
              paging: paging
            }}
            columns={this.state.columns}
            data={this.state.data}
            editable={addedAll}
          />
        </div>
      </div>
    );
  }
}

export default TabledDecored;
