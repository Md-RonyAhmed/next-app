"use client";
const ReviewErrorPage = ({ error }: { error: Error }) => {
  return <div>{error.message}</div>;
};

export default ReviewErrorPage;
