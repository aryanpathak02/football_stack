import React, { useState } from 'react';

const MatchStats = () => {
  const [matchId, setMatchId] = useState('678a03bfa412374a0ea11a3d');
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    try {
      const response = await fetch(`http://localhost:5000/getMatchStats?matchId=${matchId}`);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className='w-full md:w-1/2 m-auto p-4'>
      <h1 className='text-3xl font-semibold pb-6 text-center'>Football Match Stats</h1>
      <input
        type="text"
        placeholder="Enter Match ID"
        value={matchId}
        className='w-3/4 p-1 rounded-l-md'
        onChange={(e) => setMatchId(e.target.value)}
      />
      <button className='bg-blue-500 p-1 rounded-r-lg' onClick={fetchStats}>Get Stats</button>
      {stats && (
       <div className="flex justify-center items-center my-6">
       <table border="1" className="w-3/4 table-auto border-collapse border border-gray-300 text-center">
         <thead>
           <tr className="bg-gray-200">
             <th className="border border-gray-400 px-4 py-2">Date</th>
             <th className="border border-gray-400 px-4 py-2">Team 1</th>
             <th className="border border-gray-400 px-4 py-2">Team 2</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td className="border border-gray-400 px-4 py-2">{stats.date}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamA.goals}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamB.goals}</td>
           </tr>
           <tr>
             <td className="border border-gray-400 px-4 py-2">Possession</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamA.possession}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamB.possession}</td>
           </tr>
           <tr>
             <td className="border border-gray-400 px-4 py-2">Passes</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamA.passes}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamB.passes}</td>
           </tr>
           <tr>
             <td className="border border-gray-400 px-4 py-2">Shots</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamA.shots}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamB.shots}</td>
           </tr>
           <tr>
             <td className="border border-gray-400 px-4 py-2">Shots on Target</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamA.shotsOnTarget}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamB.shotsOnTarget}</td>
           </tr>
           <tr>
             <td className="border border-gray-400 px-4 py-2">Corners</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamA.corners}</td>
             <td className="border border-gray-400 px-4 py-2">{stats.teamB.corners}</td>
           </tr>
         </tbody>
       </table>
     </div>
     
      )}
    </div>
  );
};

export default MatchStats;
