const BASE_URL = "https://api.escuelajs.co/api/v1";
export const API = {
  getCategories: async () => {
    try {
      const responce = await fetch(`${BASE_URL}/categories`);
      const data = await responce.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  },
};
