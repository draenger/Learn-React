const API_URL = "http://localhost:3000";

export async function fetchMeals() {
  const response = await fetch(`${API_URL}/meals`);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch food.");
  }

  return responseData;
}
