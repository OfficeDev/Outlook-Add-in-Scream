---
page_type: sample
products:
- office
- office-365
- office-outlook
languages:
- javascript
description: "Scream into the void"— это надстройка Microsoft Outlook, которая позволяет высказать свое негодование по поводу прочитанного письма"
urlFragment: scream-into-void
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: "12/8/2015 1:47:55 AM"
---

# Надстройка Outlook: использование RoamingSettings для сохранения состояния надстройки в почтовом ящике пользователя

## Сводка

**Scream into the void** — это надстройка Microsoft Outlook, которая позволяет высказать свое негодование по поводу прочитанного письма. Кроме того, в этом примере показано использование RoamingSettings, функции надстроек Outlook для хранения перемещаемых данных в почтовом ящике пользователя.

 
![](/readme-images/animated_screenshot.gif)

## Необходимые средства

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Установка

1. Клонируйте этот репозиторий.
2. Запустите `npm install`, чтобы установить зависимости npm и Bower.
3. Запустите сервер разработки с помощью `gulp serve-static`.
4. Перейдите на [mail.office365.com](http://mail.office365.com) и войдите в систему с помощью своей учетной записи Microsoft Office 365. Если у вас нет такой учетной записи, [примите участие в программе для разработчиков Office 365 и получите бесплатную подписку на Office 365 сроком на 1 год](https://aka.ms/devprogramsignup).
5. Щелкните значок шестеренки, чтобы на панели навигации открылось меню "Параметры", и выберите *Управление надстройками*.
6. Щелкните значок "плюс" (+) и выберите *Добавить из файла*.
7. Перейдите к папке репозитория и выберите *manifest-outlook-add-in-scream.xml*.
8. Завершите работу мастера (*Далее*, *Установить*,*ОК*), чтобы сделать надстройку доступной в вашей учетной записи Office 365.
9. Откройте [приложение](https://localhost:8443/appread/index.html) в браузере, а также установите доверие к сертификату `localhost:8443`. Эту надстройку не удастся запустить, если ваш компьютер не доверяет ей.

## Запуск

1. После установки надстройки перейдите на [mail.office365.com](http://mail.office365.com). 
2. Откройте сообщение электронной почты.
3. Щелкните *Надстройки* в верхней части окна, чтобы просмотреть доступные надстройки, и выберите **Scream into the void**.

## Устранение неполадок

- Если надстройка не отображается в области задач, выберите элементы **Вставка > Мои надстройки > Scream into the void**.

## Вопросы и комментарии

- Если у вас возникли проблемы с запуском этого примера, [сообщите о неполадке](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
- Общие вопросы о разработке надстроек Microsoft Office следует задавать на сайте [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Обязательно помечайте свои вопросы и комментарии тегом [office-addins].

## Участие

Мы приветствуем ваше участие в создании примеров. Сведения о дальнейших действиях см. в [руководстве по участию](./Contributing.md).

Этот проект соответствует [Правилам поведения разработчиков открытого кода Майкрософт](https://opensource.microsoft.com/codeofconduct/). Дополнительные сведения см. в разделе [вопросов и ответов о правилах поведения](https://opensource.microsoft.com/codeofconduct/faq/). Если у вас возникли вопросы или замечания, напишите нам по адресу [opencode@microsoft.com](mailto:opencode@microsoft.com).

## Дополнительные ресурсы

- [Дополнительные примеры надстроек](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Надстройки Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Структура надстройки](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Создание надстройки Office в Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Генератор Yeoman](https://github.com/OfficeDev/generator-office) — генератор Yeoman для создания проектов, связанных с Microsoft Office (в том числе надстроек). Этот проект был создан с его использованием.
- [Office UI Fabric](https://dev.office.com/fabric) — клиентская платформа, позволяющая создавать решения для Office 365. Она используется в этом проекте для получения внешнего вида и функций Office. 
- [dev.office.com](https://dev.office.com) — поиск документации, примеров и других полезных сведений, относящихся к разработке приложений Office.


## Авторские права
(c) Корпорация Майкрософт (Microsoft Corporation), 2015. Все права защищены.
