import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Auth = () => {

    const { currentUser } = useContext(UserContext);
    if (!currentUser) {
    return (
        <div>
            <div>
            <h1>
                Sign Up/Sign In Page
            </h1>
            <SignUpForm></SignUpForm>
            <SignInForm></SignInForm>
            </div>
        </div>
    )} return (
        <div>
        <h2>You are currently logged in!</h2>
        <a href="/">Go Home</a>
        {/* <button onClick={signOutUser}>Sign Out</button> */}
    </div>
    )
}
export default Auth;