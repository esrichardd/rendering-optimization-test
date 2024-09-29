import { useState, useMemo } from 'react'
import Search from './components/Search'
import UserList from './components/UserList'
import './App.css'

interface UserProps {
  id: string
  name: string
  email: string
  avatar?: string
}

const usersData: UserProps[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Johana Smith', email: 'johana@example.com' },
  { id: '3', name: 'Dan Abramov', email: 'dan@example.com' },
  { id: '4', name: 'Daniel Alpert', email: 'daniel@example.com' },
  { id: '5', name: 'Ryan Florence', email: 'ryan@example.com' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredUsers = useMemo(() => {
    return usersData.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen w-full bg-gray-900 flex justify-center items-start py-8">
      <div className="w-full max-w-[800px] px-4">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">Buscador de Usuarios</h1>
        <Search onSearch={setSearchTerm} />
        <UserList users={filteredUsers} />
      </div>
    </main>
  )
}

export default App
