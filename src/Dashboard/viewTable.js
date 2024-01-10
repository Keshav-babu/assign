import React, { useState } from "react";
import Pagination from "./Pagination";
import DisplayTable from "./DisplayTable";

const ITEMS_PER_PAGE = 10;

const UserTable = ({ data }) => {
 const [currentPage, setCurrentPage] = useState(3);

 const totalItems = data.length;
 const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

 const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
 const endIndex = startIndex + ITEMS_PER_PAGE;
 const currentData = data.slice(startIndex, endIndex);

 const handlePageChange = (pageNumber) => {
 setCurrentPage(pageNumber);
 };

 return (
 <div>
 <div
 style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 }}
 >
 <div>
 <input placeholder="Search by Order ID..." />
 </div>
 <div>
 <p>Sort ↓↑</p>
 <p></p>
 </div>
 </div>
 <DisplayTable data={currentData} />
 <Pagination
 currentPage={currentPage}
 totalPages={totalPages}
 onPageChange={handlePageChange}
 />
 </div>
 );
};

export default UserTable;