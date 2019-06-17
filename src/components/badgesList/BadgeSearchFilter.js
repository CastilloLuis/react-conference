import React from 'react';

/**
 * Custom hook
 * @param {*} props 
*/
const useSearchBadge = (props) => {
    const [ query, setQuery ] = React.useState('');
    const [ filteredBadges, setFilteredResults ] = React.useState(props.badges); // to use React.useMemo

    /* optimazing search filter*/
    React.useMemo(() => {
        const result = props.badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                    .includes(query.toLowerCase())
        });
        setFilteredResults(result);
    }, [ props.badges, query ]);

    return { query, setQuery, filteredBadges };
}

const BadgeSearchFilter = (props) => {
    const { query, setQuery, filteredBadges } = useSearchBadge(props);

    return (
        <div className="form-group">
            <label>Filter Badges</label>
            <input 
                type="text" 
                className="form-control" 
                value={query}
                onChange={(e) => {setQuery(e.target.value); props.onChange(filteredBadges)}}
            />
        </div>
    )
}

export default BadgeSearchFilter;

