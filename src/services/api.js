import axios from "axios";
import { seed } from "./categorySeed";

// * Smaller app so I didn't separate BLOG / CATEGORY api nor abstracted ajax client into a class
const BASE_URL = "https://frontend-api-test-nultien.azurewebsites.net/api";
const BLOG_POST_URL = `${BASE_URL}/BlogPosts`;
const CATEGORY_URL = `${BASE_URL}/Category`;

const clientApi = {};

// * Categories
clientApi.getCategories = () => axios.get(CATEGORY_URL);
clientApi.postCategory = (name) => axios.post(CATEGORY_URL, { name });
clientApi.seedCategories = () => {
  const storyPromises = seed.map(({ name }) => clientApi.postCategory(name));
  return Promise.all(storyPromises);
};
clientApi.deleteCategory = (id) => axios.delete(`${CATEGORY_URL}/${id}`);

// * Blog
clientApi.getBlogPosts = () => axios.get(BLOG_POST_URL);
clientApi.addBlogPost = (data) => axios.post(BLOG_POST_URL, data);
clientApi.editBlogPost = (id, data) => axios.put(`${BLOG_POST_URL}/${id}`, data);
clientApi.deleteBlogPost = (id) => axios.delete(`${BLOG_POST_URL}/${id}`);
clientApi.searchForBlogPost = (term) => axios.get(`${BLOG_POST_URL}/Search/?term=${term}`);

export { clientApi };
