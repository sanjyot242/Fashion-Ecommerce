import React from 'react';

const socialLinks = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e3349f055236ff9de8f8f45d15ae095dfb8dbc99881034fe50195ce41333c16?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Facebook" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aca8fd95080832dee7aa050d4eed8732c5223720d3ff02967241f49442ebbd8f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Twitter" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/64861b74c974e10155a012ed30e75befd9d9f8568db8526e54b98b8349e22aa3?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "Instagram" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3edda506d7841cb3dc079a925ce3d20db0d804db55fc447b98a9cc9827169957?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", alt: "LinkedIn" }
];

function SocialLinks() {
  return (
    <div className="flex gap-32 items-center items-stretch headingsh5medium">
      <span className="self-stretch my-auto">Follow us:</span>
      {socialLinks.map(link => (
        <a key={link.id} href="#" aria-label={`Follow us on ${link.alt}`}>
          <img loading="lazy" src={link.src} alt={link.alt} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;