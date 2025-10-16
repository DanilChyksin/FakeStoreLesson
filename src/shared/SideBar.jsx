import React, { useEffect, useState } from "react";
import { API } from "../api";

export default function SideBar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const resp = await API.getCategories();
      setCategories(resp);
      setLoading(false);
    };
    fetchApi();
  }, []);
  console.log(categories);
//   category
// : 
// {id: 1, name: "cate", slug: "cate", image: "https://i.ibb.co/fVVDYpvV/0bd27753e7ee.jpg",…}
// creationAt
// : 
// "2025-10-12T17:16:14.000Z"
// description
// : 
// "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go."
// id
// : 
// 8
// images
// : 
// ["https://i.imgur.com/9LFjwpI.jpeg", "https://i.imgur.com/vzrTgUR.jpeg",…]
// price
// : 
// 98
// slug
// : 
// "classic-red-jogger-sweatpants"
// title
// : 
// "Classic Red Jogger Sweatpants"
// updatedAt
// : 
// "2025-10-12T17:16:14.000Z"
  return (
    <div
      className="bg-black rounded-3xl 
      overflow-hidden
    border border-gray-600 w-[20%] h-full p-10"
    >
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          <ul className="space-y-3">
            {categories.map(({ id, name }) => (
              <li
                className="text-white
                 font-medium text-xl cursor-pointer hover:text-gray-400
                 transition-all duration-300"
                key={id}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
