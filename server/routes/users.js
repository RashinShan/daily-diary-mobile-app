var express = require('express');
var router = express.Router();
const pool = require('../db/pool')


router.post('/', async (req, res) => {
  try{
    const { name, email, password } = req.body;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    const [result] = await pool.execute(query, [name, email, password]);

    return res.status(201).json({
      message: 'Data inserted successfully',
      insertId: result.insertId,
    });
  }
  catch(err){
    return res.status(500).json({ error: 'Internal server error' });
  }
});



router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await pool.execute(query, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const user = rows[0];
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    return res.status(200).json({
      message: 'Login successful',
      userId: user.id,
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;
