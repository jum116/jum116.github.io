// ===============================
// プロフィール
// ===============================
const profile = {
    introduction: `
        <h3>学校・開発経験</h3>
        ・バンタンゲームアカデミー ゲームプログラマー専攻（2027年3月卒業予定）<br>
        ・専門学校入学後からゲーム開発を学び始め、現在3年目です。<br>
        ・UnityとC#を中心にゲーム制作を行っています。<br>
        ・個人制作だけでなく、チームでのゲーム制作も経験しました。<br>

        <br>

        <h3>好きなゲーム</h3>
        ・スマホゲームが好きです。<br>
        ・自分のペースでじっくり考えながら遊べるゲームが好きです。<br>
        ・特にタワーディフェンスゲームをよく遊んでいます。<br>
    `,

    radarTitle: "タイトル",

    radarLabels: ["1", "2", "3", "4", "5"],

    radarValues: [20, 40, 60, 80, 100]
};


// ===============================
// 個人制作
// ===============================
const projects = [
    {
        id: "gachimamori",
        title: "ガチまもりファーマーズ",

        video: "../video/ガチまもりファーマーズ.mp4",
        poster: "../image/ガチまもりファーマーズ.png",

        purpose: "授業で学んだ「経路探索アルゴリズム(A*)」を実際のゲーム制作に応用することを目的に制作",
        period: "2025年10月～2025年11月（約1か月）",
        engine: "Unity(6000.2.6f2)",
        language: "C#",
        genre: "タワーディフェンス",

        github: "https://github.com/jum116/GachimamoriFarmers",
        download: "https://github.com/jum116/GachimamoriFarmers/raw/main/Release/GachimamoriFarmers.zip",

        issues: [
            {
                issue: "課題を書く",
                detail: "詳しく書く",
                solution: "解決方法を書く",
                solutionDetail: "詳しく書く"
            }
        ],

        learning: "本制作を通して得た学びを書く"
    },

    {
        id: "burgerqueue",
        title: "BURGER QUEUE",

        video: "../video/バーガーキュー.mp4",
        poster: "../image/バーガーキュー.png",

        purpose: "授業で経験のある「3Dゲーム」を自作し、3Dゲーム開発の基礎の習得を目的に制作",
        period: "2025年7月～2025年9月（約3か月）",
        engine: "Unity(6000.2.6f2)",
        language: "C#",
        genre: "クッキングアクション",

        github: "https://github.com/jum116/BUGERQUEUE",
        download: "https://github.com/jum116/BUGERQUEUE/raw/main/Release/BUGERQUEUE.zip",

        issues: [
            {
                issue: "食材の重なり管理",
                detail: "バンズや皿に具材を重ねる際、位置ずれや重複登録が発生した。",
                solution: "リスト管理とオフセット計算",
                solutionDetail: "具材をListで管理し、追加時にオフセットを計算して配置。同一具材の重複チェックも行い、整った見た目を維持した。"
            }
        ],

        learning: ""
    },

    {
        id: "gachatown",
        title: "ガチャタウン",

        video: "../video/ガチャタウン.mp4",
        poster: "../image/ガチャタウン.png",

        purpose: "「ガチャシステム」の実装経験とScriptableObjectを用いたデータ管理スキルを習得することを目的に制作",
        period: "2026年1月～2026年2月（約1か月）",
        engine: "Unity(6000.2.6f2)",
        language: "C#",
        genre: "放置ゲーム",

        github: "https://github.com/jum116/GachaTown",
        download: "https://github.com/jum116/GachaTown/raw/main/Release/GachaTown.zip",

        issues: [
            {
                issue: "ガチャ演出の表現",
                detail: "ガチャを引いた時に、建物が出てくる演出をUnityのUI Toolkitで自然に見せるのが難しかった。特に、カプセルが左右に動いたり壊れたりする動きを表現するのが課題だった。",
                solution: "USSを使ったアニメーション",
                solutionDetail: "USSを使ってアニメーションを作成。カプセルの移動・回転・破壊演出をUSSのスタイルに定義し、VisualElementにスタイルを付け替えるだけで簡単に演出できるように工夫した。"
            }
        ],

        learning: "本制作を通して得た学びを書く"
    },

    {
        id: "sworddefender",
        title: "ソードディフェンダー",

        video: "../video/ソードディフェンダー.mp4",
        poster: "../image/ソードディフェンダー.png",

        purpose: "Unityの「UI Toolkit」を活用し、UI設計や実装スキルの習得を目的に制作",
        period: "2024年12月～2025年2月（約3か月）",
        engine: "Unity(6000.2.6f2)",
        language: "C#",
        genre: "タワーディフェンス",

        github: "https://github.com/jum116/SwordDefender",
        download: "https://github.com/jum116/SwordDefender/raw/main/Release/SwordDefender.zip",

        issues: [
            {
                issue: "UI Toolkitの要素が直接編集できず、構造理解に苦戦したこと",
                detail: "UI Builder上ではスライダーやタブの一部要素がグレーアウトしており、従来のUGUIのように直感的な編集ができなかった。そのため、どのように見た目を変更すべきか理解するまでに時間を要した。",
                solution: "USSによるスタイル制御と要素構造の把握",
                solutionDetail: "UI ToolkitはUSSでスタイルを制御する設計であることを理解し、要素の階層構造を確認しながらクラスを定義してスタイルを適用した。内部構造を把握した上で必要な要素に対してUSSを適用することで、意図したデザインに調整できるようになった。"
            },
            {
                issue: "UIとゲーム内データの整合性維持",
                detail: "レベルやコインなどの値をUI上で変更する際、表示と内部データが不整合を起こさない仕組みが必要だった。",
                solution: "ScriptableObjectとデータバインディングの活用",
                solutionDetail: "UIで扱う数値をScriptableObjectで一元管理し、データバインディングによってUIとデータを連動させた。これにより、表示と内部ロジックを分離しつつ、安全に値を更新できる構造を構築した。"
            },
            {
                issue: "ボタン操作時のフィードバック不足",
                detail: "標準状態のボタンでは押下時の変化がなく、操作している実感が弱いという課題があった。",
                solution: "USSで押下時スタイルを定義",
                solutionDetail: "ボタン専用のクラスをUSSで定義し、押下時のみサイズを拡大するスタイルを適用。視覚的な変化を加えることで、操作感とUI全体の完成度を向上させた。"
            }
        ],

        learning: "UI ToolkitはUGUIとは設計思想が異なり、スタイル（USS）とロジックを分離して管理することが重要であると学んだ。要素構造を理解した上でスタイルを適用することで、再利用性と拡張性の高いUI設計が可能になると実感した。"
    }
];


// ===============================
// チーム制作
// ===============================
const teamProjects = [
    {
        id: "wavebreaker",
        title: "WAVEブレイカー（チーム制作）",

        video: "../video/WAVEブレイカー.mp4",
        poster: "../image/WAVEブレイカー.png",

        purpose: "文化祭展示を目的に制作し、チームでのプログラム実装や「Git」を用いたソース共有や管理を行った",
        period: "2024年10月～2024年11月（約1か月）",
        engine: "Unity(6000.2.6f2)",
        language: "C#",
        genre: "アクション",

        teamSize: "プログラマー2名（自分含む）",

        role: [
            "敵・ボスキャラクター・Wave制御システムの実装",
            "ステート管理による敵AIの行動遷移（待機・追跡・攻撃・被弾・死亡）の実装",
            "Animatorを用いたアニメーションの作成および状態遷移の制御",
            "プレイヤーとの当たり判定・ダメージ処理の実装",
            "Waveによる敵出現管理を実装し、進行に応じて敵の種類や出現数を調整"
        ],

        github: "https://github.com/jum116/Festival",
        download: "https://github.com/jum116/Festival/raw/main/Release/Festival.zip",

        issues: [
            {
                issue: "敵の行動分岐が複雑化し、可読性が低下した",
                detail: "攻撃条件や追跡条件、被弾処理などを個別のif文で管理していたため、処理の追加や調整を行うたびに条件分岐が増えていった。その結果、挙動の把握が難しくなり、意図しない状態遷移が発生することがあった。",
                solution: "ステートパターンを導入し、状態ごとに処理を分離",
                solutionDetail: "Idle・Chase・Attack・Hit・Dieの5つのステートをenumで定義し、ChangeState()によって遷移を管理した。また、stateEnterフラグを用いて『状態に入った瞬間のみ実行する処理』を分離した。これにより処理の見通しが良くなり、挙動の追加や修正を安全に行えるようになった。"
            },
            {
                issue: "Wave進行に伴う難易度設計のバランス調整",
                detail: "敵数のみを増やす設計では、後半に敵を1発で倒せてしまい、攻撃力を強化しても戦闘結果が変わらない状況が発生した。そのため、強化要素が機能し続ける難易度設計が課題となった。",
                solution: "Wave数に応じたステータス補正とボス出現の導入",
                solutionDetail: "Wave数に応じて敵のHP・攻撃力に段階的な補正を加えた。これにより後半でも強化が有効に機能する設計とし、さらにボス出現でゲーム体験に緩急を持たせた。"
            },
            {
                issue: "敵全滅後の進行管理が分散していた",
                detail: "敵がいなくなったタイミングの判定や強化フェーズへの遷移処理が複数のスクリプトに分散しており、進行フローが把握しづらい状態だった。",
                solution: "GameManagerでWave進行を一元管理",
                solutionDetail: "敵生成時にListへ追加し、死亡時に削除する仕組みに統一した。現在の敵数を管理し、全滅時にアップグレードフェーズへ遷移する構造に整理した。これにより『戦闘→強化→次Wave』というループ構造を明確化した。"
            }
        ],

        learning: "ステートによって敵の行動を整理することで、責務を分離した設計の重要性を学んだ。また、チーム制作を通してGitによるソース管理や役割分担の大切さを実践的に学ぶことができた。"
    }
];


// ===============================
// リンク
// ===============================
const links = {
    github: "https://github.com/jum116",
    mail: "akimitsu.jumpei@gmail.com"
};
