import React, { useState } from 'react';

const initialData = {
    location: {
        country: 'india'
    },
    onLocationChange: () => {}
}

const SearchContext = React.createContext(initialData);

export const SearchContextProvider = (props) => {
    const [location, setLocation] = useState(initialData.location);

    const onLocationChange = (event) => {
        setLocation({
            country: event.target.value
        })
    }

    return (
        <SearchContext.Provider
            value={{location: {...location}, onLocationChange}}
            >
                {props.children}
            </SearchContext.Provider>
    )
}

export default SearchContext;