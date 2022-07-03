import { useEffect, useState } from "react";

import { instanceAxios } from "../../services/axios";
import { useGlobal } from "../../hooks/useGlobal";

import { capitalize, formatToLocaleNumber } from "../../utils/formats";

import "./styles.css";

/* import { dataTest as data } from "../../data/dataTest"; */

export default function CardBriefTweet({ userTwitter }) {
    const [title, setTitle] = useState(0);
    // @ts-ignore
    const { /* dataBriefCards, setDataBriefCards, */ setDataTweets } = useGlobal();

    useEffect(() => {
        async function loadInfosBriefCard() {
            try {
                const { data } = await instanceAxios.get(`/filtro/${userTwitter}`);

                /* setDataBriefCards({
                    ...dataBriefCards,
                    [userTwitter]: data,
                }); */

                data.forEach(element => {
                    if (element.verified) {
                        setTitle(prev => prev + 1);
                    }
                });
                /* console.log({[userTwitter]: data}); */
            } catch (error) {
                console.log(error.mensage);
            }
        };

        loadInfosBriefCard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleInfosBriefCard() {
        /* console.log({userTwitter: userTwitter}); */
        try {
            const { data } = await instanceAxios.get(`/filtro/${userTwitter}`);

            setDataTweets(data);
        } catch (error) {
            console.log(error.message);
        }
        /* console.log(dataBriefCards); */
    };

    return (
        <div className="container-brief-card" onClick={() => handleInfosBriefCard()} >
            <h2>{formatToLocaleNumber(title ? title : 0)}</h2>

            <span>Relevant tweets</span>

            <span>{capitalize(userTwitter)}</span>
        </div>
    );
};
