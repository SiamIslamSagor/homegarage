"use client";

import { useState, useEffect } from "react";
import DataTable from "@/components/common/DataTable";
import TableSearch from "@/components/common/TableSearch";

async function getMechanics() {
  const response = await fetch("/api/mechanics");
  if (!response.ok) {
    throw new Error("Failed to fetch mechanics");
  }
  return response.json();
}

export default function MechanicsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [mechanics, setMechanics] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMechanics();
        setMechanics(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const searchFields = ["name", "address", "specialization", "experience"];

  const filteredData = mechanics.filter(mechanic => {
    const matchesSearch = searchFields.some(field =>
      mechanic[field]?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesStatus = !statusFilter || mechanic.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Phone", accessor: "number" },
    { header: "Address", accessor: "address" },
    { header: "Specialization", accessor: "specialization" },
    { header: "Experience", accessor: "experience" },
    { header: "Mechanic Type", accessor: "mechanicType" },
    { header: "Status", accessor: "status" },
    {
      header: "NID",
      accessor: "ownerNIDImageUrl",
      render: (value: string) =>
        value ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-900"
          >
            View NID
          </a>
        ) : (
          <span className="text-gray-500">Not provided</span>
        ),
    },
    {
      header: "Certificate",
      accessor: "certificateUrl",
      render: (value: string) =>
        value ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-900"
          >
            View Certificate
          </a>
        ) : (
          <span className="text-gray-500">Not provided</span>
        ),
    },
    {
      header: "Trifold Image",
      accessor: "trifoldImageUrl",
      render: (value: string) => (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-900"
        >
          View Trifold
        </a>
      ),
    },
    {
      header: "Registration Date",
      accessor: "createdAt",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50/50">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Mechanics</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all registered mechanics in the system.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <TableSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchFields={searchFields}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
        </div>

        <div className="mt-4">
          <DataTable data={filteredData} columns={columns} />
        </div>
      </div>
    </div>
  );
}
