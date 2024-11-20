import React from 'react';

export default function BookmarkList({ bookmarks }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Bookmarks</h2>
      <div className="bg-white rounded-lg shadow p-4">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="mb-2 last:mb-0">
            <a href={bookmark} className="text-blue-500 hover:underline">{bookmark}</a>
          </div>
        ))}
      </div>
    </div>
  );
}