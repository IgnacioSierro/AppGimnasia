import React from "react";
import "../styles/debtorFilter.css";

const FilterDebtor = (props) => {

    let onFilterValueChanged = (event) => {
        props.filterValueSelected(event.target.value)
    }

  return (
    <div className="filter-debtor">
      <select name="isDebtor" onChange={onFilterValueChanged}>
        <option value="all">Todos</option>
        <option value="debtors">Deudores</option>
      </select>
    </div>
  );
};

export default FilterDebtor;
