// It's our store file (nothing but a normal js Object)
import { createContext } from "react";

const UserContext = createContext({
     name:'Ms Alley Thakur',
     profession:'Software-Developer',
     email:'alley@gmail.com'
});

export default UserContext