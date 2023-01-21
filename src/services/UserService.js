export async function getAllUsers() {
  try {
    const response = await fetch(`https://localhost:7028/api/Names`);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createUser(data) {
  const response = await fetch(`https://localhost:7028/api/Names`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function getAllExpenses() {
  try {
    const response = await fetch(`https://localhost:7028/api/Expense`);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createExpense(data) {
  const response = await fetch(`https://localhost:7028/api/Expense`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteUser(data) {
  const response = await fetch(`https://localhost:7028/api/Names/${data}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
export async function deleteExpense(data) {
  const response = await fetch(`https://localhost:7028/api/Expense/${data}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
