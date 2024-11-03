import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass"
const About = () => {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>This is the Namaste</p>
      </div>
      <Profile name={"Pavan"}/>
      <ProfileClass name={"Pavan Class"}/>
      <Outlet/>
    </>
  );
};
export default About;                                         
