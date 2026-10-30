export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { brand: "#1D4ED8", brand2: "#1E40AF", accent: "#FFC83D", paper: "#FFFFFF", soft: "#EAF2FF", ink: "#0F1B3D", mute: "#51618A" },
    borderRadius: { r: "1.25rem" },
    fontFamily: { display: ['"Fredoka"', "Georgia", "serif"], sans: ["Nunito", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
