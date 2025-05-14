import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "Total Revenue",
    stat: "$405,091.00",
    icon: BanknotesIcon,
    change: "+4.75%",
    changeType: "positive",
  },
  {
    id: 2,
    name: "Active Subscriptions",
    stat: "2,500",
    icon: CheckCircleIcon,
    change: "+54.02%",
    changeType: "positive",
  },
  {
    id: 3,
    name: "Pending Orders",
    stat: "120",
    icon: ClockIcon,
    change: "-1.39%",
    changeType: "negative",
  },
  {
    id: 4,
    name: "New Customers This Month",
    stat: "85",
    icon: BuildingOfficeIcon,
    change: "+10.18%",
    changeType: "positive",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Dashboard Overview
      </h1>
      <div className="mt-6">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(item => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden={true}
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {item.stat}
                </p>
                <p
                  className={classNames(
                    item.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600",
                    "ml-2 flex items-baseline text-sm font-semibold"
                  )}
                >
                  {item.changeType === "positive" ? (
                    <svg
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden={true}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.56l-2.47 2.47a.75.75 0 01-1.06-1.06l3.75-3.75a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L10.75 5.56v10.69A.75.75 0 0110 17z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden={true}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.75.75v10.69l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 011.06-1.06L9.25 14.44V3.75A.75.75 0 0110 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="sr-only">
                    {" "}
                    {item.changeType === "positive"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all
                      <span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
