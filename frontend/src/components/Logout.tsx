// frontend/src/components/Logout.tsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext?.logout();
    alert("Logged out successfully!");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
