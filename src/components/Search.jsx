import React, {useState} from "react";

const Search = (props) => {
    const {
        searchMovies = Function.prototype
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === "Enter") {
            searchMovies(search, type);
        }
    };

    const handleFilter = (e) => {
        setType(e.target.dataset.type)
        searchMovies(search, e.target.dataset.type);
    };

        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        onKeyDown={handleKey}
                    />
                    <button
                        className="btn purple lighten-2 search-btn"
                        onClick={() => {
                            searchMovies(search, type);
                        }}
                    >
                        Search
                    </button>
                    <div>
                        <label className="radio">
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={handleFilter}
                                checked={type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label className="radio">
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={handleFilter}
                                checked={type === 'movie'}
                            />
                            <span>movies</span>
                        </label>
                        <label className="radio">
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={handleFilter}
                                checked={type === 'series'}
                            />
                            <span>series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
}

export { Search };
