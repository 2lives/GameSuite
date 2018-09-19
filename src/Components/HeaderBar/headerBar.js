import React, { Component } from 'react';
import { assetColors } from '../../gsAssets/styles';

const styles = {
    HeaderBar: {
        width: '100vw',
        height: '11vh',
        backgroundColor: assetColors.charcoal,
        position: 'relative'
    },
    logo: {
        paddingTop: 5,
        height: '70px',
        width: '250px',
        position: 'absolute',
        left: 5
    },
    avatar: {
        position: 'absolute',
        right: 8,
        top: 8,
        borderRadius: 100,
        width: 50,
        height: 50,
        border: '1px solid',
        borderColor: assetColors.normalBlue
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
                <a href="###" alt="profile">
                    <img
                        src={require('../../gsAssets/formattedstockavatarfinal.png')}
                        style={styles.avatar}
                    />
                </a>
            </div>
        );
    }
}

export default HeaderBar;
