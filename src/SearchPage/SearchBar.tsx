import searchStyles from "./SearchBar.module.css";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export default function SearchBar({ query, onQueryChange }: SearchBarProps) {  
    const handleSearch = () => {
        window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        handleSearch();
    }
    };
    
    const roundingClass = query.startsWith(';b')
    ? searchStyles.unrounded
    : searchStyles.rounded;
    
    return (
    <div className={`${searchStyles.searchBar} ${roundingClass}`}>
        <input
            autoFocus
            className={searchStyles.input}
            placeholder="输入要搜索的内容"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} className={searchStyles.button}>
        搜索
        </button>
    </div>
    );
}
