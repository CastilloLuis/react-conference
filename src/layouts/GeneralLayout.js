import React from 'react';

import NavBar from '../components/navbar/navbar';

const GeneralLayout = props => {
    return (
        <React.Fragment>
            <NavBar />
            {props.children}
        </React.Fragment>
    )
}

export default GeneralLayout;

