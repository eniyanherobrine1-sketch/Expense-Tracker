let users = JSON.parse(localStorage.getItem("users")) || {};
let currentUser = null;

export function signup(email, password) {
  if(users[email]) return false;
  users[email] = { password };
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

export function login(email, password) {
  if(users[email] && users[email].password === password) {
    currentUser = email;
    return true;
  }
  return false;
}

export function getCurrentUser() {
  return currentUser;
}