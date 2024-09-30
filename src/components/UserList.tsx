import { memo } from "react"
import User from "./User"
import { UserListProps } from "./types";

const areEqual = (prevProps: UserListProps, nextProps: UserListProps) => {
    if (prevProps.users.length !== nextProps.users.length) return false;
    return prevProps.users.every((user, index) =>
        user.id === nextProps.users[index].id &&
        user.name === nextProps.users[index].name &&
        user.email === nextProps.users[index].email
    );
};

function UserList({ users }: UserListProps) {
    console.log("Componente UserList renderizado")

    return (
        <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                    <tr>
                        <th className="w-[100px] px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Correo Electrónico</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {users.map((user) => (
                        <User key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default memo(UserList, areEqual)