import React, {useState} from "react";
import Slider from 'react-slick';

import photo from '../../assets/logo_trans_pink.png';
import jhonImage from '../../assets/jhon_frame.png';
import kyashiiImage from '../../assets/kyashii_frame.png';
import tomImage from '../../assets/tom_frame.png';

import "./ForTop.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function TopView(){
    return (
        <div className="view-content">
            {/* <h1>Top View</h1> */}
            <img className="view-img" src={photo} alt="Top View" />
            <h1 className="view-title">『𝓗.𝓑.𝓓.』</h1>
        </div>
    );
}

function TopNews() {
    return (
        <div className="news-content">
            <h3>News</h3>
            <div className="news-item">新たなグルメ拠点誕生?　藤原記念館に飲食店オープン</div>
            <div className="news-item">【号外】合C内で放火計画か？リスクの高さに冷静さ戻り断念</div>
            <div className="news-item">久々の訪問で驚きの美味しさ　がっとん、やはり侮れず</div>
            <div className="news-item">かつて人が暮らした森の洋館　夜な夜な聞こえる“話し声”の謎</div>
        </div>
    );
}

function TopIntro() {
    return(
        <div className="intro-content">
            <h1>Introduction</h1>
            <div className="intro-text">一週間企画『H.B.D.』が日本の演劇シーンを震撼させる！

幽霊たちが織りなす幻想的な世界を舞台に繰り広げられる異色の『H.B.D.』。

その歴史は2025年、神奈川の合Cで幕を開けた。開幕と同時に観客を魅了し、瞬く間に日本全国で大ヒットを記録したかった！</div>


        </div>
    );
}

function TopStory() {
    return(
        <div className="story-content">
            <h1>あらすじ</h1>
            <div className="story-text">
            死後も楽しく過ごすトムとキャシー。トムは熊の人形に、キャシーは一枚の絵画に憑依し夜な夜なおしゃべりを楽しんでいる。
            <br></br>そんな彼らの日常に現れるのは、ピエロの人形になった「ジョン」
            <br></br>彼の登場は、幽霊たちの心に新たな火種を灯す...
            </div>
        </div>
    );
}

function TopComment() {
    return(
        <div className="comment-content">
            <h1>来場者からのコメント</h1>
            <div className="comment-grid">
                <div className="comment-item">舞台のセットが本当に幻想的で、異世界に迷い込んだような不思議な気持ちになりました。</div>
                <div className="comment-item">テーマがすごく深い！死後の世界について考えさせられたし、未練を抱えたままでは生きていけないというメッセージが心に残りました。</div>
                <div className="comment-item">幽霊のキャラクターたちが抱える未練に共感してしまい、涙が止まりませんでした。</div>
                <div className="comment-item">キャシーとトムの関係が非常に感情的で、亡くなった後でもあんなに強い絆を持っているんだと思うと切なくなりました。</div>
                <div className="comment-item">あの古びた屋敷、むしろ売ったら大金になるんじゃないかと思った。幽霊専用のホテルとか作ったら流行りそう。</div>
                <div className="comment-item">ジョンのピエロが登場した瞬間、僕は思わず手を振って『君も仕事頑張ってるんだね！』って応援した。頑張ってほしい。</div>
            </div>
        </div>
    );
}


// スライドに表示する画像と説明文
const slideData = [
    {
      img: jhonImage,
      text: 'これは画像1の説明文です。',
    },
    {
      img: kyashiiImage,
      text: 'これは画像2の説明文です。',
    },
    {
      img: tomImage,
      text: 'これは画像3の説明文です。',
    },
];

function TopGallery() {
const settings = {
    dots: true, // 下にドットナビゲーションを表示
    infinite: true, // 無限スライド
    speed: 500, // スライドの移動速度
    slidesToShow: 1, // 一度に表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速度
};

return (
    <div className="gallery-content">
    <Slider {...settings}>
        {slideData.map((slide, index) => (
        <div key={index} className="slide">
            <img src={slide.img} alt={`Slide ${index + 1}`} />
            <p>{slide.text}</p>
        </div>
        ))}
    </Slider>
    </div>
);
}



function TopStaff() {
    return (
        <div className="staff-content">
            <h1>Staff</h1>
            <div className="credits">
                <div className="role center">
                    <h2>企画責任</h2>
                    <p>藤平智行</p>
                </div>

                <div className="role center">
                    <h2>脚本・舞台監督</h2>
                    <p>蓮見勇太</p>
                </div>

                <div className="roles-grid">
                    <div className="role">
                        <h3>美術</h3>
                        <p>安部拓寛</p>
                        <p>正岡裕二 内田大樹 蓮見勇太 川下和香奈 山田航太郎 德光惇晟 藤平智行</p>
                    </div>
                    <div className="role">
                        <h3>音響</h3>
                        <p>山田悠輔</p>
                        <p>関美穂 上野美鈴 岩﨑萌</p>
                    </div>
                    <div className="role">
                        <h3>照明</h3>
                        <p>林清香</p>
                        <p>鈴木俊輔 大橋優菜 西脇未織</p>
                    </div>
                    <div className="role">
                        <h3>制作</h3>
                        <p>山口寛永</p>
                        <p>関美穂 岩原豪 内山祥波 織邊弘士郎 坂中伸治 神野花音 野村優翔 星谷真名 楊文果 三宅ひかり</p>
                    </div>
                </div>
            </div>
        </div>
    );
}




export {TopView, TopNews, TopIntro, TopStory, TopComment, TopGallery, TopStaff};