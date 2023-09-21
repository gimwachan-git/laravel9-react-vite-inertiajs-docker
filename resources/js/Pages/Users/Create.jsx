import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert('A name was submitted: ' + name + ' | ' + email);
        Inertia.post('/users', { name, email, password });
    };

    const handleClick = (e) => {
        e.preventDefault();
        Inertia.get('/');
    };
    return (
        <div>
            <h1>Add a new user</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <hr />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <hr />
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <hr />
                    <label htmlFor="name">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="password"
                    />
                    <hr />
                </div>
                <br />
                <div>
                    <button type="submit">Create</button> <button onClick={handleClick}>Back</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
