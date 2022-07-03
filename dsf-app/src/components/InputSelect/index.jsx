import { useGlobal } from "../../hooks/useGlobal";

import { capitalize } from "../../utils/formats";

import "./styles.css";

export default function InputSelect({ dados=[], funcaoEstado="", tipo, ...rest }) {
    // @ts-ignore
    const { selected, setSelected } = useGlobal();

    function handleChange(e) {
        if (!e.target.value) {
            return;
        }

        setSelected({
            ...selected,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="content-select" {...rest} >
            <select className="custom-select" name={tipo} value={selected[tipo]} onChange={e => handleChange(e)} >
                <option value="" >{capitalize(tipo)}</option>

                {dados?.map((item, index) => (
                    <option value={item} key={`${index} + ${item}`}>{capitalize(item)}</option>
                ))}
            </select>
        </div>
    );
};
