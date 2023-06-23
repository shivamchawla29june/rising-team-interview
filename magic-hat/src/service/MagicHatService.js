export const getQuestions = async () => {
  const fetchedData = await fetch("http://localhost:5000/questions");
  const fetchedJson = await fetchedData.json();

  return fetchedJson;
};
