/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_main: "var(--active)",
        color_background: "var(--background-secondary)",
        color_border: "var(--border)",
        color_status_1: "var(--status-green)",
        color_status_2: "var(--status-orange)",
        color_status_3: "var(--status-red)",
        color_status_4: "var(--status-blue)",
        color_status_5: "var(--status-gray)",
        db_arrival_icon: "var(--db-arrival-icon)",
        db_departure_icon: "var(--db-departure-icon)",
        db_presentGuests_icon: "var(--db-presentGuests-icon)",
        db_infobox: "var(--db-infobox)",
        input_disabled: "var(--input-disabled)",
        color_bg_weekend: "var(--timetable-weekend-bg)",
      },
    },
  },
};
