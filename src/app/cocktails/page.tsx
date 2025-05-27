import CocktailList from "@/components/CocktailList";
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

const mockCocktails = [
  {
    id: "mojito",
    name: "Mojito",
    image: mojito.src, // ⬅️ только .src
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

export default function CocktailsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Каталог коктейлей</h1>
      <CocktailList cocktails={mockCocktails} />
    </main>
  );
}
