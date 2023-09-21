import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href='/react-dashboard'>React Dashboard(react router)</Link>
                <Link href="/users">Users List</Link>
                <Link href="/users/create">Create User</Link>
            </nav>
        </div>
    );
}

export default About;
