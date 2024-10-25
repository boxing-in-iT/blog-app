"use client";

import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { CardItem } from "@/components/shared/card";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const renderPosts = posts.slice(0, 10).map((post) => (
    <div key={post.id} className="col-span-1">
      <CardItem
        params={{
          id: String(post.id),
          title: post.title,
          body: post.body,
        }}
      />
    </div>
  ));

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderPosts}
      </div>
    </>
  );
}
