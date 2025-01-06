const express = require('express');
const router = express.Router();
const pool = require('../db/pool')


router.post('/', async (req, res, next) => {
  try {
    const { notes, user } = req.body; 

    if (!notes) {
      return res.status(400).json({ error: 'Missing required field: notes' });
    }

    const sql = 'INSERT INTO diary_notes (notes,user) VALUES (?,?)';

    const [result] = await pool.execute(sql, [notes,user]);

    return res.status(201).json({
      message: 'Data inserted successfully',
      insertId: result.insertId,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



router.get('/:email', async (req, res, next) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const sql = 'SELECT * FROM diary_notes WHERE user = ? ORDER BY id DESC';
    const [rows] = await pool.execute(sql, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No diary entries found for this email.' });
    }

    return res.status(200).json({
      total: rows.length,
      data: rows
    });
  } catch (err) {
    console.error('Error fetching diary notes:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});




// DELETE 
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const sql = 'DELETE FROM diary_notes WHERE id = ?';
      const [result] = await pool.execute(sql, [id]);
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Diary entry deleted successfully.' });
      } else {
        res.status(404).json({ error: 'Diary entry not found.' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
});



router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { notes } = req.body;
  
    try {
      const sql = 'UPDATE diary_notes SET notes = ? WHERE id = ?';
      const [result] = await pool.execute(sql, [notes, id]);
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Diary entry updated successfully.' });
      } else {
        res.status(404).json({ error: 'Diary entry not found.' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
});
  
  
module.exports = router;
