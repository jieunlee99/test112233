'use client';

import {useState} from "react";

export default function Page() {
    const [result, setResult] = useState();
    console.log('fff', result);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                fetch(`http://localhost:3000/auth`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: event.currentTarget.elements.namedItem('email').value,
                        password: event.currentTarget.elements.namedItem('password').value,
                    })
                }).then((res) => {
                    res.json().then((result) => {
                        setResult(result);
                    });
                }).catch((e) => {
                    console.log('error', e);
                })
            }}>
            <input name="email"/>
            <input type="password" name="password"/>
            <button type="submit">Login</button>
            <pre style={{whiteSpace: 'pre-line'}}>{JSON.stringify(result)}</pre>
        </form>
    )
}
