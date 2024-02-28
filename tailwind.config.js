/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                bintang: "url('/base.png')",
                bintang1: "url('/base1.png')",
            },
        },
        colors: {
            primary: "#0081AD",
            secondary: "#00384A",
            white: "#FFFFFF",
            third: "#0081AD",
            black: "#000000",
        },
    },
    plugins: [],
};
