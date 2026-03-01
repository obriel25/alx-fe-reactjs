import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),

    // 🔹 Caching Behavior Configuration
    staleTime: 1000 * 60,        // Data considered fresh for 1 minute
    cacheTime: 1000 * 60 * 5,    // Cache kept for 5 minutes after unmount
    refetchOnWindowFocus: false, // Prevent auto refetch on tab focus
    keepPreviousData: true,      // Keeps previous page data during pagination
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts - Page {page}</h2>

      {/* 🔹 Manual Refetch Button */}
      <button onClick={() => refetch()}>
        Refetch Data
      </button>

      {/* 🔹 Pagination Controls */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </button>
      </div>

      {isFetching && <p>Updating...</p>}

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;