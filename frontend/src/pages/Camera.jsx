import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Camera() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#1f1f1f",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Camera Management</h1>

          <table
            border="1"
            cellPadding="10"
            style={{
              width: "80%",
              margin: "20px auto",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Camera Name</th>
                <th>Shelf</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Camera A</td>
                <td>A1</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Camera B</td>
                <td>B2</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ textAlign: "center" }}>Assign Camera</h2>

          <div
            style={{
              width: "300px",
              margin: "auto",
            }}
          >
            <input
              type="text"
              placeholder="Camera Name"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
              type="text"
              placeholder="Shelf Name"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "green",
                color: "white",
                border: "none",
              }}
            >
              Assign Camera
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Camera;