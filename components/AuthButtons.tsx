"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("keycloak")}>Login with Keycloak</button>
      )}
    </div>
  );
}
