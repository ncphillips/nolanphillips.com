const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addBase, addVariant, matchUtilities, theme }) {
      addBase({
        ':root': extractColorVars(theme('colors')),
      });

      addVariant('ios', '@supports (-webkit-touch-callout: none)')

      matchUtilities(
				{
				  "bg-dots": (value) => {
            const luma = getLuminosity(value)
            const white = 'rgba(255,255,255,.24)'
            const black = 'rgba(0,0,0,.24)'
            const dotColor = luma > 40 || value === '#fff' ? black : white

            return {
              'background': `linear-gradient(90deg,${value} 12px,transparent 1%) 50%,linear-gradient(${value} 12px,transparent 1%) 50%, ${dotColor}`,
              'background-size': '13px 13px'
            }
          },
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      )
    }
  ]
}

function extractColorVars(colorObj, colorGroup = '') {
  return Object.keys(colorObj).reduce((vars, colorKey) => {
    const value = colorObj[colorKey];

    const newVars =
      typeof value === 'string'
        ? { [`--tw-color${colorGroup}-${colorKey}`]: value }
        : extractColorVars(value, `-${colorKey}`);

    return { ...vars, ...newVars };
  }, {});
}

function getLuminosity(hex) {
  var c = hex.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff;  // extract red
  var g = (rgb >>  8) & 0xff;  // extract green
  var b = (rgb >>  0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma
}