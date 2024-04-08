import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../Firebase';
import SellOrRentButton from '../components/SellOrRentButton';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const [changeDetails, setChangeDetails] = useState(false);

  function logOut() {
    auth.signOut();
    navigate('/');
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onApply() {
    try {
      // update user name in firebase auth
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // update in fireStore db
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      // toast msg
      toast.success('Profile updated');
    } catch (error) {
      toast.error('Profile update failed');
    }
  }

  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center my-6">My Profile</h1>
      <div className="w-full md:w-[70%] px-4 py-2">
        <form className="flex flex-col gap-6">
          {/* name input */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={onChange}
            disabled={!changeDetails}
            className={`w-full text-gray-700 border border-gray-300 rounded bg-white transition ease-in-out text-xl ${
              changeDetails && 'bg-emerald-200 focus:bg-emerald-300'
            }`}
          />
          {/* email input */}
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="w-full text-gray-700 border border-gray-300 rounded bg-white transition ease-in-out text-xl"
          />
          <div className="flex justify-between items-center whitespace-nowrap text-sm md:text-lg mb-6">
            <p>
              Do you want to change your name?{' '}
              <span
                onClick={() => {
                  changeDetails && onApply();
                  setChangeDetails((prevState) => !prevState);
                }}
                className="text-red-600 hover:text-red-800 transition ease-in-out duration-200 cursor-pointer"
              >
                {changeDetails ? 'Apply Changes' : 'Edit'}
              </span>{' '}
            </p>
            <p
              onClick={logOut}
              className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
            >
              Logout
            </p>
          </div>
        </form>
        <SellOrRentButton />
      </div>
    </section>
  );
};

export default Profile;
