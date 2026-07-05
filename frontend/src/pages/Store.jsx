import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Store() {
  const [stores, setStores] = useState([]);

  const getStores = async () => {
    try {
      const response = await API.get("/stores");
      setStores(response.data);
    } catch (error) {
      console.log("Error fetching stores:", error);
    }
  };

  useEffect(() => {
    getStores();
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            padding: "20px",
            width: "100%",
            background: "#1f1f1f",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Store Management</h2>

          <table
            border="1"
            cellPadding="10"
            style={{
              width: "80%",
              margin: "auto",
              borderCollapse: "collapse",
              textAlign: "center",
              color: "white",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Store Name</th>
                <th>Location</th>
                <th>Manager</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {stores.map((store) => (
                <tr key={store.id}>
                  <td>{store.id}</td>
                  <td>{store.name}</td>
                  <td>{store.location}</td>
                  <td>{store.manager}</td>

                  <td>
                    <button>Edit</button>{" "}
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <br />
          <br />

          <h2 style={{ textAlign: "center" }}>Add Store</h2>

          <div
            style={{
              width: "300px",
              margin: "auto",
            }}
          >
            <input
              type="text"
              placeholder="Store Name"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
            />

            <input
              type="text"
              placeholder="Location"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
            />

            <input
              type="text"
              placeholder="Manager"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;