import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface TableSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchFields: string[];
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
}

const TableSearch: React.FC<TableSearchProps> = ({
  searchQuery,
  onSearchChange,
  searchFields,
  statusFilter,
  onStatusFilterChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1 min-w-0">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="block w-full rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow duration-200"
            placeholder={`Search by ${searchFields.join(", ")}`}
          />
        </div>
      </div>
      <div className="sm:w-48">
        <select
          value={statusFilter}
          onChange={e => onStatusFilterChange(e.target.value)}
          className="block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow duration-200"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default TableSearch;
