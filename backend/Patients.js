// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const oracledb = require('oracledb');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

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

// CRUD operations for the 'donors' table

// Get all donors
app.get('/api/Patients', async (req, res) => {
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM patient');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching Patients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific donor by ID
app.get('/api/patient/:pid', async (req, res) => {
  const PatientId = req.params.pid;
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM patient WHERE pid = :pid', [PatientId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error('Error fetching Patients by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new donor
app.post('/api/patient', async (req, res) => {
  const { pid, fn, ln, age, gen, adds, pn, email, insucomp, policyNum, contname, contpno} = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('INSERT INTO patient (pid, fn, ln, age, gen, adds, pn, email, insucomp, policyNum, contname, contpno) VALUES (:pid, :fn, :ln, :age,:gen, :adds,:pn,:email,:insucomp,: policyNum,:contname,:contpno)', [pid, fn, ln, age, gen, adds, pn, email, insucomp, policyNum, contname, contpno]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Patient added successfully' });
  } catch (error) {
    console.error('Error adding donor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific donor by ID
app.put('/api/patient/:pid', async (req, res) => {
  const PatientId = req.params.pid;
  const { pid, fn, ln, age, gen, adds, pn, email, insucomp, policyNum, contname, contpno } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('UPDATE patient SET pid = :pid, fn = :fn, ln =:ln,age =:age,gen =:gen,adds=:adds,pn=:pn, email =:email, insucomp =:insucomp , policyNum =: policyNum,contname =:contname, contpno =:contpno  WHERE pid = :pid', [pid, fn, ln, age, gen, adds, pn, email, insucomp, policyNum, contname, contpno, PatientId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Patient updated successfully' });
  } catch (error) {
    console.error('Error updating Patient:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific donor by ID
app.delete('/api/patient/:pid', async (req, res) => {
  const PatientId = req.params.PatientID;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('DELETE FROM patient WHERE pid = :pid', [PatientId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error('Error deleting Patient:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
