import { Link, Outlet } from "react-router-dom";

export default function Dasdboard() {
  return (
    <div>
      <h1> This is dashboard</h1>
      <Link to="profile"> Profile</Link>
      <Link to="Settings"> Settings</Link>
      <Outlet />
    </div>
  );
}
