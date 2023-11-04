import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import globule from 'globule';

(async () => {
  // 変換前のファイルパス取得
  const imgPaths = globule.find({
    src: ['src/assets/images/**/*.{jpg,jpeg,png}']
  });
 
  // ファイルパス毎にWebPへの変換を行う
  for (const imgPath of imgPaths) {
    // 出力先パスの生成
    let destinations = imgPath.replace('src/', 'server/').split('/');
    destinations.pop();
    destinations = destinations.join('/');
 
    await imagemin([imgPath], {
      destination: destinations,
      plugins: [
        imageminWebp({quality: 80})
      ]
    });
  }
})();