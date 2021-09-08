import './App.css';
import user from './components/SocialProfile/user.json';
import { SocialProfile } from './components/SocialProfile/SocialProfile.jsx';

function App() {
  return (
    <SocialProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
