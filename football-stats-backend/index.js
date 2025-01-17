const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MatchStats = require('./models/MatchStats.model.js');

const app = express();
app.use(cors());
app.use(express.json());

main().then(()=>console.log('Connected to DB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/football');
}

app.get('/getMatchStats', async (req, res) => {
  const { matchId } = req.query;

  try {
    const match = await MatchStats.findById(matchId);
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
