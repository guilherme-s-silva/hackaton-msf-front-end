import CardBriefTweet from '../../components/CardBriefTweet';
import './styles.css';

function App() {
    return (
        <div className="App">
            <div className="container-cards-brief" ></div>
            <CardBriefTweet title={5000.15678678} userTwitter={"@userTeste"} />
        </div>
    );
}

export default App;
