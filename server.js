const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
app.use(cors()); 
const PORT = 3000;
app.use(express.json()); // Make Express parse JSON request bodies

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Hello from Expresssss!');
});
app.get('/express', (req, res) => {
  res.send('Expresssss!');
});
app.post('/login', async (req, res) => {
  const { email, password} = req.body;
  console.log(email)
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    if (user.password == password) {
      console.log('password correct')

    }else{
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    //const isMatch = await bcrypt.compare(password, user.password);

    //if (!isMatch) {
     // return res.status(401).json({ error: 'Invalid email or password' });
   // }

    res.status(200).json({ message: 'Login successful', user_id: user.user_id });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
