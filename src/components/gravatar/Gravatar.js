import React from 'react';
import md5 from 'md5';

import './Gravatar.css';

const Gravatar = ({ email }) => {
    const hash = md5(email);
    return (
        <img 
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            className="Badge__avatar"
            alt='Avatar' 
        />
    )
}

export default Gravatar;

