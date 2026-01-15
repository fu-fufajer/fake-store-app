import React from 'react'
import { Card } from "flowbite-react";

const UserCard = ({ item }) => {
    return (
        <div className='flex justify-center mt-40'>
            <Card className="max-w-md">
                <div className="flex flex-col items-center pb-10">
                    <img src={item.avatar} alt="" className="mb-3 rounded-full shadow-lg h-30"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.role}</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Change Profile
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default UserCard
