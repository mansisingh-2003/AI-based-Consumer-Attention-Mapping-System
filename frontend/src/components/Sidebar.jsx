import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        background: "#ddd",
        padding: "20px",
      }}
    >
      <p><Link to="/dashboard">Dashboard</Link></p>

      <p><Link to="/stores">Stores</Link></p>

      <p><Link to="/shelves">Shelves</Link></p>

      <p><Link to="/cameras">Cameras</Link></p>

      <p><Link to="/users">Users</Link></p>
    </div>
  );
}

export default Sidebar;