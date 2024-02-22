/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                bintang: "url('/base.png')",
            },
        },
        colors: {
            primary: "#0081AD",
            secondary: "#00384A",
        },
    },
    plugins: [],
};
