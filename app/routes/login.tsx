import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/lib/firebase.client";
import { useNavigate } from "@remix-run/react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (remember) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciais inválidas ou erro de autenticação.");
    }
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/login.jpg')", // Coloca a imagem em public/images/login-bg.jpg
      }}
    >
      <div className="w-full max-w-md bg-[#161b22]/90 p-8 rounded-lg shadow-2xl">
        {/* Logotipo + nome */}
        <div className="flex justify-center items-center mb-6">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-white"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="StudyFlow Logo"
              className="w-8 h-8 mr-2"
            />
            StudyFlow
          </a>
        </div>

        <h1 className="text-xl font-bold text-white mb-6 text-center">
          Sign in to your account
        </h1>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full p-2.5 rounded-md bg-[#0d1117] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-2.5 rounded-md bg-[#0d1117] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-400">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 mr-2 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-md shadow-sm transition"
          >
            Log in to your account
          </button>

          <p className="text-sm font-light text-gray-400 text-center mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
