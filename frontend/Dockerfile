# nginx の公式イメージを使用
FROM nginx:alpine

# nginx の設定ファイルをコンテナにコピー
COPY nginx.conf /etc/nginx/nginx.conf

# 静的ファイルを nginx の web サーバーのルートにコピー
COPY ./static /usr/share/nginx/html

# ポートを公開（nginx のデフォルトポート）
EXPOSE 80
