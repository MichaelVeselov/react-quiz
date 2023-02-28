const API_URL = 'https://the-trivia-api.com/api/questions?';

const getQuestions = async (limit = 10) => {
  const response = await fetch(`${API_URL}limit=${limit}&difficulty=easy`);
  return await response.json();
};

export default getQuestions;
