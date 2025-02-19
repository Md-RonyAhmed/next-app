"use client";
import { useTheme } from "@/contexts/ThemeContext";
import DetailPage from "./_detail/page";

const AboutPage = () => {
  const theme = useTheme();
  return (
    <>
      <h1 style={{ color: theme.colors.secondary, backgroundColor: theme.colors.primary }}>About Page</h1>
      <DetailPage />
    </>
  );
};

export default AboutPage;
