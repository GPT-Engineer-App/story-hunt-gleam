const SkeletonItem = () => (
  <div className="bg-white shadow rounded-lg p-4 animate-pulse">
    <div className="flex justify-between items-start">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-16"></div>
    </div>
    <div className="mt-2">
      <div className="h-4 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
);

const SkeletonList = () => {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default SkeletonList;