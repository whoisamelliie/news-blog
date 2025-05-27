import React from "react";
import Link from "next/link";

import { Blog } from "@/types/ blog";

interface BlogCardProps {
  blog: Blog;
  onDelete?: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onDelete }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden p-4 flex flex-col justify-between">
      <div>
        <span className="text-sm bg-green-600 text-white px-2 py-1 rounded-full inline-block mb-2">
          Коктейль
        </span>
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {blog.content.slice(0, 80)}...
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="space-x-2">
          <Link
            href={`/blog/${blog.id}/edit`}
            className="text-sm text-blue-600 hover:underline"
          >
            ✏️
          </Link>
          <button
            onClick={() => onDelete?.(blog.id)}
            className="text-sm text-red-600 hover:underline"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
