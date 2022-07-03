/* import { useState } from "react"; */
import { format, subDays } from "date-fns";

import { useGlobal } from "../../hooks/useGlobal";

import InputSelect from "../InputSelect";

import "./styles.css";

import { categories } from "../../data/categories";

export default function CardDate() {
    /* const [dateForm, setDateForm] = useState({
        starDate: "",
        endDate: "",
    }); */
    // @ts-ignore
    const { dateForm, setDateForm /* dataTweets, setDataTweets */ } = useGlobal();

    const dateNow = format(new Date(), "yyyy-MM-dd");
    const dateMin = format(subDays(new Date(), 6), "yyyy-MM-dd");

    function handleChange(e) {
        setDateForm({
            ...dateForm,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="container-date-card" >
            <span>O que aconteceu em</span>

            <input
                id="startDate"
                type="date"
                name="startDate"
                min={dateMin}
                max={dateNow}
                value={dateForm.startDate}
                onChange={e => handleChange(e)}
                placeholder="Data de início"
                required
            />

            <input
                id="endDate"
                type="date"
                name="endDate"
                min={dateMin}
                max={dateNow}
                value={dateForm.endDate}
                onChange={e => handleChange(e)}
                placeholder="Data de fim"
                required
            />

            <span>sobre</span>

            {/* <InputSelect dados={categories} style={{ width: "280px" }} tipo={"escolher o assunto"} /> */}
            <InputSelect dados={categories} style={{ width: "280px" }} tipo={"assunto"} />
        </div>
    );
};
