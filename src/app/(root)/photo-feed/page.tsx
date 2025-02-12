import PhotoFeed from "@/components/PhotoFeed/PhotoFeed";
import { Suspense } from "react";

const PhotoFeedPage = () => {
  return (
    <Suspense fallback={<div className="text-center text-gray-500">Loading photos...</div>}>
      <PhotoFeed />
    </Suspense>
  );
};

export default PhotoFeedPage;
