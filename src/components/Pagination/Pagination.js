import { useState } from "react";

import "./Pagination.css";

const Pagination = ({ firendsPerPage, totalFriends, paginate }) => {
  const pageNumbers = [];
  const [isActive, setIsActive] = useState(1);

  for (let i = 1; i <= Math.ceil(totalFriends / firendsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, i) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                paginate(number);
                setIsActive(number);
              }}
              className={`page-link ${isActive === number ? "active" : ""}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
