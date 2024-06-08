import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Google Sign-In button click
  const handleGoogleClick = async () => {
    try {
      // Initialize Google Auth provider and Firebase Auth
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google using a popup
      const result = await signInWithPopup(auth, provider);

      // Send the user data to the backend for authentication
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      // Get the response data
      const data = await res.json();

      // Dispatch the signInSuccess action to update the Redux store
      dispatch(signInSuccess(data));

      // Navigate to the home page
      navigate('/');
    } catch (error) {
      console.log('Could not sign in with Google', error);
    }
  };

  return (
      <button
          onClick={handleGoogleClick}
          type='button'
          className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
      >
        Continue with Google
      </button>
  );
}
