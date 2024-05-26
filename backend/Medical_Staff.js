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

// CRUD operations for the 'donors' table

// Get all donors
app.get('/api/Medical_Staff', async (req, res) => {
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM Medical_Staff');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching Staff:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific donor by ID
app.get('/api/Medical_Staff/:StaffID', async (req, res) => {
  const  MedicalId = req.params.StaffID;
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM Medical_Staff WHERE StaffID = :StaffID', [MedicalId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Staff not found' });
    }
  } catch (error) {
    console.error('Error fetching Staff by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new donor
app.post('/api/Medical_Staff', async (req, res) => {
  const { StaffID, FirstName, LastName, Age, Gender, Address, PhoneNumber, EmailAddress, Specialty} = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('INSERT INTO Medical_Staff (StaffID, FirstName, LastName, Age, Gender, Address, PhoneNumber, EmailAddress, Specialty) VALUES (:StaffID, :FirstName, :LastName, :Age,:Gender, :Address,:PhoneNumber,:EmailAddress,:Specialty)', [ StaffID, FirstName, LastName, Age, Gender, Address, PhoneNumber, EmailAddress, Specialty]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Staff added successfully' });
  } catch (error) {
    console.error('Error adding Staff:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific donor by ID
app.put('/api/Medical_Staff/:StaffID', async (req, res) => {
  const MedicalId = req.params.StaffID;
  const { StaffID, FirstName, LastName, Age, Gender, Address, PhoneNumber, EmailAddress, Specialty } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('UPDATE Medical_Staff SET StaffID = :StaffID, FirstName = :FirstName, LastName =:LastName,Age =:Age,Gender =:Gender,Address=:Address,PhoneNumber=:PhoneNumber, EmailAddress =:EmailAddress, Specialty =:Specialty  WHERE StaffID = :StaffID', [ StaffID, FirstName, LastName, Age, Gender, Address, PhoneNumber, EmailAddress, Specialty,MedicalId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Staff updated successfully' });
  } catch (error) {
    console.error('Error updating Staff:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific donor by ID
app.delete('/api/Medical_Staff/:StaffID', async (req, res) => {
  const MedicalId = req.params.StaffID;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('DELETE FROM Medical_Staff WHERE StaffID = :StaffID', [MedicalId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Staff deleted successfully' });
  } catch (error) {
    console.error('Error deleting Staff:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
