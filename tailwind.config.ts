import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Dodatkowe kolory
        primary: '#4CAF50',
        // Dodatkowe klasy dla elementów formularza
        
      },
      form: {
        label: 'text-red-900',
        input: 'block w-full py-2 px-4 mb-4 border border-gray-300 rounded',
        textarea: 'block w-full py-2 px-4 mb-4 border border-gray-300 rounded',
        button: 'block w-full py-2 px-4 bg-primary text-white rounded cursor-pointer transition duration-300 ease-in-out transform hover:bg-opacity-80',
      },
    },
  },
  plugins: [],
};

export default config;
