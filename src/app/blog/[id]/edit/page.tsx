"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    const blogs: BlogPost[] = stored ? JSON.parse(stored) : [];
    const blog = blogs.find((b) => b.id === id);
    //chatgpt немного помог
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    } else {
      alert("Пост не найден");
      router.push("/blog");
    }
  }, [id, router]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const stored = localStorage.getItem("blogs");
    let blogs: BlogPost[] = stored ? JSON.parse(stored) : [];

    blogs = blogs.map((b) => (b.id === id ? { ...b, title, content } : b));

    localStorage.setItem("blogs", JSON.stringify(blogs));
    router.push("/blog");
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Редактировать пост</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-xl"
        />
        <textarea
          placeholder="Содержание"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-xl h-40"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
        >
          Сохранить изменения
        </button>
      </form>
    </main>
  );
}
