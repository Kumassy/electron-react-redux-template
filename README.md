# electron-react-redux-template
electron の renderer 側でのみ React + Redux 構成をとるのは比較的容易だが、main プロセスと store を共有するのは少し工夫が必要。そこで、`electron-redux` を取り入れた。

主に以下のパッケージで構成されている：
- electron
- react
- redux
- electron-redux

以下の機能が使える：
- build
- packaging
- test
- lint

## TODO
- [ ] linter エラーをなおす
- [ ] build/package.json の書き方
- [ ] webpack/config で development のときは compression しない
- [ ] renderer のホットリロード
- [ ] main/index.js のホットリロード
