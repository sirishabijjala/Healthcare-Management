// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const oracledb = require('oracledb');

// Create Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Oracle DB Connection Pool setup
const initializeOracleDB = async () => {
  try {
    await oracledb.createPool({
      user: 'system',
      password: 'manager',
      connectString: 'localhost:/orcl',
      poolAlias: 'mypool',
      poolMin: 2,
      poolMax: 10,
      queueTimeout: 1200000,
    });
    console.log('Oracle DB Pool Created');
  } catch (error) {
    console.error('Error creating Oracle DB Pool: ', error);
  }
};

// Initialize Oracle DB connection pool
initializeOracleDB();

// CRUD operations for the 'presps' table

// Get all prescriptions
app.get('/api/presps', async (req, res) => {
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM presps');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific prescription by ID
app.get('/api/presps/:presID', async (req, res) => {
  const prescriptionId = req.params.presID;
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM presps WHERE presID = :presID', [prescriptionId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Prescription not found' });
    }
  } catch (error) {
    console.error('Error fetching prescription by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new prescription
app.post('/api/presps', async (req, res) => {
  const { presID, ptsid, stffid, presdate, medname, dosage, freq, dur, instrctions } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('INSERT INTO presps (presID, ptsid, stffid, presdate, medname, dosage, freq, dur, instrctions) VALUES (:presID, :ptsid, :stffid, :presdate, :medname, :dosage, :freq, :dur, :instrctions)', [presID, ptsid, stffid, presdate, medname, dosage, freq, dur, instrctions]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Prescription added successfully' });
  } catch (error) {
    console.error('Error adding prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific prescription by ID
app.put('/api/presps/:presID', async (req, res) => {
  const prescriptionId = req.params.presID;
  const { presID, ptsid, stffid, presdate, medname, dosage, freq, dur, instrctions } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('UPDATE presps SET presID = :presID, ptsid = :ptsid, stffid = :stffid, presdate = :presdate, medname = :medname, dosage = :dosage, freq = :freq, dur = :dur, instrctions = :instrctions WHERE presID = :presID', [presID, ptsid, stffid, presdate, medname, dosage, freq, dur, instrctions, prescriptionId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Prescription updated successfully' });
  } catch (error) {
    console.error('Error updating prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific prescription by ID
app.delete('/api/presps/:presID', async (req, res) => {
  const prescriptionId = req.params.presID;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('DELETE FROM presps WHERE presID = :presID', [prescriptionId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Prescription deleted successfully' });
  } catch (error) {
    console.error('Error deleting prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port`);
});