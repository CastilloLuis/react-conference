import React from 'react';

const BadgeSearchFilter = (props) => {
    const [ query, setQuery ] = React.useState('');
    const filteredBadges = props.badges.filter(badge => badge.firstName.toLowerCase().includes(query.toLowerCase()));
    console.log('filtered badges', filteredBadges)
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

