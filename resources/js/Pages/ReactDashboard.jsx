import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Inertia } from '@inertiajs/inertia';
import { Link as InertiaLink } from '@inertiajs/react';


function ReactDashboard() {
  return (
    <Router>
      <div>
        <h1>Dashboard Using React Router</h1>
        <nav>
          <ul>
            <li><Link to="/react-dashboard">Index</Link></li>
            <li><Link to="/react-dashboard/overview">Overview</Link></li>
            <li><Link to="/react-dashboard/settings">Settings</Link></li>
          </ul>
          <InertiaLink
              href='/'
              as="button"
              type="button"                    
          >Back to Home</InertiaLink>
        </nav>

        <Routes>
          <Route path="/react-dashboard" element={<Index />} />
          <Route path="/react-dashboard/overview" element={<Overview />} />
          <Route path="/react-dashboard/settings" element={<Settings />} />
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

function Index() {
  return <h2>Index</h2>;
}

export default ReactDashboard;
