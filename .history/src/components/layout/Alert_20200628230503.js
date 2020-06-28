import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { useContext } from "react";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertCOntext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
