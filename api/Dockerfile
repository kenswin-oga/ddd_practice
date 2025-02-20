# Node.js の公式イメージを使用
FROM node:16

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY src ./src

COPY nodemon.json ./

# TypeScript をビルド
# RUN npm run build

# ポートを公開
EXPOSE 8000

# サーバーを起動
CMD ["npm", "start"]
