import axios from "axios";
import { seed } from "./categorySeed";

// * Smaller app so I didn't separate BLOG / CATEGORY api or abstracted ajax client
const BASE_URL = "https://frontend-api-test-nultien.azurewebsites.net/api";
const BLOG_POST_URL = `${BASE_URL}/BlogPosts`;
const CATEGORY_URL = `${BASE_URL}/Category`;

const clientApi = {};

clientApi.getCategories = () => axios.get(CATEGORY_URL);
clientApi.postCategory = (name) => axios.post(CATEGORY_URL, { name });
clientApi.seedCategories = () => {
  const storyPromises = seed.map(({ name }) => clientApi.postCategory(name));
  return Promise.all(storyPromises);
};
clientApi.deleteCategory = (id) => axios.delete(`${CATEGORY_URL}/${id}`);

clientApi.getBlogPosts = () => axios.get(BLOG_POST_URL);

export default clientApi;
