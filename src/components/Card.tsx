import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description?: string;
  link: string;
  tag?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  link,
  tag,
}) => {
  return (
    <Link
      href={link}
      className="block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white dark:bg-zinc-900"
    >
      <div className="w-full h-48 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        {tag && (
          <span className="text-sm text-white bg-pink-500 px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
