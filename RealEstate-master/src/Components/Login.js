import React, { useContext } from 'react';
import { firebase } from '../firebase';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase'
import "./Login.css";
import { StateContext, useStateValue } from '../context/StateProvider'
import { actionTypes } from "../reducer/reducer";
import { UserStateValue } from '../context/StateProvider';
import { UserContext } from '../context/StateProvider';
function Login() {

    // const { dispatch } = useContext(UserContext);
    const signIn = () => {
        const google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // const signIn = () => {
    //     auth.signInWithPopup(provider)
    //         .then((re) => {
    //             dispatch({
    //                 type: actionTypes.SET_USER,
    //                 user: re.user,
    //             });
    //             console.log(re);
    //         }).catch((error) => alert(error.message));
    // }

    // const signIn = () => {
    //     auth.signInWithPopup(provider).then((result) => {
    //         dispatch({
    //             type: actionTypes.SET_USER,
    //             payload: result.user,
    //         });
    //         console.log(result);
    //     }).catch((error) => alert(error.message))
    // }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAdCAMAAAA0ALYmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHJQTFRFAAAACsw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8Csw8GBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYCsw8Csw8GBgYGBgYGBgYCsw8Csw8cdRuRwAAACZ0Uk5TADC//3DP74Bgf2+fwCAQoEDfIL+fYBCvj4BQ/9/vQPCPMHDP0OBAQKOxAAADRklEQVR4nO2X2XKjMBBFhT1ekniwww6ScADn/39x1N1a2eypSk3iqrkPRhICDq3uK8zYWNFmu4mg8WurtJuc/4mK9gp1D9QHgN5+N88jOm5JxyeCftkavT4N9Btgnn6f4PD2HNDxBijPqnWGxv4ZoOMdQB7Y5f2iU+PnQ6NtqAI82t8RdJIaZTn0izJ1SmgKDJV6PrSr6cVpDf2m5EoiS/REowZPyhYOtTde+tMs0gWYrxf2gagf7HIdQ7fcSXRhn+NTWIXt3JvuLs5qLeDKeNq3bVtJqSbjaMrxgPcZeIbsOEIX9oy5O5ibYmSvEZUilCGLrivQXBZz0ALb5Sx0661qrl+MFYPsqFXbqazjKS9sz14Y3AGEVneLKa1Ruzi+wfFlHlrFYgrd6E5yD3qwK1zIcgKdiYLbaC5Dk9XFkWNW1FFM1hdAS5VSlCCaSqcccmYaur8H7TG1zRi6kLXivgdtrI5K0Urt5Wh9m9iDhhDlhBNS4dPgrfCF7kDLio3loHO1Ui1v1qGN1R23Yx3J+nZxCN340FgZuX4aTICf7g50aTJ5DlpAFQrjQQvQ2upeJ8ywl+Ob7B20UIhYbjLIaZyAvEhe3YHupKxH2BaaZuZUGIvQZ7S6txlmSGiwvrODtion0Ak0hoLeaAo9aJPFVUnApoe0yq1LWGhKZ0jsMbS5A+bWTVndZpZZJbSyvpuXHp5djKF7qkGMd7Ps0ybCbV+XA7claaALKmNXig4684yexQpqgRl8OvYL0SgP+hBZMum8zWgdVtPDSkW8D6F73rSg3pTisk+vQbvnOqVsTKW2BF/FY9CqEEQILYJnfA10SlkwXX+9hbuVWINOXNPA6qPzul6X4iPQnwfQ5zI0xUJM0kUG0ENwOguh/c4I2u0qBa8ehj5h97QCnQeh1KrRvGG/TAccSMJsCiMtBusa6eBDJybFgV9+IbQJdQhdUkRBGPNqDVoZoM6QjAfbeO19KbX0VfVF0DWFOoQ2mc70J4joRtCD92nMcslLZV6ZHFmeyDwm+qya+rT92noAurAemZPf1p46/dFrJ/asd2cbGiPhrKJXaaT+ENiS7HA42CdbfCE7xd3hL6B/nv5D/yudFqBP38w1qz8zbJK/fd5CgQAAAABJRU5ErkJggg=="
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign In With Google</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login
