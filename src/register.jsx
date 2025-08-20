

function Register() {

  return (
    <>
    
    <main class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <section class="w-full max-w-md bg-white rounded-2xl shadow p-6">
    <h1 class="text-2xl font-semibold text-gray-900 mb-9">Ro‘yxatdan o‘tish</h1>


 


    <form class="grid gap-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input id="username" name="username" type="text" required   class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"placeholder="username123" autocomplete="username"/>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Parol</label>
        <input id="password" name="password" type="password" required minlength="6"class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"placeholder="12345678" />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Telefon</label>
        <input id="phone" name="phone" type="tel" inputmode="tel" required   class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"placeholder="+998901234567" />
      </div>

      <div>
        <label for="age" class="block text-sm font-medium text-gray-700">Yosh</label>
        <input id="age" name="age" type="number" min="1" max="120" required class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"placeholder="18" />
      </div>

      <button type="submit" class="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700">Ro‘yxatdan o‘tish
      </button>
    </form>

    <p class="mt-4 text-sm text-gray-600"> Allaqachon akkount bormi?<a href="/login" class="text-blue-600 hover:underline ml-4">Kirish</a>
    </p>


    <div class="mt-6 grid gap-3">
      <button type="button"
        class="w-full border rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-5 h-5">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 31.9 29.3 35 24 35 16.8 35 11 29.2 11 22s5.8-13 13-13c3.3 0 6.3 1.2 8.6 3.2l5.7-5.7C35.1 3.6 29.8 1.5 24 1.5 11.9 1.5 2 11.4 2 23.5S11.9 45.5 24 45.5 46 35.6 46 23.5c0-1-.1-2-.4-3z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.3 0 6.3 1.2 8.6 3.2l5.7-5.7C35.1 6.6 29.8 4.5 24 4.5 16.2 4.5 9.5 8.9 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 41.5c5.2 0 10-2 13.5-5.2l-6.2-5.1C29.1 32.7 26.7 33.5 24 33.5c-5.3 0-9.6-3.1-11.3-7.5l-6.6 5.1C9.3 37.1 16.1 41.5 24 41.5z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3.2 5.2-6 6.7l.1.1 6.2 5.1c-.4.3 7.3-4.3 7.3-16.4 0-1-.1-2-.3-3z"/>
        </svg>
      </button>
      <button type="button" class="w-full border rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.6-1.6-1.3-2-1.3-2-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0C16.4 3.9 17.4 4.2 17.4 4.2c.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/>
        </svg>
        GitHub orqali
      </button>
    </div>
  </section>
</main>


    </>
  )
}

export default Register
