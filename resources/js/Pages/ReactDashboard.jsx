import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function ReactDashboard() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/dashboard/overview">Overview</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

function Overview() {
    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch('/get-data')
            .then(response => response.json())
            .then(json => {
                setData(json.data);
            });
    };
  return (
    <>
        <h2>Overview</h2>
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {data && <div>{data}</div>}
        </div>
    </>
  );
}

function Settings() {
  return <h2>Settings</h2>;
}

export default ReactDashboard;
