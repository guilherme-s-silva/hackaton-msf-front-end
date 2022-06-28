import './styles.css';
import DoubleArrows from '../../assets/double-arrows.svg';
import VerifiedIcon from '../../assets/verified-icon.svg';
import FollowersIcon from '../../assets/followers-icon.svg';
import LinkIcon from '../../assets/link-icon.svg';
import PinIcon from '../../assets/pin-icon.svg';
import ProfilePic from '../../assets/profile-pic.jpg';
import CopyIcon from '../../assets/copy-icon.svg';
import SavedIcon from '../../assets/saved-icon.svg';

export default function CardTweet() {
    return (
        <div className='card-tweet-container'>
            <div className='card-tweet-content'>
                <div className='tweet-content'>
                    <div className='tweet-image'>
                        <img src={ProfilePic} alt='Foto de perfil'/>
                    </div>
                    <div className='tweet-description'>
                        <div className='tweet-author'>
                            <h3>LOREM IPSUM IPSUM</h3>
                            <img src={CopyIcon} alt="Ícone de copiar"/>
                            <img src={SavedIcon}/>
                        </div>
                        
                        <h4>@loremipsum</h4>
                        
                        <p>
                            Bio Etiam vitae hendrerit nisl. Donec  libero sodales, efficitur nunc vitae, egestas enim. Vivamus eget aliquet diam.
                        </p>
                    </div>
                    
                </div>
                
            </div>
            <div className='card-tweet-info'>
                <div>
                    <img src={DoubleArrows} alt="Setas para cima" />
                    <p>Highest</p>
                </div>
                <div>
                    <img src={VerifiedIcon} alt="Ícone de verificado" />
                    <p>Verificado</p>
                </div>
                <div>
                    <img src={FollowersIcon} alt="Ícone de seguidores"/>
                    <p>1000 Followers</p>
                </div>
                <div>
                    <img src={LinkIcon} alt="ícone de link"/>
                    <p>LoremIpsum.ip</p>
                </div>
                <div>
                    <img src={PinIcon} alt="Pin"/>
                    <p>Lorem ipsum, ipsum</p>
                </div>
            </div>
            
        </div>
    )
}