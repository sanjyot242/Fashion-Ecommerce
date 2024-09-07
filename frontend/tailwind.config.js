import withMT from '@material-tailwind/react/utils/withMt';
import combinedTokens from './combinedTokens.json' assert { type: 'json' };
import customClasses from './tailwindCustomClassesUpdated.json' assert { type: 'json' };

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        ebgaramond: ['"EB Garamond"', 'serif'], // Add EB Garamond font
        inter: ['"Inter"', 'sans-serif'], // Add Inter font
      },
      colors: {
        ...combinedTokens.colors,
      },
      spacing: {
        ...combinedTokens.spacing,
      },
      padding: {
        ...combinedTokens.padding,
      },
      borderRadius: {
        ...combinedTokens.borderRadius,
      },
      textColor: {
        ...customClasses.textColor, // Use actual color values
      },
      backgroundColor: {
        ...customClasses.backgroundColor, // Use actual color values
      },
      borderColor: {
        ...customClasses.borderColor, // Use actual color values
      },
      fontSize: {
    'desktop-headings-display-large-regular': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-large-medium': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-large-semi-bold': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-large-bold': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-small-regular': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '2.88rem'
      }
    ],
    'desktop-headings-display-small-medium': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '2.88rem'
      }
    ],
    'desktop-headings-display-small-semi-bold': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '2.88rem'
      }
    ],
    'desktop-headings-display-small-bold': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-regular': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-semi-bold': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-medium': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-bold': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h2-regular': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h2-medium': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h2-semi-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h2-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h3-medium': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h3-semi-bold': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h3-bold': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h3-regular': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h4-regular': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h4-medium': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h4-semi-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h4-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h5-regular': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h5-medium': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h5-semi-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h5-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h6-regular': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'desktop-headings-h6-medium': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'desktop-headings-h6-semi-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'desktop-headings-h6-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h1-regular': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h1-medium': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h1-semi-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h1-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h2-regular': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h2-medium': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h2-semi-bold': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h2-bold': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h3-regular': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h3-medium': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h3-semi-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h3-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h4-regular': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h4-medium': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h4-semi-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h4-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h5-regular': [
      '1.25rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h5-medium': [
      '1.25rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h5-semi-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h5-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h6-regular': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'mobile-headings-h6-medium': [
      '1.12rem',
      {
        letterSpacing: '-0.02rem',
        lineHeight: '1.5rem'
      }
    ],
    'mobile-headings-h6-semi-bold': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'mobile-headings-h6-bold': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-large-regular': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-medium': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-semi-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-underlined': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'paragraph-large-strikethrough': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-italic': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-medium-regular': [
      '1rem',
      {
        letterSpacing: '-0.02rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-medium': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-medium-semi-bold': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-underline': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-strikethrough': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-italic': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-small-regular': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-semi-bold': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-medium': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-underline': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-strikethrough': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-italic': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-xsmall-regular': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-medium': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-semi-bold': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-underline': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-strikethrough': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-italic': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'overline-web': [
      '0.62rem',
      {
        letterSpacing: '0.06rem',
        lineHeight: '1.25rem'
      }
    ],
    'overline-mobile': [
      '0.5rem',
      {
        letterSpacing: '0.06rem',
        lineHeight: '1.25rem'
      }
    ]
  }
    },
  },
  plugins: [require('@tailwindcss/forms')],
});
