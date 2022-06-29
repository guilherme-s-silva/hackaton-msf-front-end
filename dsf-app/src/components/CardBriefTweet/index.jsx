import { formatToLocaleNumber } from "../../utils/formats";

import "./styles.css";

export default function CardBriefTweet({ title, userTwitter }) {
    return (
        <div className="container-brief-card" >
            <h2>{formatToLocaleNumber(title)}</h2>

            <span>Relevant tweets</span>

            <span>{userTwitter}</span>
        </div>
    );
};
