const mongoose = require('mongoose');

const teamStatsSchema = new mongoose.Schema({
  goals: String,
  possession: String,
  passes: String,
  shots: String,
  shotsOnTarget: String,
  corners: String,
});

const matchStatsSchema = new mongoose.Schema({
  matchId: String,
  date: String,
  teamA: teamStatsSchema,
  teamB: teamStatsSchema,
});

module.exports = mongoose.model('MatchStats', matchStatsSchema);
