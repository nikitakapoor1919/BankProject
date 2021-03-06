import React,{ Component } from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";

export class Navbar extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
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
            url: "https://github.com/nikitakapoor1919",
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