import TheHeader from 'Components/TheHeader/TheHeader';
import Container from 'Components/Container/Container';
import './App.css';
import Search from 'Components/Search/Search';
import UserCard from 'Components/UserCard/UserCard';
import { defaulUser } from 'Mock/Index';

function App() {
  return (
    <div className="App">
      <Container>
        <TheHeader />
        <Search hasError onSubmit={() => {}} />
        <UserCard {...defaulUser} />
      </Container>
    </div>
  );
}

export default App;
