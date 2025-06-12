const BASE_URL = "https://dummyjson.com/users";

export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}?limit=${100}`);
  const data = await res.json();
  return data.users;
}

export async function searchUsers(params) {
  const res = await fetch(`${BASE_URL}/search?q=${params}&limit=${100}`);
  const data = await res.json();
  return data.users;
}
