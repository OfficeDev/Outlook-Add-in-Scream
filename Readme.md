# Scream into the void

**Table of contents**

* [Summary](#summary)
* [Required tools](#prereq)
* [How to install](#install)
* [How to run](#run)
* [Troubleshooting](#troubleshooting)
* [Questions and comments](#questions)
* [Additional resources](#additional-resources)

<a name="summary"></a>
##Summary
**Scream into the void** is an Outlook Add-in that let's you rant about the email you are reading. This sample also demonstrates the use of RoamingSettings, a feature of Outlook Add-ins to store roaming data in the user's server mailbox. 

<a name="prereq"></a>
## Required tools

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

<a name="install"></a>
## How to install

1. Clone this repository.
2. Run `npm install` to install both npm and Bower dependencies.
3. Run `gulp serve-static` to start development server.
4. Go to [mail.office365.com](http://mail.office365.com) and sign in with your Office 365 account.
5. Click the gear icon on the upper right, then choose *Manage add-ins*.
6. Click the plus icon, then choose *Add from a file*.
7. Browse to this repository folder and choose *manifest-outlook-add-in-scream.xml*.
8. Complete the wizard (*Next*, *Install*, *OK*) to make the Add-in available on your Office 365 account.
9. Open the [app](https://localhost:8443/appread/index.html) in a browser and trust the certificate for `localhost:8443`. The add-in won't run if your computer doesn't trust it.

<a name="run"></a>
## How to run

1. After installing the Add-in, go to [mail.office365.com](mail.office365.com). 
2. Open an email.
3. Click *Add-ins* at the top of the window to see available Add-ins and choose **Scream into the void**.

<a name="troubleshooting"></a>
## Troubleshooting

- If the add-in does not appear in the task pane, Choose **Insert > My Add-ins >  Scream into the void**.

<a name="questions"></a>
## Questions and comments

- If you have any trouble running this sample, please [log an issue](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
- Questions about Office Add-ins development in general should be posted to [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Make sure that your questions or comments are tagged with [office-addins].


<a name="additional-resources"></a>
## Additional resources ##

- [More Add-in samples](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Office Add-ins](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Anatomy of an Add-in](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Creating an Office add-in with Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including Add-ins). This project was built using it.
- [Office UI Fabric](https://dev.office.com/fabric) - The front-end framework for building experiences for Office 365. This project uses it to get an Office "look and feel". 
- [dev.office.com](https://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.


## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.
