/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                bintang: "url('/base.png')",
                border_desktop: "url('/border_desktop.png')",
                button: "url('/src/assets/base/button.png')",
            },
        },
        colors: {
            primary: "#0081AD",
            secondary: "#00384A",
            white: "#FFFFFF",
        },
    },
    plugins: [],
};
