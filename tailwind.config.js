/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    theme: {
        extend: {
            scale: {
                flip: "-1",
            },
        },
        fontSize: {
            xs: "0.6rem",
            sm: "0.8rem",
            base: "1rem",
            lg: "1.1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
        fontFamily: {
            sans: ["Helvetica", "Arial", "sans-serif"],
            atv: ["atv-font"],
            gsf: ["gsf-font"],
        },
        screens: {
            xs: "360px",
            // => @media (min-width: 320px) { ... }
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            "3xl": "1800px",
            // => @media (min-width: 1800px) { ... }
        },
        boxShadow: {
            DEFAULT: "0 2px 3px 0px rgba(0,0,0,.15)",
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
