import { memo } from "react"

interface UserProps {
    id: string
    name: string
    email: string
    avatar?: string
}

function User({ user }: { user: UserProps }) {
    console.log("Componente User renderizado")
    return (
        <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-200 ">{user.id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">{user.email}</td>
        </tr>
    )
}

export default memo(User)
