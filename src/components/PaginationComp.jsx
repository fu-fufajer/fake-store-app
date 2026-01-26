import React from 'react'
import { Pagination } from "flowbite-react";

const PaginationComp = ({ currentPage, onPageChange }) => {
    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
                layout="pagination"
                currentPage={currentPage}
                totalPages={1000}
                onPageChange={onPageChange}
                previousLabel="Go back"
                nextLabel="Go forward"
                showIcons
            />
        </div>
    );
}

export default PaginationComp
