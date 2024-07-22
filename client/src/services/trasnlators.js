import axios from "axios";

const URL = "http://localhost:3310/api/translators";

export const getTranslators = async () => {
  const translators = await axios.get(URL);
  return translators.data;
};

export const getTranslator = async (id) => {
  const translators = await axios.get(URL, "/", id);
  return translators.data;
};
