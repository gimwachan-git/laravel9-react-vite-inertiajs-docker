import React from 'react';
import { Link } from '@inertiajs/react';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href='/react-dashboard'>React Dashboard(react router)</Link>
                <Link href="/users">Users List</Link>
                <Link href="/users/create">Create User</Link>
            </nav>
        </div>
    );
}

export default Home;
