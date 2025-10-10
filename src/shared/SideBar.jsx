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
  return (
    <div
      className="bg-black rounded-3xl 
      overflow-hidden
    border border-gray-600 w-[20%] h-full"
    >
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          <ul>
            {categories.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}
      SideBar
    </div>
  );
}
