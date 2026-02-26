const express = require('express');
const router = express.Router();

let users = []; // Προσωρινή αποθήκευση χρηστών (in-memory)

// POST /users/register
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Λείπουν πεδία (username, email, password)." });
  }

  // Έλεγχος αν υπάρχει ήδη
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Ο χρήστης υπάρχει ήδη!" });
  }

  const newUser = { username, email, password };
  users.push(newUser);

  return res.status(201).json({ message: "Επιτυχής εγγραφή!", user: newUser });
});

module.exports = router;