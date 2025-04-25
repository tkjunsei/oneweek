import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup() {
    const [isVisible, setIsvisible] = useState(false);

    useEffect(() => { 
        if (!localStorage.getItem("popup-consent")) {
            setIsvisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("popup-consent", "true");
        setIsvisible(false);
    };

    if(!isVisible) {
        return null;
    }

    return (
        <div className="popup-popup">
            <div className="popup-content">
                <p>
                    このサイトではクッキーは使用していません．
                    <br />ところで，色んなところでCookieって見るけどなんだろうね．
                    <br />ブラウザに保存されるユーザー情報みたいなものだよ．
                    <br />これを保存すると次回から入力の手間が省けたり色々便利なんだってさ．やったね．
                </p>
                <button onClick={handleAccept}>同意する（形だけお願い）</button>
            </div>
        </div>
    );
}

export default Popup;