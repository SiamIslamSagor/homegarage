import React from "react";
import { format } from "date-fns";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface DataTableProps {
  data: any[];
  columns: {
    header: string;
    accessor: string;
    render?: (value: any) => React.ReactNode;
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap bg-gray-50 sticky top-0"
                >
                  {column.header}
                </th>
              ))}
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 sticky top-0 whitespace-nowrap"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="transition-colors duration-200 hover:bg-gray-50 group even:bg-gray-50 even:hover:bg-gray-100"
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className="px-4 sm:px-6 py-4 text-sm text-gray-500 max-w-[200px] lg:max-w-[300px] truncate"
                  >
                    {column.render ? (
                      column.render(row[column.accessor])
                    ) : column.accessor.includes("date") ? (
                      format(new Date(row[column.accessor]), "PPP")
                    ) : column.accessor === "status" ? (
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize transition-colors duration-200 ${
                          row.status === "pending"
                            ? "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200"
                            : row.status === "approved"
                            ? "bg-green-100 text-green-800 group-hover:bg-green-200"
                            : "bg-red-100 text-red-800 group-hover:bg-red-200"
                        }`}
                      >
                        {row[column.accessor]}
                      </span>
                    ) : (
                      <span className="transition-colors duration-200 group-hover:text-gray-900">
                        {row[column.accessor]}
                      </span>
                    )}
                  </td>
                ))}
                <td className="px-4 sm:px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex justify-end items-center space-x-2 sm:space-x-3">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200 p-1 rounded-full hover:bg-indigo-50"
                      title="View Details"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="text-blue-600 hover:text-blue-900 transition-colors duration-200 p-1 rounded-full hover:bg-blue-50"
                      title="Edit"
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 transition-colors duration-200 p-1 rounded-full hover:bg-red-50"
                      title="Delete"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
