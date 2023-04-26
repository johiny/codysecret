// react component to make a simple login form
import React from "react";
const onSubmit = (username: string, password: string) => {

}

export default function LoginForm() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(username, password);
    }

    return (
        <div className="flex justify-center items-center h-screen p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-5/12">
            <input className="p-2 focus:outline-0" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input className="p-2 focus:outline-0" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="bg-retroblue text-white p-2">Login with Email</button>
        </form>
        </div>
    );
}