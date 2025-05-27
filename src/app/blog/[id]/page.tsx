"use client";

import { useParams, useRouter } from "next/navigation";
import { initialBlogs } from "@/lib/blogData";

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const blog = initialBlogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-red-600">Блог не найден</h1>
        <button
          onClick={() => router.push("/blog")}
          className="mt-4 underline text-blue-600"
        >
          Вернуться назад
        </button>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {blog.content}
      </p>
    </main>
  );
}
