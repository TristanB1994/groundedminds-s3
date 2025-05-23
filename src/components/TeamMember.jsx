import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const TeamMember = ({ name, image, profileUrl, alt }) => (
    <div className={`team_portrait ${name.toLowerCase()}`}>
        <Link href={profileUrl}>
            <img
                src={image}
                alt={alt}
                style={{ cursor: 'pointer' }}
            />
        </Link>
        <Link href={profileUrl}>
            <button className="teamthumbs fancy">
                Meet {name}
            </button>
        </Link>
    </div>
);

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default TeamMember;
