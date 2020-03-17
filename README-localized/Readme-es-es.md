---
page_type: sample
products:
- office
- office-365
- office-outlook
languages:
- javascript
description: "Scream into the void es un complemento de Microsoft Outlook que le permitirá criticar el correo electrónico que está leyendo"
urlFragment: scream-into-void
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: "12/8/2015 1:47:55 AM"
---

# Complemento de Outlook: Usar RoamingSettings para almacenar el estado del complemento en un buzón de usuario

## Resumen

**Scream en el** void es un complemento de Microsoft Outlook que le permite quejarse sobre el correo electrónico que está leyendo. Este ejemplo también muestra el uso de RoamingSettings, una característica de los complementos de Outlook para almacenar datos móviles en el buzón del usuario.

 
![](/readme-images/animated_screenshot.gif)

## Herramientas necesarias

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Cómo instalar 

1. Clone este repositorio.
2. Ejecute `NPM install` para instalar las dependencias NPM y Bower.
3. Ejecute `gulp serve-static` para iniciar el servidor de desarrollo.
4. Vaya a [mail.office365.com](http://mail.office365.com) e inicie sesión con su cuenta de 365 de Microsoft Office. Si no tiene una, [Únase al programa para desarrolladores de Office 365 y obtenga una suscripción gratuita durante 1 año a Office 365](https://aka.ms/devprogramsignup).
5. Haga clic en el icono de engranaje del menú configuración en la barra de navegación y, a continuación, elija *Administrar complementos*.
6. Haga clic en el icono de signo más (+) y, a continuación, elija *agregar desde un archivo*.
7. Desplácese hasta esta carpeta del repositorio y elija *manifest-Outlook-Add-in-Scream. Xml*.
8. Complete el asistente (*siguiente*, *instalar*, *aceptar*) para que el complemento esté disponible en su cuenta de Office 365.
9. Abra la [aplicación](https://localhost:8443/appread/index.html) en un explorador y confíe en el certificado de `localhost: 8443`. El complemento no se ejecutará si su ordenador no es de confianza.

## Cómo ejecutar

1. Después de instalar el complemento, vaya a [mail.office365.com](http://mail.office365.com). 
2. Abra un correo electrónico.
3. Haga clic en*Add-ins* en la parte superior de la ventana para ver los add-ins disponibles y elija **Scream into the void**.

## Solución de problemas

- Si el complemento no se muestra en el panel de tareas, elija **Insertar > Mis complementos > Scream into the void**.

## Preguntas y comentarios

- Si tiene algún problema para ejecutar este ejemplo, [registre un problema](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
- Las preguntas sobre el desarrollo de complementos de Microsoft Office en general deben publicarse en [desbordamiento de pila](http://stackoverflow.com/questions/tagged/office-addins). Asegúrese de que sus preguntas o comentarios se etiquetan con [office-addins].

## Colaboradores

Le animamos a contribuir a nuestros ejemplos. Para obtener instrucciones sobre cómo continuar, consulte nuestra [guía de contribución](./Contributing.md)

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.

## Recursos adicionales

- [Más complementos de ejemplo](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Complementos de Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Anatomía de un complemento](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Crear un complemento de Office con Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Generador de Yeoman](https://github.com/OfficeDev/generator-office): Generador de Yeoman para la creación de proyectos relacionados con Microsoft Office (incluyendo complementos). Este proyecto se compiló utilizándolo.
- [Office UI Fabric](https://dev.office.com/fabric): El marco de trabajo front-end para crear experiencias en Office 365. Este proyecto lo usa para obtener la apariencia y el aspecto de Office. 
- [dev.office.com](https://dev.office.com): Encuentre documentación, ejemplos y otra información útil relevante para el desarrollo de Office.


## Derechos de autor
Copyright (c) 2015 Microsoft. Todos los derechos reservados.
