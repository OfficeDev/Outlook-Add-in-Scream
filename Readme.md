# Rant Away!

**Rant Away!** is an Office Add-in built for Outlook that let's you rant about the email you are reading. 

## Required tools

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

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


## How to run

1. After installing the Add-in, go to [mail.office365.com](mail.office365.com). 
2. Open an email.
3. Click *Add-ins* at the top of the window to see available Add-ins and choose **Rant Away!**.

## Helpful links

* [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including Add-ins). This project was built using it.
* [Office UI Fabric](https://dev.office.com/fabric) - The front-end framework for building experiences for Office 365. This project uses it to get an Office "look and feel". 
* [dev.office.com](https://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.
