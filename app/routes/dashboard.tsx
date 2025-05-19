import { useEffect, useState } from "react";
import { auth } from "~/lib/firebase.client";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "@remix-run/react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirecciona se não estiver autenticado
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <p className="text-center mt-10">A carregar...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard 🎉</h1>
      <p>Aqui vais ter uma visão geral das tuas aulas, alunos e estatísticas.</p>
    </div>
  );
}
