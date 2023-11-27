# どういうふうにしようか

- サーバ
    https://www.value-domain.com/web.php
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

- デザイン参考
    https://www.coprec.co.jp/vision
- アクセシビリティガイドライン
    https://a11y-guidelines.freee.co.jp/intro/intro.html
- アクセシビリティ準拠で作られたサイト
    https://www.mitsue.co.jp/service/accessibility/diagnostics/
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


### よくあるNGメモ
↓NG
<section>
    <h1>最大見出し〜ハリー・ポッター</h1>
</section>
<article>
    <h2>第二見出し〜賢者の石</h2>
    <div>
        <p></p>
        <p></p>
        <p></p>
    </div>
</article>
<article>
    <h2>第二見出し〜秘密の部屋</h2>
    <div>
        <p></p>
        <p></p>
        <p></p>
    </div>
</article>

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