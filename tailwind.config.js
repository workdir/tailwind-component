/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#008060",
                destructive: "#d82c0d",
                text: "#202223",
                textDisabled: "#8c9196",
                surfaceDisabled: "#fafbfb",
                borderDisabled: "#d2d5d8",
            },
            borderRadius: {
                md: "0.25rem",
            },
            boxShadow: {
                button: "0 0.0625rem 0 rgba(0,0,0,.05)",
            },
            fontFamily: {
                sans: ["var(--font-dm-sans)"],
            },
        },
    },
    plugins: [],
};
