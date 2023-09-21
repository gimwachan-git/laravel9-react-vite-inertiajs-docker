import React, { useState, Suspense } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { func } from 'prop-types';

function Dashboard(props) {
    const { component } = props;

    // Dynamically import the component based on the prop
    const ComponentToRender = React.lazy(() => import(`./${component}`));  

  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/dashboard/">DashboardIndex</Link></li>
          <li><Link href="/dashboard/overview">Overview</Link></li>
          <li><Link href="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentToRender />      
      </Suspense>
    </div>
  );
}

function DashboardIndex(props) {
    return (
        <>
            <h2>Index</h2>
            <p>content</p>
        </>
    );
}

function Overview(props) {
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
  return (
    <>
        <h2>Settings</h2>
        <p>content</p>
    </>
  );
}

export default Dashboard;
