import React from 'react';

const socialLinks = [
  { id: 1, src: '/images/social/facebook.svg', alt: 'Facebook' },
  { id: 2, src: '/images/social/instagram.svg', alt: 'Twitter' },
  { id: 3, src: '/images/social/twitter.svg', alt: 'Instagram' },
  { id: 4, src: '/images/social/youtube.svg', alt: 'Youtube' },
];

function SocialLinks() {
  return (
    <div className='inline-flex gap-32 items-center '>
      <span className='headingsh5regular flex-shrink-0 text-text-inverse'>
        Follow us:
      </span>
      {socialLinks.map((link) => (
        <div className='flex w-24 h-24 justify-center items-center'>
          <a key={link.id} href='#' aria-label={`Follow us on ${link.alt}`}>
            <img loading='lazy' src={link.src} alt={link.alt} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default SocialLinks;
