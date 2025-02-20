// write the component code here
import React from "react";

function Usercard() {
  // Static user details
  const profilePhoto = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"; // Dummy profile picture
  const name = "John Doe";
  const email = "JohnDoe@example.com";
  const phone = "+1 (234) 567-8901";
  const address = "123 Main St, New York, NY 10001";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}> {email}</p>
      <p style={styles.info}> {phone}</p>
      <p style={styles.info}> {address}</p>
    </div>
  );
}

// Inline styles for the component
const styles = {
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    margin: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  info: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Usercard;
