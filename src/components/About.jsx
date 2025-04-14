import {Component} from 'react'
// import Profile from './Profile'
import ProfileClass from './ProfileClass'

// const About = () => {
//   return (
//     <div>
//       <Profile 
//       name='Govinda'
//       address='Bangalore'
//       email='govinda@gmail.com'
//        />
//       <ProfileClass 
//       name='Er Govinda'
//       address='Bangalore'
//       email='ergovinda@gmail.com'
//       />
//     </div>
//   )
// }

// export default About


class About extends Component{
  constructor(){
    super();
    // console.log('Parent ctr is called')
  }

  componentDidMount(){
    // console.log('parent component did mount called')
  }

  render(){
    // console.log('parent render called')
    return(
      <div>
       <ProfileClass />

       <ProfileClass 
       name='Er Govinda'
       address='Bangalore'
       email='ergovinda@gmail.com'
       />
      </div>
    )
  }
}

export default About;


/*
 ********************** React Life cycle *****************************
 * parent ctr(constructor) is called
 * parent render is called
 * child ctr is called 
 * child render is called
 * child ctr is called 
 * child render is called
 * child mount is called
 * child mount is called
 * parent mount is called
*/