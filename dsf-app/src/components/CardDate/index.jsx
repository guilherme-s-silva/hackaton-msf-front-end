import InputSelect from "../InputSelect";
import "./styles.css";

export default function CardDate() {
    return (
        <div className="container-date-card" >
            <span>O que aconteceu em</span>

            <input id="starDate" type="date" name="starDate" value="" /* onChange={} */ placeholder="Data de início" required />
            
            <input id="endDate" type="date" name="endDate" value="" /* onChange={} */ placeholder="Data de fim" required />

            <span>sobre</span>

            <InputSelect tipo={"Escolher tema"} style={{ width: "280px" }} />
        </div>
    );
};
