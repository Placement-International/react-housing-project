//import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';

const Auth = () => {
    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user)
    // }
    return (
        <div>
            <div>
            <h1>
                Sign Up/Sign In Page
            </h1>
            {/* <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button> */}
            <SignUpForm></SignUpForm>
            <SignInForm></SignInForm>
            </div>
        </div>
    )
}
export default Auth;