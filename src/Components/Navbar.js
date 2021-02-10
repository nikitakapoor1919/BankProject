import React,{ Component } from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";

export class Navbar extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        //logo="https://raw.githubusercontent.com/nikitakapoor1919/Images/67b412337e21bbb9ecb6a76b3b659fccf0b99c58/logo.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "CUSTOMERS", to: "/" },
          { name: "TRANSFER", to: "/" },
          { name: "CONTACT US", to: "/" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nikita-kapoor-609813190/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Github",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "github"],
          },
          {
            name: "Twitter",
            url: "https://twitter.com/nikitakapoor_19",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }
}
export default Navbar