import { useState } from "react";

import { instanceAxios } from "../../services/axios";
import { useGlobal } from "../../hooks/useGlobal";

import "./styles.css";
// @ts-ignore
import Lens from "../../assets/lens.svg";
// @ts-ignore
import Bell from "../../assets/notification-bell.svg";
// @ts-ignore
import UserPic from "../../assets/user-pic.svg";
// @ts-ignore
import Gear from "../../assets/gear-icon.svg";
// @ts-ignore
import Saved from "../../assets/saved-icon.svg";
// @ts-ignore
import Logo from '../../assets/msf-logo.svg';
/* rotas.get("/busca/:termo", twitterQuery.buscaPorTermo) */
export default function Header() {
    const [inputSearch, setInputSearch] = useState("");
    // @ts-ignore
    const { setDataTweets } = useGlobal();

    async function handleSubmit(e) {
        e.preventDefault();

        if(!inputSearch) {
            return;
        }
        console.log(inputSearch);
        try {
            const { data } = await instanceAxios.get(`/busca/${inputSearch}`);
            console.log(data);
            setDataTweets(data);
        } catch (error) {
            console.log(error.message);
        }

        setInputSearch("");
    };

    function handleChange(e) {
        if(!e.target.value) {
            return;
        }
        
        setInputSearch(e.target.value);
    }

    return (
        <header className="header-container">
            <img src={Logo} alt='Logo MSF' className="header-logo" />

            <form className="input-header" onSubmit={e => handleSubmit(e)} >
                <img src={Lens} alt="Lente de Aumento" />
                <input placeholder="BUSCA" value={inputSearch} onChange={e => handleChange(e)} />
            </form>
            
            <div className="user-data">
                <img src={Bell} alt="Sino de Notificação" className="notification-icon"/>
                <img src={UserPic} alt="Foto de Perfil" className="user-profile-pic"/>
                <span>PROFILE</span>

                <div className="user-dropdown">
                    <div>
                        <img src={UserPic} alt="Foto de Perfil"/>
                        <span>PROFILE</span>
                    </div>
                    <div>
                        <img src={Saved} alt="Ícone de Bookmark"/>
                        <span>SAVED</span>
                    </div>
                    <div>
                        <img src={Gear} alt="ícone de Engrenagem"/>
                        <span>SETTINGS</span>
                    </div>
                    <span>EXIT</span>
                </div>
            </div>
        </header>
    );
};
