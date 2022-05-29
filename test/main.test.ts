import { describe, expect, it } from "vitest"

import mojigiri from "../src"

/* prettier-ignore */
export const example = "Introduction minista（ミニスタ）は、React の JSX で書けるスタティックサイトジェネレーターです。Next.js 風の快適な環境で開発しながら 100% 静的な出力を行えます。SaaS の web テンプレートコーディング業務を想定しているため、ビルド後のデータが綺麗（ヒューマンリーダブル）です。 History 2020 年頃にフロントエンドの主流が Next.js になりました。エディタの補完が優秀な React の JSX で書けて快適です。ただ、SPA を主軸としているため綺麗な HTML を納品する SaaS 開発には不向きです。 最適化されたハッシュ付与・コード分割・preload など、SPA 系フレームワークに実装されている静的書き出しは求めているものと違います。Nuxt が流行っている頃から気づいていました。 では、EJS・Pug・Nunjucks を引っ張り出しますか？いいえ、彼らにはとても助けられてきましたが、使い心地が大きく異なるため Next.js と並行して使い続けるのは辛いものがあります。 そこで、理想の形を求めてフレームワークを試作。React の renderToStaticMarkup() と webpack を組み合わせてパッケージ化したものが初期の minista です。 React(JSX)で書けるコーディング用 SSG - minista v0 React で書ける SSG 改善点と今後について - minista v1 仕様が単純で拡張しやすく多数の業務で活躍してくれました！ただ、webpack は起動時にすべてをバンドルしてメモリに乗せる設計なので、内容が膨らむほどパフォーマンスが悪化。プロジェクト終盤だと起動に 10 秒以上かかる場合もあり悩みました。 また、Next.js の使い勝手を再現できていない部分も気になっていました。例えば、ページは HTML 化する関数が省略不可、コンポーネントは自身の CSS を import できず、fetch からのダイナミックルーティングや Markdown 統合なんて気の遠くなる話に思えました。 そんなパフォーマンスと機能の問題をすべて解決したのが minista v2 です！webpack には感謝しつつも一旦別れを告げ Vite と esbuild を組み込みゼロから開発。 develop: v1-latest 9.1715s develop: v2.0.0 0.6006s (-93.45%) develop: v1-latest 10.7899s develop: v2.0.0 5.9628s (-44.73%) Example: { js: 319KB, css: 101KB, components: 38, pages: 15 } 開発サーバーは規模に関係なく 0.6 秒ほどで立ち上がり、本番ビルドの時間も半分近く短縮。設計を見直したことで Next.js との親和性も増し、よりストレスなく静的サイトを作れるようになりました。 Vite と esbuild を組み込み React 製 SSG を再構築 - minista v2"

describe("mergeConfig", () => {
  it("Test: Example", () => {
    const result = mojigiri("日本語テキスト100を「文字の種類」でsplitする。")

    //console.log("result", result)
    /* prettier-ignore */
    expect(result).toEqual(["日本語", "テキスト", "100", "を", "「", "文字", "の", "種類", "」", "で", "split", "する", "。"])
  })

  it("Test: One", () => {
    const text = "テキスト"
    const result = mojigiri(text)

    //console.log("result", result)
    expect(result).toEqual(["テキスト"])
  })

  it("Test: Null", () => {
    const text = ""
    const result = mojigiri(text)

    //console.log("result", result)
    expect(result).toEqual([])
  })
})
