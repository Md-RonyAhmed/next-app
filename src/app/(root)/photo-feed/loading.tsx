const PhotoFeedSkeleton = () => {
  return (
    <div className="animate-pulse">
      <main className="container mx-auto">
        {/* Skeleton Heading */}
        <div className="text-center my-4">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="aspect-square">
              <div className="w-full h-full bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default PhotoFeedSkeleton;
