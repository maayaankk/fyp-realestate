import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo.png'
import { NavLink, Link } from 'react-router-dom'
import { firebase } from '../firebase';
import { Avatar, Button } from '@material-ui/core';
import { auth } from 'firebase';


const HoverLI = { borderBottomColor: "#0acc3c" }
const NavBar = (props) => {

    function useAuth() {
        const [currentUser, setCurrentUser] = useState();

        useEffect(() => {
            const unsub = firebase.auth().onAuthStateChanged(user => setCurrentUser(user));
            return unsub;
        }, [])

        return currentUser;
    }
    const currentUser = useAuth();
    const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');


    const logOut = () => {
        firebase.auth().signOut();
    }

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser)
            setPhotoURL(currentUser.photoURL)
            setDisplayName(currentUser.displayName)
        }
    }, [currentUser])



    return (

        <div className="NavBar">
            <div className="NavBar_Div">
                <li style={{ marginLeft: 0 }}>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </li>
                <li>
                    <NavLink to="/Find-A-Home"
                        activeStyle={{
                            color: '#0acc3c',
                        }}>Buy</NavLink >
                </li>
                <li>
                    <NavLink to="/Sell-A-Property"
                        activeStyle={{
                            color: '#0acc3c',
                        }}>Sell</NavLink >
                </li>
                <li>
                    <NavLink to="/Manage-Rentals"
                        activeStyle={{
                            color: '#0acc3c',
                        }}>Rent</NavLink >
                </li>


                <div>
                    <h1 style={{ paddingTop: 28, paddingRight: 25 }}>Welcome, {displayName}</h1>
                    <Button style={{ paddingRight: 20, borderBottomColor: '#0acc3c', backgroundColor: 'transparent', border: 'none', }} onClick={logOut}>
                        Sign out
                    </Button>
                    <li style={{ paddingTop: 15, paddingRight: 10 }}>
                        <Avatar pt={100} alt="M" src={photoURL} />
                    </li>
                </div>
            </div>
        </div>
    )
}
export default NavBar;