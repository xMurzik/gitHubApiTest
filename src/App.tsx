import TheHeader from 'Components/TheHeader/TheHeader';
import Container from 'Components/Container/Container';
import './App.css';
import Search from 'Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Container>
        <TheHeader />
        <Search hasError onSubmit={() => {}} />
      </Container>
    </div>
  );
}

export default App;
