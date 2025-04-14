import React from "react";

// Note -> 1) constructor called
//2) render() method called
//3) component did mount called
//(All of the process is called React lifeCycle)

// Exploring Context api in class based component

import UserContext from '../Utils/UserContext'

class ProfileClass extends React.Component {
  constructor() {
    super();
    // Here constructor called firstly

    this.state = {
      userDetails: null,
    };

    // this.state = {
    //      // way to initialize useState in class based components
    //      count:0,
    // }
    console.log("child Ctr called");
  }

  async componentDidMount() {
    // It is use to call the api like useEffect() hook
    console.log("child Component did Mount called");

    try {
      const data = await fetch("https://api.github.com/users/HarshAgarwal");
      const response = await data.json();
      this.setState({
        userDetails: response,
      });
    } catch (error) {
      console.error("Error fetching the user details:", error);
    }

    // Clear any existing interval just in case
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      console.log("From profile class");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("child component did update is called");
  }
  componentWillUnmount() {
    console.log("child component will unmount is called");
    if (this.timer) {
      clearInterval(this.timer);
      console.log("Interval cleared");
    }
  }

  render() {
    // secondly render method called
    console.log(" child Render called");

    if (this.state.userDetails === null) {
      return <h1>Loading..</h1>;
    }

    const { name, avatar_url, bio, location, url } = this.state.userDetails;
    return (
      <div className="border border-black w-[450px]">
        <h1 className="font-semibold text-2xl">
          Profile class based component
        </h1>
        <UserContext.Consumer>
          {/* It will work like here useContext */}
          {
            (data)=>(
               <h1>{data.name}</h1>
            )
          }
          </UserContext.Consumer>
        <img src={avatar_url} width={"120px"} />
        <h1>Name -: {name}</h1>
        <h1>About -: {bio}</h1>
        <h1>Address -: Bangalore</h1>
        <h1>Country -: {location}</h1>
        <h1>Email -:ergovindthakur@gmail.com</h1>
        <h1>Link -: {url}</h1>

        {/* <button onClick={() => {
                    this.setState({
                         count:this.state.count + 1
                    })
               }} className='border border-black px-3 py-2 m-3'>Increment</button> */}
      </div>
    );
  }
}

export default ProfileClass;
