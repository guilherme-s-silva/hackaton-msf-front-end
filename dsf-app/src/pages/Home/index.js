import { useEffect, useState } from "react";

import Header from "../../components/Header";
import CardDate from "../../components/CardDate";
import InputSelect from "../../components/InputSelect";
import CardBriefTweet from "../../components/CardBriefTweet";
import CardTweet from "../../components/CardTweet";
import Footer from "../../components/Footer";

import "./styles.css";
import { instanceAxios } from "../../services/axios";

export function App() {
    const [datasTweets, setDatasTweets] = useState([]);

    useEffect(() => {
        async function loadDatasTweets() {
            try {
                const { data } = await instanceAxios.get("/geral");

                setDatasTweets(data);
            } catch (error) {
                console.log(error.data.message);
            }
        };

        loadDatasTweets();
        console.log(datasTweets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <Header />

            <main>
                <CardDate />

                <div className="container-cards-brief" >
                    <CardBriefTweet title={5000.15678678} userTwitter={"@erika_irina"} />

                    <CardBriefTweet title={2000.78678253} userTwitter={"@lucas_viana"} />

                    <CardBriefTweet title={1000.50941446} userTwitter={"@guilherme_silva"} />
                </div>

                <div className="main-content-filters">
                    <h4>Filtros:</h4>

                    <div className="container-inputs-select">
                        <InputSelect tipo={"Relevância"} />

                        <InputSelect tipo={"Localização"} />

                        <InputSelect tipo={"Seguidores"} />
                    </div>
                </div>

                <div className="main-content-tweets" >
                    <div className="container-cards-tweets" >
                        <CardTweet />

                        <CardTweet />

                        <CardTweet />

                        <CardTweet />
                    </div>

                    <section></section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
