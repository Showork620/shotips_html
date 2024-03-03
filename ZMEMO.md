# どういうふうにしようか

- サーバ
    https://www.value-domain.com/web.php
    http://showork620.s324.xrea.com/
    http://showork620.s324.xrea.com/?_gl=1*v1j3aj*_ga*NDQwNTE3MDQ5LjE2OTk3MDcyNzM.*_ga_J8YE7Q8ZQD*MTcwMTYxMDk1MC42LjEuMTcwMTYxMTEyNC4wLjAuMA..&_ga=2.75427986.1276762286.1701610952-440517049.1699707273
    showork/87noPapa

## 適当にキーワードを羅列

- tipsブログ
- もっと使いやすいtips
- アクセシビリティを完璧にやる
- critical.cssを採用する（include利用して）
- cssの付け替えでガラッと変えたい
- FLOCSSを深めるぞ

## コンテンツ荒削り
- アクセシビリティとマークあっぷ
- パフォーマンス
- chatGPTの使い方
- ゼロからサイト作る
    - github
    - gulp
- プログラミング学習

## サポート範囲などの方針
- ブラウザの拡大機能について
- Chromeの文字「極大」に対応
- スマホのsafari 200%に対応
- ダークモードに対応

@s324.xrea.com


## これを作る！

### 参考

- アクセシビリティガイドライン
    https://a11y-guidelines.freee.co.jp/intro/intro.html

- FLOCSS参考
    https://qiita.com/super-mana-chan/items/644c6827be954c8db2c0
- BEM参考
    https://qiita.com/takahirocook/items/01fd723b934e3b38cbbc
- ダークモード
    https://www.webcreatorbox.com/tech/dark-mode
    rootで変数使ってあれする
- 画像の圧縮まとめ
    https://qiita.com/manabuyasuda/items/01a76204f97cd73ffc4e
- いろんなUIのaria対応方法
    https://w3c.github.io/aria-practices/

- アクセシビリティについて「スクリーンリーダーは相互運用性に欠ける」
    https://www.mitsue.co.jp/knowledge/blog/a11y/

- 最強の画像リサイズ
    https://saruwakakun.com/tools/image-resize/
- vsc emmet（!ショートカット）完全版
    https://junpei-sugiyama.com/emmet/
- favicon
    https://zenn.dev/pacchiy/articles/e4dcd7bd29d387
- やばい自主勉強
    https://cs50.jp/x/2021/week0/
- おもしろ記事たくさん
    https://dev.classmethod.jp/articles/using-gpt-4-vision-previewapi-to-generate-md-and-json-from-images/

- vsCode最強設定
    https://shogo-log.com/vscode/

- 参考にしたいサイト２
    https://glazestyle.com/bolg/word-separators/
- アクセシビリティ準拠で作られたサイト
    https://www.mitsue.co.jp/service/accessibility/diagnostics/

### サイトマップ草案
- header nav
    - about
        このサイトについて
    - contact
        お仕事の依頼について
    - top

    - gallery
        生成AIの実験

### scssについて
- 不要なcssを読み込まないというパフォーマンス観点
- scssの調整の影響範囲が明確な保守の観点
以上2点から project は 同じ名前を持つページでしか使用しない

各ページのファーストビューは critical.css で表現される

### BEMの記法
- block
    .c-hogeBox
- element
    .c-hogeBox__title
    .c-hogeBox__rightSide
    __+ローワーキャメルで表現

- modefier
    .c-hogeBox.isRed
    .c-hogeBox__title.isRed
    .is+ローワーキャメルで表現

- status
    is-active
- javaScript
    js-


## その他

オシャレな6桁
807172
晴れない夏


### AMP
モバイルを高速化する仕組み
### 他にも
robots.txt


### フッターの位置きめ
dic.container
    header
    main
    footer

.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
}


闇ありますかと聞かれた
壁を感じると

下流階級と中流階級の壁です

下流でも高校受験くらいなら地頭で対処できるけど
ある程度の偏差値以上の高校に入ると
中流以上の割合が突然高くなる
そこで周りとのギャップを痛感してキツくなる


塾で「先生俺と似てると」
万引きはスリルのためにやってると言われた
メディアは中流階級のためのものだった
3:3:3

下流はもう中流の生活なんていらない
そんなものがなくても幸せになる方法を考えた

ものを作ること、作られたものを見ること

