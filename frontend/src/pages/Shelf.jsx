import React from "react";

function Shelf() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Shelf Management</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Shelf Name</th>
            <th>Store</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>A1</td>
            <td>Big Bazaar</td>
            <td>
              <button>Edit</button>{" "}
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>B2</td>
            <td>D-Mart</td>
            <td>
              <button>Edit</button>{" "}
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px", textAlign: "center" }}>
        Assign Shelf
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "auto",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Shelf Name"
          style={{ padding: "10px" }}
        />

        <input
          type="text"
          placeholder="Store Name"
          style={{ padding: "10px" }}
        />

        <button
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Assign Shelf
        </button>
      </div>
    </div>
  );
}

export default Shelf;