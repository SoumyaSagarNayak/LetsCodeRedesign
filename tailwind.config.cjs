module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:    "#0A0F1E",
        navy2:   "#0F172A",
        card:    "#131C30",
        card2:   "#1A2540",
        violet:  "#7C3AED",
        violet2: "#9D5CFF",
        cyan:    "#00E5FF",
        cyan2:   "#38BDF8",
        green:   "#10B981",
        amber:   "#F59E0B",
        white:   "#F0F4FF",
        muted:   "#94A3B8",
        border:  "rgba(124,58,237,0.18)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-48": "48px 48px",
      },
    },
  },
  plugins: [],
};
