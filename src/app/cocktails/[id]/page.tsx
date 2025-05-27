import { notFound } from "next/navigation";

import mojito from "@/assets/images/mojito.jpg";
import pina from "@/assets/images/pina.jpg";
import margarita from "@/assets/images/margarita.webp";
import cosmopolitan from "@/assets/images/cosmopolitan.jpg";
import bloody from "@/assets/images/bloody.jpg";
import longIsland from "@/assets/images/long.jpg";
import aperol from "@/assets/images/aperol.jpg";
import beach from "@/assets/images/beach.jpg";
import white from "@/assets/images/white.jpg";
import blue from "@/assets/images/blue.jpg";

interface Cocktail {
  id: string;
  name: string;
  image: string;
  description?: string;
}

const cocktails: Cocktail[] = [
  {
    id: "mojito",
    name: "Mojito",
    image: mojito.src,
    description: "Свежий мятный коктейль с лаймом.",
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    image: pina.src,
    description: "Ананас, кокос и лето в бокале!",
  },
  {
    id: "margarita",
    name: "Margarita",
    image: margarita.src,
    description: "Классика из текилы, лайма и апельсинового ликёра.",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    image: cosmopolitan.src,
    description: "Лёгкий, кисленький и элегантный коктейль с клюквой.",
  },
  {
    id: "bloody-mary",
    name: "Bloody Mary",
    image: bloody.src,
    description: "Томатный сок, водка и специи — брутально и бодрит.",
  },
  {
    id: "long-island",
    name: "Long Island Iced Tea",
    image: longIsland.src,
    description: "Сильный и насыщенный коктейль из нескольких спиртных.",
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    image: aperol.src,
    description: "Горько-сладкий аперитив с итальянским стилем.",
  },
  {
    id: "sex-on-the-beach",
    name: "Sex on the Beach",
    image: beach.src,
    description: "Персики, апельсины, клюква — лёгкий и сочный вкус.",
  },
  {
    id: "white-russian",
    name: "White Russian",
    image: white.src,
    description:
      "Кофейный ликёр, водка и сливки. Классика 'Большого Лебовски'.",
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    image: blue.src,
    description: "Яркий синий коктейль с цитрусовыми нотками.",
  },
];

export default async function CocktailPage({
  params,
}: {
  params: { id: string };
}) {
  const cocktail = cocktails.find((c) => c.id === params.id);

  if (!cocktail) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden">
        <div className="relative w-full h-64 sm:h-96">
          <img
            src={cocktail.image}
            alt={cocktail.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <span className="inline-block text-sm text-white bg-pink-500 px-3 py-1 rounded-full mb-3">
            Коктейль
          </span>
          <h1 className="text-3xl font-bold mb-4">{cocktail.name}</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {cocktail.description}
          </p>
        </div>
      </div>
    </main>
  );
}
