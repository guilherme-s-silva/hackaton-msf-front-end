import { useState } from "react";

export function useGlobalProvider() {
    const [dataTweets, setDataTweets] = useState([]);
    const [dateForm, setDateForm] = useState({
        startDate: "",
        endDate: "",
    });
    /* const [selected, setSelected] = useState(""); */
    const [selected, setSelected] = useState({});
    const [dataBriefCards, setDataBriefCards] = useState({});

    return {
        dataTweets,
        setDataTweets,
        dateForm, 
        setDateForm,
        selected, 
        setSelected,
        dataBriefCards, 
        setDataBriefCards,
    };
};
