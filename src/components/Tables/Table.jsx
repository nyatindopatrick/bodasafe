import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { Button } from "reactstrap";
import EditModal from "./EditModal";
import Loading from "../Loading";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default function CustomPaginationActionsTable({
  data,
  tableHeader,
  UI
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, data && data.sacco.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {!data ? (
        <div align="center">
          <Loading />
        </div>
      ) : (
        <table>
          <thead>
            <tr style={{ backgroundColor: "#E2E7FF" }}>
              {tableHeader.map((item, index) => (
                <th key={index} scope="col">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0
              ? data &&
                data.sacco.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : data && data.sacco
            ).map((items, index) => {
              const {
                _id,
                sacco,
                name,
                status,
                location,
                reports,
              } = items;
              return (
                <tr key={index}>
                  <td data-label="Sacco">{sacco || name}</td>
                  <td data-label="Status">{status}</td>
                  <td data-label="Riders">
                    {data.rider.filter(({ sacco }) => sacco === _id).length}
                  </td>
                  <td data-label="Location">{location}</td>
                  <td data-label="Reports">{reports}</td>
                  <td data-label="Actions">
                    <Button
                      className="deactivate_activate action_btn"
                      outline
                      color={status === "Active" ? "success" : "danger"}
                      value={status}
                    >
                      {status}
                    </Button>
                    <EditModal modalTitle={UI.modal} />

                    <Button className=" action_btn" outline color="danger">
                      <i className="fas fa-trash-alt"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}

      <div className="row">
        <TablePagination
          rowsPerPageOptions={[20, 50, 100, { label: "All", value: -1 }]}
          colSpan={3}
          count={data && data.sacco.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </>
  );
}
