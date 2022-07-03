import { useEffect, useState } from "react";

import { instanceAxios } from "../../services/axios";
import { useGlobal } from "../../hooks/useGlobal";

import { capitalize, formatToLocaleNumber } from "../../utils/formats";

import "./styles.css";

export default function CardBriefTweet({ userTwitter }) {
    const [title, setTitle] = useState(0);
    // @ts-ignore
    const { setDataTweets } = useGlobal();

    useEffect(() => {
        async function loadInfosBriefCard() {
            try {
                const { data } = await instanceAxios.get(`/filtro/${userTwitter}`);

                data.forEach(element => {
                    if (element.verified) {
                        setTitle(prev => prev + 1);
                    }
                });
            } catch (error) {
                console.log(error.mensage);
            }
        };

        loadInfosBriefCard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleInfosBriefCard() {
        try {
            const { data } = await instanceAxios.get(`/filtro/${userTwitter}`);

            setDataTweets(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container-brief-card" onClick={() => handleInfosBriefCard()} >
            <h2>{formatToLocaleNumber(title ? title : 0)}</h2>

            <span>Relevant tweets</span>

            <span>{capitalize(userTwitter)}</span>
        </div>
    );
};
