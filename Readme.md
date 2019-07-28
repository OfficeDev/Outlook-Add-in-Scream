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

# Outlook Add-in: Using RoamingSettings to store add-in state in a user's mailbox

## Summary

**Scream into the void** is a Microsoft Outlook add-in that lets you rant about the email you are reading. This sample also demonstrates the use of RoamingSettings, a feature of Outlook add-ins to store roaming data in the user's mailbox.

 
![](/readme-images/animated_screenshot.gif)

## Required tools

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## How to install

1. Clone this repository.
2. Run `npm install` to install both npm and Bower dependencies.
3. Run `gulp serve-static` to start development server.
4. Go to [mail.office365.com](http://mail.office365.com) and sign in with your Microsoft Office 365 account. If you don't have one, [join the Office 365 Developer Program and get a free 1 year subscription to Office 365](https://aka.ms/devprogramsignup).
5. Click the gear icon for the Settings menu on the nav bar, and then choose *Manage add-ins*.
6. Click the plus (+) icon, and then choose *Add from a file*.
7. Browse to this repository folder and choose *manifest-outlook-add-in-scream.xml*.
8. Complete the wizard (*Next*, *Install*, *OK*) to make the Add-in available on your Office 365 account.
9. Open the [app](https://localhost:8443/appread/index.html) in a browser and trust the certificate for `localhost:8443`. The add-in won't run if your computer doesn't trust it.

## How to run

1. After installing the add-in, go to [mail.office365.com](http://mail.office365.com). 
2. Open an email.
3. Click *Add-ins* at the top of the window to see available add-ins and choose **Scream into the void**.

## Troubleshooting

- If the add-in doesn't appear in the task pane, choose **Insert > My Add-ins >  Scream into the void**.

## Questions and comments

- If you have any trouble running this sample, please [log an issue](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
- Questions about Microsoft Office add-ins development in general should be posted to [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Make sure that your questions or comments are tagged with [office-addins].

## Contributing

We encourage you to contribute to our samples. For guidelines on how to proceed, see our [contribution guide](./Contributing.md)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Additional resources

- [More Add-in samples](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Office Add-ins](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Anatomy of an Add-in](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Creating an Office add-in with Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including Add-ins). This project was built using it.
- [Office UI Fabric](https://dev.office.com/fabric) - The front-end framework for building experiences for Office 365. This project uses it to get an Office "look and feel". 
- [dev.office.com](https://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.


## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.
