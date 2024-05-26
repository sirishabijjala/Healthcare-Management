const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const oracledb = require('oracledb');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Oracle DB Connection Pool setup
const initializeOracleDB = async () => {
  try {
    await oracledb.createPool({
      user: 'system',
      password: 'manager',
      connectString: 'localhost/orcl', // Correct the connect string
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

// CRUD operations for the 'Appointments' table

// Get all appointments
app.get('/api/apptmt', async (req, res) => {
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM apptmt');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific appointment by ID
app.get('/api/apptmt/:apptid', async (req, res) => {
  const appointmentId = req.params.apptid;
  try {
    const connection = await oracledb.getConnection('mypool');
    const result = await connection.execute('SELECT * FROM apptmt WHERE apptid = :apptid', [appointmentId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    console.error('Error fetching appointment by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new appointment
app.post('/api/apptmt', async (req, res) => {
  const { apptid, ptid, stfid, AppointmentDateTime, AppointmentType, Status } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute(
      `INSERT INTO apptmt (apptid, ptid, stfid, AppointmentDateTime, AppointmentType, Status)
       VALUES (:apptid, :ptid, :stfid, TO_TIMESTAMP(:AppointmentDateTime, 'YYYY-MM-DD"T"HH24:MI'), :AppointmentType, :Status)`,
      [apptid, ptid, stfid, AppointmentDateTime, AppointmentType, Status]
    );
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Appointment added successfully' });
  } catch (error) {
    console.error('Error adding appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific appointment by ID
app.put('/api/apptmt/:apptid', async (req, res) => {
  const appointmentId = req.params.apptid;
  const { apptid, ptid, stfid, AppointmentDateTime, AppointmentType, Status } = req.body;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute(
      `UPDATE apptmt SET apptid = :apptid, ptid = :ptid, stfid = :stfid, AppointmentDateTime = TO_TIMESTAMP(:AppointmentDateTime, 'YYYY-MM-DD"T"HH24:MI'), AppointmentType = :AppointmentType, Status = :Status WHERE apptid = :appointmentId`,
      [apptid, ptid, stfid, AppointmentDateTime, AppointmentType, Status, appointmentId]
    );
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Appointment updated successfully' });
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific appointment by ID
app.delete('/api/apptmt/:apptid', async (req, res) => {
  const appointmentId = req.params.apptid;
  try {
    const connection = await oracledb.getConnection('mypool');
    await connection.execute('DELETE FROM apptmt WHERE apptid = :apptid', [appointmentId]);
    await connection.commit(); // Commit the transaction
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
