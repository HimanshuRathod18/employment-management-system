const BASE_URL = "https://dummyjson.com/users";

// export async function fetchUsers({ limit = 15, skip = 0 } = {}) {
//   const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
//   const data = await res.json();
//   return data.users;
// }

export async function fetchUsers() {
  console.log("::: called fetch Users");
  const res = await fetch(BASE_URL);
  const data = await res.json();
  console.log("::: fetch users", data);
  return data.users;
}

export async function searchUsers(params) {
  console.log("::: called search Users");

  console.log("::: params", params);
  const res = await fetch(`${BASE_URL}/search?q=${params}`);
  const data = await res.json();
  console.log("::: search users", data);
  return data.users;
}
