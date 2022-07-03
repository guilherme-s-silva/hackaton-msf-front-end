import "./styles.css";
// @ts-ignore
import DoubleArrows from "../../assets/double-arrows.svg";
// @ts-ignore
import VerifiedIcon from "../../assets/verified-icon.svg";
// @ts-ignore
import FollowersIcon from "../../assets/followers-icon.svg";
// @ts-ignore
import LinkIcon from "../../assets/link-icon.svg";
// @ts-ignore
import PinIcon from "../../assets/pin-icon.svg";
// @ts-ignore
/* import ProfilePic from "../../assets/profile-pic.jpg"; */
// @ts-ignore
import CopyIcon from "../../assets/copy-icon.svg";
// @ts-ignore
import SavedIcon from "../../assets/saved-icon.svg";

// @ts-ignore
export default function CardTweet({ tweet }) {
    return (
        <div className="card-tweet-container">
            <div className="card-tweet-content">
                <div className="tweet-content">
                    <div className="tweet-image">
                        {/* <img src={ProfilePic} alt="Foto de perfil" /> */}
                        <img src={tweet.profile_image_url} alt="Foto de perfil" />
                    </div>

                    <div className="tweet-description">
                        <div className="tweet-author">
                            {/* <h3>LOREM IPSUM IPSUM</h3> */}
                            <h3>{tweet.name}</h3>

                            <img src={CopyIcon} alt="Ícone de copiar"/>

                            <img src={SavedIcon}  alt="Ícone de salvar"/>
                        </div>
                        
                        {/* <h4>@loremipsum</h4> */}
                        <h4>{`@${tweet.username}`}</h4>
                        
                        {/* <p>
                            Bio Etiam vitae hendrerit nisl. Donec  libero sodales, efficitur nunc vitae, egestas enim. Vivamus eget aliquet diam.
                        </p> */}
                        <p className="tweet-text" >
                            {tweet.text}
                        </p>
                    </div>
                </div>
            </div>

            <div className="card-tweet-info">
                <div>
                    <img src={DoubleArrows} alt="Setas para cima" />

                    <p>Highest</p>
                </div>

                <div>
                    <img src={VerifiedIcon} alt="Ícone de verificado" />

                    {/* <p>Verificado</p> */}
                    <p>{tweet.verified ? "Verificado" : "Não verificado"}</p>
                </div>

                <div>
                    <img src={FollowersIcon} alt="Ícone de seguidores"/>

                    {/* <p>1000 Followers</p> */}
                    <p>{tweet.public_metrics.followers_count}</p>
                </div>

                <div>
                    <img src={LinkIcon} alt="ícone de link"/>

                    {/* <p>LoremIpsum.ip</p> */}
                    <a href={tweet.url} >{tweet.url}</a>
                </div>

                <div>
                    <img src={PinIcon} alt="Pin"/>

                    {/* <p>Lorem ipsum, ipsum</p> */}
                    <p>{tweet.location}</p>
                </div>
            </div>
        </div>
    );
};
