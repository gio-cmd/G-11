import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.num} {...profile} />
      ))}
    </div>
  );
};

export default ProfileList;