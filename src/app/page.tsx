import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Добро пожаловать!</h1>
      <p className="text-lg mb-8">
        Исследуй наш каталог коктейлей и читай блог
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/cocktails"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Перейти к коктейлям
        </Link>

        <Link
          href="/blog"
          className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
        >
          Читать блог
        </Link>
      </div>
    </main>
  );
}
