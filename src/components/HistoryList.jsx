import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function HistoryList({ history }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">History</h2>
      <div className="bg-white rounded-lg shadow p-4">
        {history.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mb-2 last:mb-0">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">
              {new Date(item.timestamp).toLocaleString()}
            </span>
            <a href={item.url} className="text-blue-500 hover:underline">{item.url}</a>
          </div>
        ))}
      </div>
    </div>
  );
}