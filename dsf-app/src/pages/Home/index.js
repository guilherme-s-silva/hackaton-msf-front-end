import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardTweet from '../../components/CardTweet';

function App() {
  return (
    <div className="App">
      <Header/>

      <CardTweet/>

      <Footer/>
    </div>
  );
}

export default App;
