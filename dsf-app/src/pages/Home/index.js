import CardBriefTweet from "../../components/CardBriefTweet";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardTweet from "../../components/CardTweet";

export function App() {
    return (
        <div className="App">
            <Header />

            <div className="container-cards-brief" >
                <CardBriefTweet title={5000.15678678} userTwitter={"@erika_irina"} />

                <CardBriefTweet title={2000.78678253} userTwitter={"@lucas_viana"} />

                <CardBriefTweet title={1000.50941446} userTwitter={"@guilherme_silva"} />
            </div>

            <div className="container-cards-tweets" >
                <CardTweet />

                <CardTweet />

                <CardTweet />

                <CardTweet />
            </div>

            <Footer />
        </div>
    );
};
