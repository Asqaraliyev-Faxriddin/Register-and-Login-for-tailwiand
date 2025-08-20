

function Login() {

    return (
      <>
      
      <main class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <section class="w-full max-w-md bg-white rounded-2xl shadow p-6">
    <h1 class="text-2xl font-semibold text-gray-900">Kirish</h1>
    <p class="mt-1 text-sm text-gray-500">Akkountingizga kiring.</p>

    <form action="/login" method="POST" class="mt-6 grid gap-4">
      <div>
        <label for="login-username" class="block text-sm font-medium text-gray-700">Username</label>
        <input id="login-username" name="username" type="text" required   class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"placeholder="username123" autocomplete="username"/>
      </div>

      <div>
        <label for="login-password" class="block text-sm font-medium text-gray-700">Parol</label>
        <input id="login-password" name="password" type="password" required  class="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"placeholder="12345678"/>
      </div>

      <button type="submit" class="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700"> Kirish
      </button>
    </form>

    <div class="mt-4 flex items-center justify-between text-sm">
      <a href="/" class="text-blue-600 hover:underline">Parolni unutdingizmi?</a>
      <a href="/register" class="text-gray-600 hover:underline">Ro‘yxatdan o‘tish</a>
    </div>
  </section>
</main>

  
  
      </>
    )
  }
  
  export default Login
  