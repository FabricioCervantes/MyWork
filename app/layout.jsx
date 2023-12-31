import React from "react";
import "@styles/globals.css";
import Nav from "@components/Navbar";
export const metadata = {
  title: "Fabricio Cervantes",
  description: "A place to show my work and my thoughts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <body className="bg text-white max-w-5xl mx-auto text-center p-10">
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
