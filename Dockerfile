# 基本イメージを指定
FROM node:16

# アプリケーションの作業ディレクトリを作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 必要な依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# ポート3000でアプリケーションを実行
CMD ["npm", "start"]
