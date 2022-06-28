import './styles.css';
import Lens from '../../assets/lens.svg';
import Bell from '../../assets/notification-bell.svg';
import UserPic from '../../assets/user-pic.svg';
import Gear from '../../assets/gear-icon.svg';
import Saved from '../../assets/saved-icon.svg';

export default function Header() {

    return (
        <header className="header-container">
            <span>Logo</span>
            <div className="input-header">
                <img src={Lens} alt="Lente de Aumento" />
                <input placeholder="BUSCA" />
            </div>
            
            <div className="user-data">
                <img src={Bell} alt="Sino de Notificação" className='notification-icon'/>
                <img src={UserPic} alt="Foto de Perfil" className='user-profile-pic'/>
                <span>PROFILE</span>

                <div className="user-dropdown">
                    <div>
                        <img src={UserPic} alt='Foto de Perfil'/>
                        <span>PROFILE</span>
                    </div>
                    <div>
                        <img src={Saved} alt='Ícone de Bookmark'/>
                        <span>SAVED</span>
                    </div>
                    <div>
                        <img src={Gear} alt='ícone de Engrenagem'/>
                        <span>SETTINGS</span>
                    </div>
                    <span>EXIT</span>
                </div>
            </div>
        </header>
 )   
}