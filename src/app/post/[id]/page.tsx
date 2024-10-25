"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the shape of a blog post
interface Post {
  id: number;
  title: string;
  body: string;
}

// Define the type for dynamic route parameters
interface PostDetailProps {
  params: Promise<{ id: string }>;
}

export default function PostDetail({ params }: PostDetailProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [postId, setPostId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setPostId(resolvedParams.id);
    };
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (!postId) return;
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <div className="text-center">Loading...</div>;

  return (
    <div className="mx-auto max-w-3xl mt-60">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-800 mb-4">{post.body}</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => router.back()}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
