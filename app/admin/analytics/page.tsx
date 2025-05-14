export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
      <div className="mt-6 space-y-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">
            Chart Placeholder 1
          </h2>
          <div className="mt-4 h-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">
            Chart Placeholder 2
          </h2>
          <div className="mt-4 h-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
