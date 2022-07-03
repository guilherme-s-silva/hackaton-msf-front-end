/* import { useEffect, useState } from "react"; */
import { useGlobal } from "../../hooks/useGlobal";

import { capitalize } from "../../utils/formats";

import "./styles.css";

export default function InputSelect({ dados=[], funcaoEstado="", tipo, ...rest }) {
    /* const [select, setSelect] = useState(""); */
    // @ts-ignore
    const { selected, setSelected } = useGlobal();

    /* useEffect(() => {
        console.log({select: select});
    }, [select]); */

    function handleChange(e) {
        if (!e.target.value) {
            return;
        }

        /* setSelected(e.target.value); */
        setSelected({
            ...selected,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="content-select" {...rest} >
            <select className="custom-select" name={tipo} value={selected[tipo]} onChange={e => handleChange(e)} >
                <option value="" /* disabled */ >{capitalize(tipo)}</option>

                {dados?.map((item, index) => (
                    <option value={item} key={`${index} + ${item}`}>{capitalize(item)}</option>
                ))}
            </select>
        </div>
    );
};
