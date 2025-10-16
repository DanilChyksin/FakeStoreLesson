import React, { useEffect, useState } from "react";
import { API } from "../api";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const respData = await API.getProducts();
      setProducts(respData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {products.map(({ description, images, slug, title, id, price }) => (
            <article
              className="flex flex-col justify-between h-auto 
              cursor-pointer group "
              key={id}
            >
              <div>
                <img
                  className="group-hover:scale-[1.05] transition-all duration-300"
                  src={images[0]}
                  alt={title}
                />
                <div>
                  <h3 className="text-2xl text-white font-medium pt-5 pb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
              <div className="flex justify-between gap-5 mt-5 items-center">
                <h4 className="text-blue-500 text-3xl font-medium">
                  {price} $
                </h4>
                <button className="main_button">В корзину</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
