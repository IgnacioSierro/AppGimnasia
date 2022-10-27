import React, { useEffect, useState } from "react";
import "../styles/dashboards.css";
import { getAllMembers, getAllSponsors } from "../functions/functions";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashBoards() {
  const [members, setMembers] = useState(null);
  const [sponsors, setSponsors] = useState(null);

  useEffect(() => {
    getAllMembers(setMembers);
    getAllSponsors(setSponsors);
  }, []);

  return (
    <div>
      <div>
        {" "}
        {members != null ? (
          <div className="dashboard-socio">
            <div className="center-length">{members.length}00</div>
            <div className="center-entity">Socios</div>
            <div className="center-month">Este mes</div>
          </div>
        ) : (
          "no hay socios"
        )}
      </div>

      <div>
        {" "}
        {sponsors != null ? (
          <div className="dashboard-sponsor">
            <div className="center-length">{sponsors.length}0</div>
            <div className="center-entity">Sponsors</div>
            <div className="center-month">Este mes</div>
          </div>
        ) : (
          "no hay sponsors"
        )}
      </div>

      <div>
        {" "}
        {members != null ? (
          <div className="dashboard-socio-deudor">
            <div className="center-length">
              {members.filter((deb) => deb.debt > 0).length}0
            </div>
            <div className="center-entity">Socios Deudores</div>
            <div className="center-month">Este mes</div>
            <Link to="#" className="more"><span>Más</span><FaAngleRight color="hsla(0, 0%, 20%, 1)"/></Link>
          </div>
        ) : (
          "no hay socios deudores"
        )}
      </div>

      <div>
        {" "}
        {sponsors != null ? (
          <div className="dashboard-sponsor-deudor">
            <div className="center-length">
              {sponsors.filter((deb) => deb.debt > 0).length}0
            </div>
            <div className="center-entity">Sponsors Deudores</div>
            <div className="center-month">Este mes</div>
            <Link to="#" className="more"><span>Más</span><FaAngleRight color="hsla(0, 0%, 20%, 1)"/></Link>
          </div>
        ) : (
          "no hay sponsors deudores"
        )}
      </div>
    </div>
  );
}

export default DashBoards;
