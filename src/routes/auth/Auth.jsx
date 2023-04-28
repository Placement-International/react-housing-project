import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Auth = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <div>
            <div>
            <h1>
                Sign Up/Sign In Page
            </h1>
            {/* <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button> */}
            {
                currentUser ? (
                    <div>
                        <h2>You are currently logged in!</h2>
                        <button onClick={signOutUser}>Sign Out</button>
                    </div>)
                    : (
                     <span>You are not logged in</span>
                )
            }
            <SignUpForm></SignUpForm>
            <SignInForm></SignInForm>
            </div>
        </div>
    )
}
export default Auth;