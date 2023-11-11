# sho_tips_html
This is my practice and portfolio.

## バージョン管理の方針
- 画像以外は src 内の資産を管理
- 画像のみ server 内の資産を管理

## ビルド
npx gulp (タスク名)

## jpg, png 画像の圧縮（webp化）
1. sec/assets/images 内に圧縮前の画像を配置
2. 下記コマンドを実行
    node task/webp.mjs
3. server/assets/images 内にwebp画像が生成される

## htmlやcss,jsを html内に include する
1. src/assets/includes の中に include させたいファイルを作成
    （例）header.html
2. htmlファイル内の任意の場所に以下記述
    @@include('./assets/includes/header.html')
3. コンパイルすると include が反映されたファイルが server に生成される