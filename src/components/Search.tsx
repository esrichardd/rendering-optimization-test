interface SearchProps {
    onSearch: (term: string) => void;
}

function Search({ onSearch }: SearchProps) {
    console.log("Componente Search renderizado")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="mb-6">
            <input
                onChange={handleChange}
                type="search"
                placeholder="Buscar usuarios..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
            />
        </div>
    )
}

export default Search