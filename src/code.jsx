import axios from "axios";
import { useState } from "react";

function Code() {
  let [code, setCode] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("registerData") || "{}");

    if (!userData.phone || !userData.password || !userData.fullName) {
      alert("ma'lumotlari topilmadi");
      return;
    }

    try {
        
      await axios.post("http://13.60.206.9:3000/verification/verify", {
        type:"register",
        phone: userData.phone,
        otp:code,
      });   
      await axios.post("http://13.60.206.9:3000/auth/register", {
        phone: userData.phone,
        otp:code,
        fullName: userData.fullName,
        password: userData.password
      });
      alert("Muvaffaqiyatli ro'yxatdan o'tildi");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Kod noto'g'ri yoki serverda xatolik");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Tasdiqlash kodi</h1>
        <p className="text-sm text-gray-500 mb-4">
          Telefon raqamingizga yuborilgan kodni kiriting
        </p>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="6"
            required
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg tracking-widest"
            placeholder="123456"
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700"
          >
            Tasdiqlash
          </button>
        </form>
      </section>
    </main>
  );
}

export default Code;
