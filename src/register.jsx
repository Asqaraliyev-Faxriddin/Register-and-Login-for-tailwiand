import axios from "axios";
import { useEffect, useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;

    // Registration data to be stored temporarily (you might need to save in localStorage)
    const userData = { fullName, password, phone };
    localStorage.setItem("registerData", JSON.stringify(userData));

    const send = { type: "register", phone };
    axios.post("http://13.60.206.9:3000/verification/send", send)
      .then(() => window.location.href = "/code")
      .catch(err => alert(err.response?.data?.message || "Xatolik yuz berdi"));
  }, [submit]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-9">Ro‘yxatdan o‘tish</h1>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
            <input
              id="phone"
              type="tel"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+998901234567"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Parol</label>
            <input
              id="password"
              type="password"
              required
              minLength="6"
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="12345678"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Fullname</label>
            <input
              id="fullname"
              type="text"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Asqaraliyev Faxriddin"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Allaqachon akkount bormi?
          <a href="/login" className="text-blue-600 hover:underline ml-4">Kirish</a>
        </p>
      </section>
    </main>
  );
}

export default Register;
