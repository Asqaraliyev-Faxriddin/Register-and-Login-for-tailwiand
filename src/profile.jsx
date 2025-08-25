import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  let [user, setUser] = useState(null); 
  let token = localStorage.getItem("token"); 


    useEffect(() => {
      if (!token) {
      window.location.href = "/login";
      return;
    }


    axios.get("http://13.60.206.9:3000/my/profile", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      if (res.data?.succase) {
        setUser(res.data.data);
      } else {
        alert(res.data.message || "Noma'lum xatolik");
        window.location.href = "/login";
      }
    })
    .catch(err => {
      console.error(err);
      window.location.href = "/login";
    });
  }, [token]);

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-lg text-gray-600">Yuklanmoqda...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Profil ma'lumotlari</h1>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold text-green-600">Xush kelibsiz!</h2>
          <div className="border rounded-xl p-4 bg-gray-50 space-y-1">
            <p><span className="font-medium">Ism:</span> {user.fullName}</p>
            <p><span className="font-medium">Telefon:</span> {user.phone}</p>
            <p><span className="font-medium">Rol:</span> {user.role}</p>


          </div>
          <button 
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }} 
            className="w-full rounded-xl bg-gray-600 px-4 py-2.5 text-white font-medium hover:bg-gray-700">
            Chiqish
          </button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
