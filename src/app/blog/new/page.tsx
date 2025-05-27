"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      content,
    };

    const existing = localStorage.getItem("blogs");
    const blogs = existing ? JSON.parse(existing) : [];

    blogs.push(newPost);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    router.push("/blog");
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Добавить коктейль</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Название коктейля"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-xl"
        />
        <textarea
          placeholder="Описание / рецепт"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-xl h-40"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
        >
          Сохранить
        </button>
      </form>
    </main>
  );
}
