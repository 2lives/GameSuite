import React, { Component } from 'react';
import { assetColors } from '../../gsAssets/styles';

const styles = {
    HeaderBar: {
        width: '100vw',
        height: '10vh',
        backgroundColor: assetColors.lightGrey
    },
    logo: {
        height: '70px',
        width: '250px'
    }
};

export class HeaderBar extends Component {
    render() {
        return (
            <div className="header bar" style={styles.HeaderBar}>
                <div className="logo">
                    <img
                        src={require('../../gsAssets/headerlogo.png')}
                        style={styles.logo}
                    />
                </div>
            </div>
        );
    }
}

export default HeaderBar;
