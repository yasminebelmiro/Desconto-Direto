import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  roleRequired?: "consumer" | "merchant";
   
}

export default function ProtectedRoutes({
  roleRequired,
}: ProtectedRoutesProps) {
  const user = localStorage.getItem("token");
  const role = localStorage.getItem("role") as "consumer" | "merchant" | null;

  if (!user) return <Navigate to={"/"} replace />;

  if (roleRequired && role !== roleRequired)
    return <Navigate to={"/"} replace />;

  return <Outlet />;
}
