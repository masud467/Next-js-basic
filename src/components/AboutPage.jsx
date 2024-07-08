import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='space-x-5'> 
            
            <Link href={'/aboutme/history'}>History</Link>
            <Link href={'/aboutme/mission'}>Mission</Link>
        </div>
    );
};

export default AboutPage;