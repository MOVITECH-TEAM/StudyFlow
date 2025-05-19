import { useEffect } from "react";
import { auth } from "~/lib/firebase.client";

export default function TestAuth() {
  useEffect(() => {
    console.log("Firebase Auth loaded:", auth);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Testar Firebase</h1>
      <p>Abre o console do browser e confirma se o `auth` aparece sem erro.</p>
    </div>
  );
}
