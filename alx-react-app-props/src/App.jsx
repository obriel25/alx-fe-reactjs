import ProfilePage from './ProfilePage';
import userContext from '../UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return(
    <userContext.Provider value = {userData}>
      <ProfilePage/>
    </userContext.Provider>
  );
}

export default App;

