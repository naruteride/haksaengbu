import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({ key, name, imageSrc }) => {
    return (
        <Link to={name} key={key} className="profile-card">
            <div className="profile-image-wrapper">
                <img src={imageSrc} alt={name} className="profile-image" />
            </div>
            <div className="profile-name">{name}</div>
        </Link>
    );
};

export default ProfileCard;
