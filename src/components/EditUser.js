import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch user details
  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data);
      } catch (err) {
        setError("Failed to fetch user details.");
      }
    };

    fetchUser();
  }, [id, token, navigate]);

  // Update user details
  const handleUpdate = async () => {
    setError("");
    setLoading(true);

    try {
      await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });

      alert("User updated successfully!");
      navigate("/users");
    } catch (err) {
      setError("Error updating user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component={Paper}
      sx={{ p: 4, mt: 4, textAlign: "center", maxWidth: 500 }}
    >
      <Typography variant="h5" gutterBottom>
        Edit User
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        label="First Name"
        value={user.first_name}
        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Last Name"
        value={user.last_name}
        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        fullWidth
        disabled={loading}
      >
        {loading ? "Updating..." : "Update"}
      </Button>
    </Container>
  );
};

export default EditUser;
