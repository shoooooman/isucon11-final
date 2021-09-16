# ISUCHOLAR アプリケーションマニュアル

![logo](./logo.png)

## ISUCHOLAR について

本学では、学内システム ISUCHOLAR が使用されています。 科目の履修から課題の提出、成績の処理まで学内の全業務に用いられる ISUCHOLAR ですが、すべてが重いと学生や教員から多くの不満が寄せられています。
システム担当者は明後日から始まる新年度に向けて ISUCHOLAR の改修を依頼しましたが、巡り巡ってあなたに許された時間は 8 時間しかないようです。 なんとか期限までに ISUCHOLAR を改善し、素敵なキャンパスライフを提供しましょう！

## 用語

- ユーザー
    - 学生（student）: 本学に在学している学生です。
    - 教員（teacher）: 教員は科目を開講し、講義を行います。
- 学内コード（code）: 本学に所属している全学生・教員に一意に割り振られます。
- 科目（course）: 学生は科目を履修します。
    - 単位（credit）: 科目ごとに獲得できる単位数が決まっています。
    - 科目の状態（status）
        - 履修登録期間（registration）: 科目が登録されてから教員が履修登録を締め切るまで、学生からの履修を受け付けます。
        - 講義期間（in-progress）: 履修登録を締め切った後、講義が行われます。
        - 終了済み（closed）: すべての講義が提出課題の採点まで完了すると、教員は科目を終了します。この時点で、学生は科目を修了したことになります。
- 講義（class）: 科目につき複数回の講義が行われます。
- 課題（assignment）: 各講義につき一つ課題が出されます。
    - 提出課題（submission）: 学生から提出された課題を指します。
- 採点結果（score）: 教員は各提出課題を採点します。
- 成績（grade）: 学生の成績は採点結果から計算されます。
- お知らせ（announcement）: 教員は科目を履修している学生にお知らせを送信できます。

## 学修案内

### 履修登録について

本学には学期の概念がなく、科目はそれぞれ異なったタイミングで開講されます。履修登録期間も科目によって異なるので、各科目に合わせて履修登録を行ってください。 履修登録が締め切られた後、講義が行われるようになります。

#### 科目の概要

科目は教員によって適宜、新規に登録（開講）されます。

各科目では計 5 回の講義が行われます。新規に講義が追加されるとお知らせが届くので、こまめにチェックして課題を提出しましょう。
**講義追加のお知らせを確認できなかった等の理由で締切までに課題を提出できなかった場合でも、遅れての提出は許容しないので注意してください。**

科目は履修登録ページの検索機能から検索可能です。 検索結果から新しく履修したい科目を選択し、履修してください。 また履修時には、必ず科目の詳細まで確認してください。

#### 履修制限

科目は曜日（月曜から金曜まで）と時限（1 限から 6 限まで）から定まる計 30 枠のいずれかに開講されます。 同じ曜日かつ同じ時限に開講される科目を、同時に2つ以上履修することはできません。

#### 成績について

各提出課題の採点結果に加え、科目毎の総合点や統計値、GPAや学内での統計値を提供しています。 各科目を修了した後、新しい科目を履修する前にチェックするようにしてください。

科目内での統計値は各科目の履修者を対象に、学内での統計値は**一つでも修了した科目がある学生**を対象にそれぞれ算出しています。

科目の総合点は、提出課題の採点結果（0 〜 100 点）の単純和です。 **科目の各種成績は科目を履修した時点で表示されますが、それぞれの提出課題については採点されるまで統計上 0 点として扱われる**点に注意してください。

総獲得単位数は**修了した**科目の単位数の総和です。

**GPA（Grade Point Average）** は科目の総合点の単位数による重み付き平均を 100 で割った値（0.00 ~ 5.00）です。 また、総獲得単位数と同様に GPA も**修了した**科目のみが対象です。

```
GPA = SUM( 科目の総合点 * 科目の単位数 ) / 総獲得単位数 / 100
```

## 教員向け案内

教員は教員向けページから、科目の開講や講義情報の追加、提出課題のダウンロード・採点などが行なえます。

### 履修登録の締め切りについて

教員は**十分な学生が履修登録を完了するまで待ってから**あるいは、**十分な期間待ってから**履修登録を締め切ってください。

### 講義の実施について

講義は以下の流れに沿って行うようにしてください。

1. 講義/課題情報の追加
2. 課題提出の待機
3. 提出課題のダウンロード・採点
4. 採点結果の登録
5. (1. )次回、講義/課題情報の追加