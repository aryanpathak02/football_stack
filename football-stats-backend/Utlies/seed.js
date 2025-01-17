const mongoose = require('mongoose');
const MatchStats = require('../models/MatchStats.model.js');

main().then(()=>console.log('Connected to DB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/football');
}


const seedData = async () => {
 await MatchStats.deleteMany();
  await MatchStats.create({
    matchId: '1',
    date: '03-05-2023',
    teamA: {
      goals: '1',
      possession: '50%',
      passes: '50',
      shots: '5',
      shotsOnTarget: '3',
      corners: '6',
    },
    teamB: {
      goals: '1',
      possession: '50%',
      passes: '50',
      shots: '5',
      shotsOnTarget: '3',
      corners: '6',
    },
  });
  console.log('Data is added to db')
  mongoose.connection.close();
};

seedData();
