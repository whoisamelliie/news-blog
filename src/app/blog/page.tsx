"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "@/components/ BlogCard";
import { Blog } from "@/types/ blog";
import { initialBlogs } from "@/lib/blogData";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  //chatgpt немного помог
  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setBlogs(JSON.parse(stored));
    } else {
      setBlogs(initialBlogs);
      localStorage.setItem("blogs", JSON.stringify(initialBlogs));
    }
  }, []);

  const handleDelete = (id: string) => {
    const confirmed = confirm("Удалить этот блог?");
    if (confirmed) {
      const updated = blogs.filter((blog) => blog.id !== id);
      setBlogs(updated);
      localStorage.setItem("blogs", JSON.stringify(updated));
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Блог</h1>
        <Link
          href="/blog/new"
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
        >
          ➕ Новый блог
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p className="text-gray-500">Блоги не найдены.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </main>
  );
}
