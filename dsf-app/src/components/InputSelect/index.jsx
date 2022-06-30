/* import { useState } from "react"; */

import "./styles.css";

export default function InputSelect({ dados, funcaoEstado, tipo }) {
    /* const [select, setSelect] = useState(""); */

    return (
        <div className="content-select" >
            <select className="custom-select" /* value={select} */ /* onChange={e => funcaoEstado(e)} */ >
                <option value="" selected disabled>{tipo}</option>
                {/* <option value="" selected disabled>desabilitado</option> */}
                <option value="teste 01" key="">Teste 01</option>
                <option value="teste 02" key="">Teste 02</option>
                <option value="teste 03" key="">Teste 03</option>
            </select>

            {/* <i></i> */}
        </div>
    );
};
