---
page_type: sample
products:
- office
- office-365
- office-outlook
languages:
- javascript
description: "Scream into the void は、閲覧中のメールに対して意見できるようにする Microsoft Outlook アドインです。"
urlFragment: scream-into-void
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: "12/8/2015 1:47:55 AM"
---

# Outlook アドイン:RoamingSettings を使用して、アドインの状態をユーザーのメールボックスに格納します

## 概要

**Scream into the void** は、閲覧中のメールに対して意見できるようにする Microsoft Outlook アドインです。このサンプルでは、RoamingSettings という、ローミング データをユーザーのメールボックスに格納するための Outlook アドイン機能を使用する方法も例示します。

 
![](/readme-images/animated_screenshot.gif)

## 必要なツール

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## インストール方法

1. このリポジトリの複製を作成します。
2. `npm install` を実行し、npm と Bower の両方の依存関係をインストールします。
3. `gulp serve-static` を実行し、開発用サーバーを起動します。
4. [mail.office365.com](http://mail.office365.com) に移動し、Microsoft Office 365 アカウントでサインインします。お持ちでない場合は、[Office 365 Developer プログラムに参加して、Office 365 の 1 年間無料のサブスクリプションを取得](https://aka.ms/devprogramsignup)できます。
5. ナビゲーション バーの [設定] メニューの歯車アイコンをクリックし、[*アドインの管理*] を選択します。
6. [+] アイコンをクリックし、[*ファイルから追加*] を選択します。
7. このリポジトリ フォルダーを参照し、[*manifest-outlook-add-in-scream.xml*] を選択します。
8. [*次へ*]、[*インストール*]、[*OK*] の順に選択してウィザードを完了し、アドインが Office 365 アカウントで使用できるようにします。
9. [アプリ](https://localhost:8443/appread/index.html)をブラウザーで開き、`localhost:8443` の証明書を信頼します。この証明書がコンピューターにより信頼されない場合、アドインは実行されません。

## 実行方法

1. アドインをインストールしたら、[mail.office365.com](http://mail.office365.com) に移動します。 
2. メールを 1 通開きます。
3. ウィンドウの上部にある [*アドイン*] をクリックして利用可能なアドインを表示し、[**Scream into the void**] を選択します。

## トラブルシューティング

- アドインが作業ウィンドウに表示されない場合、**[挿入]、[個人用アドイン]、[Scream into the void]** の順に選択します。

## 質問とコメント

- このサンプルの実行で問題が発生した場合は、[問題を報告](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues)してください。
- Microsoft Office アドイン開発に関する全般的な質問は、「[Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins)」に投稿してください。質問やコメントには、必ず [office-addins] のタグを付けてください。

## 投稿

Microsoft のサンプルに是非投稿してください。投稿方法のガイドラインについては、[投稿ガイド](./Contributing.md)を参照してください。

このプロジェクトでは、[Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定)](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[Code of Conduct の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。

## その他のリソース

- [その他のアドイン サンプル](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Office アドイン](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [アドインの構造](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Visual Studio で Office アドインを作成する](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Yeoman ジェネレーター](https://github.com/OfficeDev/generator-office) - Microsoft Office 関連のプロジェクト (アドインなど) を構築するための Yeoman ジェネレーターです。このプロジェクトは、Yeoman ジェネレーターを使って構築されました。
- [Office UI Fabric](https://dev.office.com/fabric) - Office 365 のエクスペリエンスを構築するためのフロント エンドのフレームワークです。Office の外観と操作性を持たせるために、このプロジェクトでも使用されています。 
- [dev.office.com](https://dev.office.com) - Office 開発に関連するドキュメント、サンプル、およびその他の役に立つ情報が見つかります。


## 著作権
Copyright (c) 2015 Microsoft.All rights reserved.
