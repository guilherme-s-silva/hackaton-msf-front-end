import { useEffect, useState } from "react";

import { instanceAxios } from "../../services/axios";
import { useGlobal } from "../../hooks/useGlobal";

import Header from "../../components/Header";
import CardDate from "../../components/CardDate";
import InputSelect from "../../components/InputSelect";
import CardBriefTweet from "../../components/CardBriefTweet";
import CardTweet from "../../components/CardTweet";
import Footer from "../../components/Footer";

import "./styles.css";

export function App() {
    // @ts-ignore
    const { dateForm, dataTweets, setDataTweets, selected, setSelected } = useGlobal();

    useEffect(() => {
        async function loadDataTweets() {
            try {
                const { data } = await instanceAxios.get("/geral");

                setDataTweets(data);
            } catch (error) {
                console.log(error.data.message);
            }
        };

        loadDataTweets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function loadInfosCardTweets() {
        try {
            if (!selected.assunto || !dateForm.startDate || !dateForm.endDate) {
                return;
            };

            const { data } = await instanceAxios.get(`/filtro/${selected.assunto}/${dateForm.startDate}/${dateForm.endDate}`);

            setDataTweets(data);
            setSelected({});
        } catch (error) {
            console.log(error.message);
        }
    };

    function compareAscending(a, b) {
        if (a.public_metrics.followers_count < b.public_metrics.followers_count) {
            return -1;
        }

        if (a.public_metrics.followers_count > b.public_metrics.followers_count) {
            return 1;
        }

        return 0;
    };

    function compareDescending(a, b) {
        if (a.public_metrics.followers_count > b.public_metrics.followers_count) {
            return -1;
        }

        if (a.public_metrics.followers_count < b.public_metrics.followers_count) {
            return 1;
        }

        return 0;
    };

    function handleFilters() {
        const lengthSelected = Object.keys(selected).length;

        if (!lengthSelected) {
            return;
        }

        let dataTweetsFiltered = null;

        if (selected.relevância) {
            const verifiedProfile = selected.relevância === "verificado" ? true : false;

            dataTweetsFiltered = dataTweets.filter(item => item.verified === verifiedProfile);
        }

        if (selected.seguidores) {
            const isFollowersSortedAscending = selected.seguidores === "menos seguidores" ? true : false;

            if (dataTweetsFiltered?.length) {
                dataTweetsFiltered = isFollowersSortedAscending ? 
                    dataTweetsFiltered.sort(compareAscending) : 
                    dataTweetsFiltered.sort(compareDescending);
            } else {
                dataTweetsFiltered = isFollowersSortedAscending ? 
                    dataTweets.sort(compareAscending) : 
                    dataTweets.sort(compareDescending);
            }            
        };

        setDataTweets(dataTweetsFiltered)
        setSelected({});
    };

    return (
        <div className="App">
            <Header />

            <main>
                <CardDate />

                <div className="button-search" >
                    <button onClick={() => loadInfosCardTweets()} >Pesquisar</button>
                </div>

                <div className="container-cards-brief" >
                    <CardBriefTweet userTwitter={"queimada"} />

                    <CardBriefTweet userTwitter={"ventania"} />

                    <CardBriefTweet userTwitter={"alagamento"} />
                </div>

                <div className="main-content-filters">
                    <h4>Filtros:</h4>

                    <div className="container-inputs-select">
                        <InputSelect dados={["verificado", "não verificado"]} tipo={"relevância"} />

                        <InputSelect tipo={"localização"} />

                        <InputSelect dados={["mais seguidores", "menos seguidores"]} tipo={"seguidores"} />
                    </div>

                    <div className="button-filter" >
                        <button onClick={() => handleFilters()} >Filtrar</button>
                    </div>
                </div>

                <div className="main-content-tweets" >
                    <div className="container-cards-tweets" >
                        {dataTweets.slice(0, 4).map((item, index) => (
                            <CardTweet key={`${index} + ${item.id}`} tweet={item} />
                        ))}
                    </div>

                    <section></section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
