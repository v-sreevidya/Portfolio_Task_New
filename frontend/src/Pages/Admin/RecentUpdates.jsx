// RecentUpdates.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const RecentUpdates = () => {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        // Fetch recent updates from the backend API
        axios.get('http://localhost:8080/api/updates/recent')
            .then(response => setUpdates(response.data))
            .catch(error => console.error("Error fetching updates:", error));
    }, []);

    return (
        <div className="activity-feed">
            <h3>Recent Activity</h3>
            {updates.length === 0 ? (
                <p>No recent updates.</p>
            ) : (
                <ul>
                    {updates.map((update, index) => (
                        <li key={index}>
                            <strong>{update.title}</strong> - {update.description} (Posted at: {update.timestamp})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecentUpdates;
