const API_URL = "http://localhost:3000";

export async function fetchMeals() {
  const response = await fetch(`${API_URL}/meals`);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch food.");
  }

  return responseData;
}

export async function sendOrder(order) {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order }),
  });

  if (!response.ok) {
    throw new Error("Failed to send order.");
  }

  console.log(response);
}
