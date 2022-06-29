/* import { useState } from "react"; */

export default function InputSelect({ dados, funcaoEstado, tipo }) {
    /* const [select, setSelect] = useState(""); */

    return (
        <div>
            <select /* value={select} */ onChange={e => funcaoEstado(e)} >
                <option value=""></option>
            </select>
        </div>
    );
};
