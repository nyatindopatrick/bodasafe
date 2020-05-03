import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import EditModal from "./EditModal";
import Loading from "../Loading";

const Table = ({ tableHeader, data, UI }) => {
  const [newData, setNewData] = useState();

  useEffect(() => {
    setNewData([...data]);
  }, [data]);
  console.log(data);

  const randomRange = (min, max) => Math.floor(Math.random() * (max - min))+min;
  return (
    <>
      {!newData ? (
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
            {newData &&
              newData.map((items, index) => {
                const {
                  sacco,
                  name,
                  status,           
                  ratings,
                  location,
                  reports
                } = items;
                return (
                  <tr key={index}>
                    <td data-label="No.">{index + 1}</td>
                    <td data-label="Sacco">{sacco || name}</td>
                    <td data-label="Status">{status}</td>
                    <td data-label="Riders">{ratings? ratings : 5}</td>
                    <td data-label="Location">{location? location:"Nyalenda"}</td>
                    <td data-label="Reports">{reports? reports.length: randomRange(1,20)}</td>
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
    </>
  );
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  saccoUI: PropTypes.object,
  riderUI: PropTypes.object
};

export default Table;
