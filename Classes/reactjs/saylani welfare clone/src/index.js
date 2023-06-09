import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Center from "./center";
import "./index.css";
import Donate from "./donate";
import Whatwedo from "./whatwedo";
import Fundbox from "./fundbox";
import Otherprojects from "./otherprojects";
import Numbers from "./numbers";
import Testimonials from "./testimonials";
import "react-slideshow-image/dist/styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Subscribe from "./subscribe";
import Footer from "./footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Center />
    <Donate />
    <Whatwedo />
    <Fundbox />
    <Otherprojects />
    <Numbers />
    <Testimonials />
    <YoutubeEmbed/>
    <Subscribe/>
    <Footer/>

  </React.StrictMode>
);
