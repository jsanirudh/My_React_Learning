import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/"> HomePage</Link>
      <Link to="/products">Products List</Link>
      <Link to="/dashboard"> DashBoard</Link>
    </div>
  );
}
