import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

const UserPages = () => {
    const [users, setUsers] = useState([]);

    async function getUser() {
        const url = "https://api.escuelajs.co/api/v1/users/1";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setUsers(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            <UserCard item={users}/>
        </div>
    )
}

export default UserPages
