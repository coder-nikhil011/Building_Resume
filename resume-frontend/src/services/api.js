const BASE_URL = "http://127.0.0.1:5000/api";

const getToken = () => {
  try {
    const user = JSON.parse(localStorage.getItem("resumecraft_user"));
    return user?.token || null;
  } catch {
    return null;
  }
};

const headers = (auth = false) => {
  const h = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) h["Authorization"] = `Bearer ${token}`;
  }
  return h;
};

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

// ─── Auth ────────────────────────────────────────────────
export const authAPI = {
  register: (name, email, password) =>
    fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ name, email, password }),
    }).then(handleResponse),

  login: (email, password) =>
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ email, password }),
    }).then(handleResponse),

  me: () =>
    fetch(`${BASE_URL}/auth/me`, {
      headers: headers(true),
    }).then(handleResponse),
};

// ─── Resume ──────────────────────────────────────────────
export const resumeAPI = {
  getAll: () =>
    fetch(`${BASE_URL}/resumes`, {
      headers: headers(true),
    }).then(handleResponse),

  getById: (id) =>
    fetch(`${BASE_URL}/resumes/${id}`, {
      headers: headers(true),
    }).then(handleResponse),

  create: (resumeData) =>
    fetch(`${BASE_URL}/resumes`, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify(resumeData),
    }).then(handleResponse),

  update: (id, resumeData) =>
    fetch(`${BASE_URL}/resumes/${id}`, {
      method: "PUT",
      headers: headers(true),
      body: JSON.stringify(resumeData),
    }).then(handleResponse),

  delete: (id) =>
    fetch(`${BASE_URL}/resumes/${id}`, {
      method: "DELETE",
      headers: headers(true),
    }).then(handleResponse),
};

// ─── AI / Analyze ─────────────────────────────────────────
export const aiAPI = {
  analyze: (formData) =>
    fetch(`${BASE_URL}/ai/analyze`, {
      method: "POST",
      headers: { Authorization: `Bearer ${getToken()}` },
      body: formData,
    }).then(handleResponse),

  review: (resumeData) =>
    fetch(`${BASE_URL}/ai/review`, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify(resumeData),
    }).then(handleResponse),
};