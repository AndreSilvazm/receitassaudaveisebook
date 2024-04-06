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

        
        "BgIMG":"url('https://receitasdeliciosasparaemagrecer697.my.canva.site/images/c0063ac10e0a4a0d9f67af955f62d6dc.jpg')",

        "img1":"url('https://receitasdeliciosasparaemagrecer697.my.canva.site/images/653670a17e58028837f36d28dcbe86d1.jpg')",

        "img2":"url('https://receitasdeliciosasparaemagrecer697.my.canva.site/images/2be8bb64219d3fb8bf64a2e1847a6cef.jpg')",

        "img3":"url('https://receitasdeliciosasparaemagrecer697.my.canva.site/images/19155a5ed9725b51133a3f07c00503b3.jpg')",

        "img4":"url('https://receitasdeliciosasparaemagrecer697.my.canva.site/images/519d24c640881a38000ae08adf8b30fc.jpg')",

        "GarantiaImg":"url('https://receitasdeliciosasparaemagrecer697.my.canva.site/images/3199505d6be4a666a7dd605653b8d967.png')",


      },
    },
  },
  plugins: [],
};
export default config;
