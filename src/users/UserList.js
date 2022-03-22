import React from 'react';
import axios from 'axios';
import User from './User';
import LoaderImg from '../img/loader.gif';
import '../App.css';
// import Loader from '../utils/loader';

class UserList extends React.Component{

    state = { users: [],loading: true };

constructor(){
    super();
    
    axios.get('https:/api.github.com/users')
    .then(res => {
        const data = res.data;
        this.setState({users: data});
        this.setState({loadin:false});
    })
    .catch(err => console.log(err));
}



    render(){
        return(
        <div>


            <h1>Users </h1>
            {/* <Loader/> */}
            
            
            
            {this.state.users.map(user =>{
                return <User key = {user.login} user = {user}/>
                
                
            })}


        </div>
            
            )
    }

}
export default UserList;