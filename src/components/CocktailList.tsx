import React from "react";
import Card from "./Card";

export interface Cocktail {
  id: string;
  name: string;
  image: string;
  description?: string;
}

interface CocktailListProps {
  cocktails: Cocktail[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cocktails.map((cocktail) => (
        <Card
          key={cocktail.id}
          title={cocktail.name}
          image={cocktail.image}
          description={cocktail.description}
          link={`/cocktails/${cocktail.id}`}
          tag="Коктейль"
        />
      ))}
    </div>
  );
};

export default CocktailList;
