---
page_type: sample
products:
- office
- office-365
- office-outlook
languages:
- javascript
description: "Scream into the void est un complément Microsoft Outlook qui vous permet de fulminer à propos du message que vous lisez."
urlFragment: scream-into-void
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: "12/8/2015 1:47:55 AM"
---

# Complément Outlook : Utilisation de RoamingSettings pour stocker l’état d’un complément dans la boîte aux lettres d’utilisateur

## Résumé

**Scream into the void** est un complément Microsoft Outlook qui vous permet de fulminer à propos des messages que vous lisez. Cet exemple présente également comment utiliser RoamingSettings, une fonctionnalité de compléments Outlook pour stocker des données d’itinérance dans la boîte aux lettres de l’utilisateur.

 
![](/readme-images/animated_screenshot.gif)

## Outils nécessaires

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Installation

1. Clonez ce référentiel.
2. Exécutez `npm install` pour installer les dépendances npm et Bower.
3. Exécutez `gulp serve-static` pour lancer le serveur de développement.
4. Accédez à [mail.office365.com](http://mail.office365.com) et connectez-vous à l'aide de votre compte Microsoft Office 365. [Participez au programme pour les développeurs Office 365 et obtenez un abonnement gratuit d’un an à Office 365](https://aka.ms/devprogramsignup), si vous n’en avez pas.
5. Cliquez sur l’icône d’engrenage du menu Paramètres dans la barre de navigation, puis sélectionnez *Gérer des compléments*.
6. Cliquez sur l’icône plus (+), puis sélectionnez *Ajouter à partir d’un fichier*.
7. Parcourez ce dossier de référentiel et sélectionnez *manifest-outlook-add-in-scream.xml*.
8. Terminez l’Assistant (*Suivant*, *Installer*, *OK*) pour rendre le complément disponible dans votre compte Office 365.
9. Ouvrez l'[application](https://localhost:8443/appread/index.html) dans un navigateur et faire confiance au certificat pour `localhost:8443`. Le complément ne s’exécute pas si votre ordinateur ne l’approuve pas.

## Exécution

1. Une fois le complément installé, accédez à [mail.office365.com](http://mail.office365.com). 
2. Ouvrez un courrier.
3. Cliquez sur *Compléments* en haut de la fenêtre pour afficher les compléments disponibles, puis sélectionnez **Scream into the void**.

## Résolution des problèmes

- Si le complément n’apparaît pas dans le volet des tâches, sélectionnez **Insertion > Mes compléments > Scream into the void**.

## Questions et commentaires

- Si vous rencontrez des difficultés pour exécuter cet exemple, veuillez [consigner un problème](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
- Si vous avez des questions sur les compléments Microsoft Office, envoyez-les sur [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Posez vos questions ou envoyez vos commentaires en incluant la balise [office-addins].

## Contribution

Nous vous invitons à contribuer à nos exemples. Pour obtenir des instructions sur la façon de procéder, consultez notre [guide de contribution](./Contributing.md).

Ce projet a adopté le [Code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.

## Ressources supplémentaires

- [Autres exemples de compléments](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Compléments Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Structure d’un complément](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Création d’un complément Office avec Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Générateur Yeoman](https://github.com/OfficeDev/generator-office) : Générateur Yeoman pour la création de projets relatifs à Microsoft Office (y compris les compléments). Ce projet a été créé à l’aide de celui-ci.
- [Office UI Fabric](https://dev.office.com/fabric) : Infrastructure frontale permettant de créer des expériences pour Office 365. Ce projet l’utilise pour obtenir « l’apparence » d’Office. 
- [dev.office.com](https://dev.office.com) : trouvez de la documentation, des exemples et d’autres informations utiles relatives au développement d’Office.


## Copyright
Copyright (c) 2015 Microsoft. Tous droits réservés.
