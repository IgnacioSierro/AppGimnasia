import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import "../styles/partners.css";
import { FaAngleLeft, FaSearch } from "react-icons/fa";
import { getAllMembers } from "../functions/functions";
import FilterDebtor from "./FilterDebtor";

const Partners = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [filterTextValue, updateFilterText] = useState("all");
  const [searchParam] = useState(["name"]);

  useEffect(() => {
    getAllMembers(setMembers);
  }, []);

  function handleInputChange(e) {
    e.preventDefault(e);
    setName(e.target.value);
  }

  let onFilterValueSelected = (filterValue) => {
    updateFilterText(filterValue);
  };

  function search(members) {
    return members.filter((member) => {
      if (filterTextValue === "debtors") {
        if (member.debt > 0) {
          return searchParam.some((newMember) => {
            return (
              member[newMember]
                .toString()
                .toLowerCase()
                .indexOf(name.toLowerCase()) > -1
            );
          });
        }
      } else if (filterTextValue === "all") {
        return searchParam.some((newMember) => {
          return (
            member[newMember]
              .toString()
              .toLowerCase()
              .indexOf(name.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="partners-back">
        <Link to="/home" className="partners-back">
          <FaAngleLeft size={20} color="hsla(0, 0%, 20%, 1)" />
          <span>Volver</span>
        </Link>
      </div>
      <div className="partners-title">Socios</div>
      <div className="partners-filter-div">
        <input
          className="partners-searchInput"
          type="text"
          placeholder="Buscar socio..."
          onChange={(e) => handleInputChange(e)}
        />
        <FaSearch className="partners-search-icon" />
      </div>
      <FilterDebtor filterValueSelected={onFilterValueSelected} />
      <ul className="partners-list">
        {search(members).map((member) => {
          return (
            <Link className="partners-link" to={"/members/" + member.id}>
              <li>{member.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Partners;
