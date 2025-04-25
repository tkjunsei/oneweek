# oneweek
<par>
theater-ad/
├── public/                   ← 公開される静的ファイル（index.html、画像、favicon など）
│   └── index.html            ← アプリのエントリーポイント
├── src/
│   ├── assets/               ← 画像やフォント、スタイルなどの静的リソース
│   │   └── logo.png          ← ロゴなど
│   ├── components/           ← 共通コンポーネント（ヘッダー、フッターなど）
│   │   ├── Header.js         ← ヘッダー（ナビゲーションバーなど）
│   │   └── Footer.js         ← フッター
│   ├── pages/                ← 各ページ（TOP, News, Schedule&Ticket, Access, 団体情報）
│   │   ├── Top.js           ← TOPページ（公演の概要）
│   │   ├── News.js           ← Newsページ（お知らせ）
│   │   ├── ScheduleAndTicket.js  ← Schedule&Ticketページ（スケジュール、申込）
│   │   ├── Access.js         ← Accessページ（アクセス情報）
│   │   └── About.js          ← 団体情報ページ（公演団体情報）
│   ├── App.js                ← ルーティングとメインレイアウト
│   ├── index.js              ← アプリのエントリーポイント（Reactのレンダリング）
│   └── styles/               ← CSS（またはstyled-components）でのスタイル
│       ├── App.css           ← アプリ全体のスタイル
│       └── Home.css          ← Homeページのスタイル
└── package.json              ← プロジェクトの設定ファイル
<par>