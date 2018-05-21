module.exports = {
  context: __dirname, // 모듈 파일 폴더
  entry: { // 엔트리 파일 목록
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/dist', // 번들 파일 폴더
    filename: '[name].bundle.js' // 번들 파일 이름 규칙
  }
}