# js-whereIsMyDog

![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Webpack](https://img.shields.io/badge/webpack-2E5E82?style=for-the-badge&logo=webpack&logoColor=white)
![Babel](https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)

<p>etc...</p>

## Link

[🐶 Where Is My Dog?](https://js-whereismydog.onrender.com/)

## Demo

![memoryGame](https://user-images.githubusercontent.com/75118062/225224460-4c41da99-960e-4214-ad90-5f6c6e489dc0.gif)

<br />

## What is this project?

**(EN)**

"Where Is My Dog?" is a fully responsive memory game built **from scratch using HTML, CSS, and vanilla JavaScript — no frameworks, no libraries.**

This project features:

- Flip animations and sound effects
- Timer and life count systems
- Clean and responsive UI for desktop and mobile

Everything — from game logic to UI behavior — was implemented manually, giving me a deep understanding of DOM manipulation, event handling, and game state management.

I especially focused on the **card design and flip animations**, creating an experience that feels like a real game.
**Built the entire build environment using Webpack and Babel myself.**

Enjoy the game!
<br />
<br />

**(JP)**

"Where Is My Dog?" は、**HTML・CSS・JavaScript だけで 1 から作り上げた記憶力ゲーム**です（フレームワーク・ライブラリ不使用）。

迷子になったあなたのワンちゃんを、あなたの記憶力で探し出してください 🐶🕵️‍♀️

このプロジェクトでは以下の機能を実装しています：

- カードの反転アニメーションと効果音
- タイマー＆ライフカウント機能
- スマホにも対応したレスポンシブデザイン

UI からゲームロジック、ビルド環境（Webpack・Babel）まですべて自分で構築しました。
特に**カードのデザインと反転アニメーション**にはこだわり、"本物のゲーム感" を演出しています。

ぜひプレイしてみてください！

<br />

## Features

**(EN)**

Here are some of the main features Where Is My Dog? offers:

✅ **Game Mechanics**

- Flip-to-reveal memory card game with **sound effects**
- **Timer** and l**ife system** to increase difficulty
- Simple UI that anyone can play — but not everyone can win!

✅ **Responsive Design**

- Fully playable on **desktop, tablet, and mobile**
- Touch-friendly interactions with smooth flip animations

✅ **Built from Scratch**

- No frameworks: pure **HTML, CSS, JavaScript**
- Custom-built environment using **Webpack and Babel**
- Manual **DOM manipulation** and **game state management** for deep learning
  <br />
  <br />

**(JP)**

「Where Is My Dog?」の主な特徴はこちら:

✅ **ゲームシステム**

- カードをめくって覚える神経衰弱のようなゲーム（**効果音つき！**）
- **タイマー & ライフシステム**で難易度アップ （お好みで調整可能）
- シンプルだけど意外と難しい、記憶力が試されるゲーム

✅ **レスポンシブ対応**

- **PC・スマホ・タブレット**どれでも快適プレイ
- タッチ操作もスムーズ！カードの反転アニメーション、サウンドエフェクト付き

✅ **ゼロから構築した開発環境**

- **HTML / CSS / JavaScript だけ**で開発
- **Webpack・Babel** を用いて自らビルド環境を構築
- DOM 操作やゲーム状態の管理もすべてオリジナル！
  <br />
  <br />

## What's Improved? 🧐

**(EN)**

After the initial deployment in early 2024, I revisited and significantly improved the codebase and structure to boost readability, maintainability, and long-term scalability:

🛠 **Environment Setup (2024/03)**-

- Built a custom development environment using **Webpack and Babel**
- Successfully deployed a pure JavaScript project without relying on any frameworks

🧩 **File Structure & Architecture**

- Refactored the entire project by **splitting logic into role-based files**
- Introduced **JavaScript classes** to improve modularity and data handling

❗️🆕 **Recent Refactoring (2025/05)**

**(EN)**

After the last refactoring, I made several improvements to enhance the code structure, user experience, and maintainability:

🎨 **Code Refactoring & Modularity**

- Replaced `setTimeout` with `async/await` to improve code readability and consistency across the project
- Refactored the logic inside `cardGenerate.js` by extracting complex forEach loops into separate functions for better readability and maintainability
- Introduced JavaScript classes to improve modularity and data handling across the game, making it easier to scale in the future

🗂 **File Structure & Organization**

- Reorganized the project’s folder structure by creating a `public` folder to house HTML and image files, making it easier to manage assets
- Moved images and assets that were previously hardcoded into CSS (e.g., cursor and background images) into the `src/assets` directory for cleaner, more maintainable code

⚙️ **Webpack Configuration**

- Updated the `webpack.config.js` to ensure proper handling of CSS paths and assets, allowing for more flexible and efficient project scaling

<br />
This version provides a more detailed explanation of the changes you've made, which will be helpful for users and other developers who may look at your code in the future.

<br />

**(JP)**

初期開発後、コードの構造、ユーザー体験、保守性を向上させるためにいくつかの改善を行いました：

🎨 **コードのリファクタリングとモジュール化**

- `setTimeout`を`async/await`に置き換えて、コードの可読性と一貫性を向上
- `cardGenerate.js`内の、カード生成のための複雑な`forEachループ`を別の関数に分割し、可読性と保守性を向上
- 今後の拡張が容易にするために、JavaScript クラスを導入し、ゲーム全体のモジュール化とデータ処理の改善を実現

🗂 **ファイル構成と整理**

- プロジェクトのフォルダ構成を整理し、`publicフォルダ`を作成して HTML と画像ファイルを管理したことにより、asset の管理が容易に
- CSS にハードコーディングされていた画像（例：カーソルの設定や背景画像）を`src/assets`ディレクトリに移動し、コードのクリーンアップと保守性を向上

⚙️ **Webpack の設定**

- `webpack.config.js`を更新し、CSS パスやアセットの取り扱いを適切に設定により、プロジェクトのスケーラビリティが向上

<br />

## Usage 🚀

### Prerequisites

- JavaScript knowledge (basic)
- [Node.js](https://nodejs.org/en) installed (required for build tools like Webpack and Babel)

### Setup

### 1. 📌 Clone the Repository

<pre><code class="language-bash">git clone https://github.com/sahoooii/js-whereIsMyDog.git

cd js-whereIsMyDog
</code></pre>

<br />

### 2. 📦 Install Dependencies

<pre><code class="language-bash">npm install</code></pre>

<br />

### 3. 🧩 Key Dependencies

This project uses several essential tools and libraries:

- [Webpack](https://webpack.js.org/) – for bundling the project
- [Babel](https://babeljs.io/) - for JavaScript transpilation
- [Font Awesome](https://fontawesome.com/search?q=dog&o=r) - for dog icons
- [Pixabay](https://pixabay.com/ja/sound-effects/search/dog/?duration=0-30) - for free game sound effects

<br />

### 4. ▶️ Run the Application

<pre><code class="language-bash">npm start</code></pre>

This will start the development server. Open your browser and go to:

<pre><code class="language-arduino">http://localhost:3000
</code></pre>

<br />

### 5. 🏗️ Build & Deploy

To build the application for production, run:

<pre><code class="language-bash">npm run build
</code></pre>

This will generate a dist/ folder with all bundled assets.
You can deploy the contents of this folder to **Netlify, Render, Vercel**, or any other static hosting service.

<br />

## 📘 Development Notes

**(EN)**

This project was created without relying on any frameworks or libraries — **just pure JavaScript**.
After gaining experience with modern frontend tools, I challenged myself to build this game using only vanilla JS. That decision made DOM manipulation and CSS styling more difficult, but it also allowed me to sharpen my foundational skills.

Throughout development, I focused on **writing clean, readable code, even as the logic grew more complex**.
On the UI side, I prioritized clarity and **user-friendliness at first glance**, while adding sound effects and playful interactions to enhance the overall game experience. I also had others test the game and used their feedback to make repeated improvements — which ultimately helped me shape a project I could be proud of.

Another big challenge was **setting up the development environment from scratch**. I taught myself how to use **Webpack**, adjusted various configurations through trial and error, and successfully deployed the project independently.
Finally, the May 2025 refactoring gave me the opportunity to **restructure my folder system and improve the overall code architecture**.

It was a meaningful and rewarding process that helped me consolidate everything I’ve learned so far.🐶✨

**(JP)**

このプロジェクトは、**ライブラリやフレームワークを一切使わず**、HTML・CSS・JavaScript のみで構築しました。React などのモダンな書き方に慣れた後に、あえて生の JavaScript だけで制作したことで、DOM 操作や CSS の細かい設定など、多くの苦労がありました。

その中でも特に意識したのは、**複雑になりがちなコードの可読性をどう確保するか**という点と、UI 面での **「初見の分かりやすさ」** や **「操作性のよさ」**。サウンドエフェクトを取り入れるなど、**“ゲームらしさ”** を演出する工夫を重ねました。実際に他の人にもプレイしてもらい、改善を繰り返しながら、納得のいく作品に仕上げることができました。

また、このプロジェクトをデプロイするために、**webpack や Babel の仕組みを 1 から学び**、独学でビルド環境を構築した経験は、開発者として大きな自信につながりました。
今回のリファクタリングでは、**フォルダ構成やコードの構造を整理し直す**ことで、知識のブラッシュアップにもつながり、非常に有意義な時間を過ごせたと感じています。🐶✨
