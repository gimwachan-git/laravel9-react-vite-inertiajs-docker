import React from 'react';
import { Link } from '@inertiajs/react';

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">about</Link>
                <Link href='/react-dashboard'>React Dashboard(react router)</Link>
                <Link href="/users">Users List</Link>
                <Link href="/users/create">Create User</Link>
            </nav>
        </div>
    );
}

export default Contact;
