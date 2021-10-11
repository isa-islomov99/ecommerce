import React from "react";
// import { Link } from "react-router-dom";
import "./categorys.scss";

const Categorys = () => {
  return (
    <div className="categorys">
      <div className="container">
        <div className="category__links">
          {/* <Link> */}
            <h3 className="category__links_text">Smartfonlar</h3>
          {/* </Link> */}
          {/* <Link> */}
            <h3 className="category__links_text">Kompyuter va Noutbuklar</h3>
          {/* </Link> */}
          {/* <Link> */}
            <h3 className="category__links_text">Maishiy texnika</h3>
          {/* </Link> */}
          {/* <Link> */}
            <h3 className="category__links_text">Televizorlar</h3>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
