import { createContext } from 'react';

const UserContext = createContext();

// export const UserContextProvider = (props) => {
  // const [currentUser, setCurrentUser] = useState(null);

  // const handleLogout = async (evt) => {
  //   evt.preventDefault();

  //   try {
  //     const result = await Api[logout](formData)
  //   }
  //   setCurrentUser(null);
  // }
// }

export default UserContext;