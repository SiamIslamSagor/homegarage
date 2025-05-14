const users = [
  {
    id: 1,
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
    telephone: "+1-202-555-0102",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "Esther Howard",
    title: "Forward Response Developer",
    role: "Member",
    email: "esther.howard@example.com",
    telephone: "+1-202-555-0103",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    title: "Central Security Manager",
    role: "Member",
    email: "jenny.wilson@example.com",
    telephone: "+1-202-555-0104",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 5,
    name: "Kristin Watson",
    title: "Lead Implementation Liaison",
    role: "Admin",
    email: "kristin.watson@example.com",
    telephone: "+1-202-555-0105",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 6,
    name: "Cameron Williamson",
    title: "Internal Applications Engineer",
    role: "Member",
    email: "cameron.williamson@example.com",
    telephone: "+1-202-555-0106",
    imageUrl: "https://via.placeholder.com/40",
  },
];

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        User Management
      </h1>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map(person => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-gray-500">
                              {person.telephone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person.title}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
