---
page_type: sample
products:
- office
- office-365
- office-outlook
languages:
- javascript
description: "Scream into the void is a Microsoft Outlook add-in that lets you rant about the email you are reading."
urlFragment: scream-into-void
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: "12/8/2015 1:47:55 AM"
---

# Outlook 外接程序：使用 RoamingSettings 在用户的邮箱中存储加载项状态

## 摘要

**Scream into the void** 是一个 Microsoft Outlook 外接程序，可供你对你查看的电子邮件吐槽。此示例还演示了如何使用 RoamingSettings，这是 Outlook 外界程序的一个功能，用于存储用户邮箱中的漫游数据。

 
![](/readme-images/animated_screenshot.gif)

## 必需的工具

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## 如何安装

1. 克隆该存储库。
2. 运行 `npm 安装` 以安装 npm 和 Bower 依赖项。
3. 运行 `gulp serve-static` 以启动开发服务器。
4. 转到 [mail.office365.com](http://mail.office365.com) 并使用你的 Microsoft Office 365 帐户登录。如果你没有帐户，可以[加入 Office 365 开发人员计划并获取为期 1 年的免费 Office 365 订阅](https://aka.ms/devprogramsignup)。
5. 单击导航栏上的“设置”菜单的齿轮图标，然后选择“*管理外接程序*”。
6. 单击加号 (+) 图标，然后选择“*从文件添加*”。
7. 浏览到此存储库文件夹，然后选择“*manifest-outlook-add-in-scream.xml*”。
8. 完成向导（“*下一步*”、“*安装*”、“*确定*”），使该外接程序在 Office 365 帐户上可用。
9. 在浏览器中打开[应用](https://localhost:8443/appread/index.html)，信任 `localhost:8443` 的证书。如果计算机不信任该证书，则外接程序不会运行。

## 运行方式

1. 安装外接程序后，转到 [mail.office365.com](http://mail.office365.com)。 
2. 打开一封电子邮件。
3. 在窗口顶部单击“*外接程序*”以查看可用的外接程序，然后选择“**cream into the void**”。

## 疑难解答

- 如果任务窗格中未显示外接程序，请选择“**插入 > 我的外接程序 > Scream into the void**”。

## 问题和意见

- 如果你在运行此示例时遇到任何问题，请[记录问题](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues)。
- 与 Microsoft Office 外接程序开发相关的问题一般应发布到 [堆栈溢出](http://stackoverflow.com/questions/tagged/office-addins)。确保你的问题或意见使用 [Office 加载项] 进行了标记。

## 参与

我们鼓励你参与我们的示例。有关如何继续的指南，请参阅我们的[参与指南](./Contributing.md)

此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则常见问题解答](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

## 其他资源

- [更多加载项示例](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Office 加载项](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [加载项解析](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [使用 Visual Studio 创建 Office 加载项](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Yeoman 生成器](https://github.com/OfficeDev/generator-office) - 生成 Microsoft Office 相关的项目（包括外接程序）的 Yeoman 生成器。该项目是使用它构建的。
- [Office UI Fabric](https://dev.office.com/fabric) - 用于生成 Office 365 体验的前端框架。此项目使用它来获取 Office 的外观。 
- [dev.office.com](https://dev.office.com) - 查找与 Office 开发相关的文档、示例和其他有用信息。


## 版权信息
版权所有 (c) 2015 Microsoft。保留所有权利。
