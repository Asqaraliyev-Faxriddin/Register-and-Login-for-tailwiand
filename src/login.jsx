import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Bosildi");

    try {
      const res = await axios.post("http://13.60.206.9:3000/auth/login", {
        phone,
        password,
      });

      if (res.data?.AccessToken) {
        setToken(res.data.AccessToken);
        window.location.href = "/my/profile";
      } else {
        alert("Token topilmadi!");
      }

    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert("Notog'ri kiritdiz");
        } else if (err.response.status === 500) {
          alert("Xatolik bor");
        } else {
          alert(err.response.data?.message || "Xatolik yuz berdi");
        }
      } else {
        alert(err.message);
      }
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Kirish</h1>
        <p className="mt-1 text-sm text-gray-500">Akkountingizga kiring.</p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-phone" className="block text-sm font-medium text-gray-700">
              Telefon raqami
            </label>
            <input
              id="login-phone"
              type="text"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+998901234567"
              autoComplete="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
              Parol
            </label>
            <input
              id="login-password"
              type="password"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="12345678"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700">
            Kirish
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between text-sm">
          <a href="/" className="text-blue-600 hover:underline">Parolni unutdingizmi?</a>
          <a href="/register" className="text-gray-600 hover:underline">Ro‘yxatdan o‘tish</a>
        </div>
      </section>
    </main>
  );
}

export default Login;
