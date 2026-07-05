import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <h2>Dashboard</h2>

          <p>Welcome Admin</p>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "lightblue",
                padding: "20px",
                borderRadius: "10px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <h3>Stores</h3>
              <h2>15</h2>
            </div>

            <div
              style={{
                background: "lightgreen",
                padding: "20px",
                borderRadius: "10px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <h3>Shelves</h3>
              <h2>50</h2>
            </div>

            <div
              style={{
                background: "orange",
                padding: "20px",
                borderRadius: "10px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <h3>Cameras</h3>
              <h2>25</h2>
            </div>
          </div>

          {/* Graph Section */}
          <h2 style={{ marginTop: "40px" }}>Graphs</h2>

          <div
            style={{
              width: "700px",
              height: "300px",
              border: "2px solid gray",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            Graph will appear here
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;