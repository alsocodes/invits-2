import React from 'react';
import Dashboard from '../../components/layout/Dashboard';

const index = () => {
  return (
    <Dashboard data={{ title: 'Dashboard Invits', menuActive: 'dashboard' }}>
      <div className="borderx border-red-500 w-full h-full py-4 px-6 bg-white">
        <div className="mb-4 flex justify-between items-start">
          <h2 className="text-2xl">Dashboard</h2>
        </div>
      </div>
    </Dashboard>
  );
};

export default index;
