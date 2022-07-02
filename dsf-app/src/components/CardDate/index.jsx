import { format } from "date-fns";

import InputSelect from "../InputSelect";

import "./styles.css";

export default function CardDate() {
    /* const dateNow = new Date();
    console.log(dateNow);
    const dateNowFormatted = new Intl.DateTimeFormat("pt-BR").format(dateNow);
    console.log(dateNowFormatted); */
    const dateNow = format(new Date(), "yyyy-MM-dd");
    console.log(dateNow);

    return (
        <div className="container-date-card" >
            <span>O que aconteceu em</span>

            <input id="starDate" type="date" name="starDate" min="" value="" /* onChange={} */ placeholder="Data de início" required />
            
            <input id="endDate" type="date" name="endDate" value={dateNow} /* onChange={} */ placeholder="Data de fim" required />

            <span>sobre</span>

            <InputSelect tipo={"Escolher tema"} style={{ width: "280px" }} />
        </div>
    );
};
