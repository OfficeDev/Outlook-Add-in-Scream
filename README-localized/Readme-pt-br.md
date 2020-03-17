---
page_type: sample
products:
- office
- office-365
- office-outlook
languages:
- javascript
description: "Scream into the void é um suplemento do Microsoft Outlook que permite que você discuta sobre o email que está lendo."
urlFragment: scream-into-void
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: "12/8/2015 1:47:55 AM"
---

# Suplemento do Outlook: Usando RoamingSettings para armazenar o estado do suplemento na caixa de correio de um usuário

## Resumo

**Scream into the void** é um suplemento do Microsoft Outlook que permite que você discuta sobre o email que está lendo. Este exemplo também demonstra o uso de RoamingSettings, um recurso dos suplementos do Outlook para armazenar roaming de dados na caixa de correio do usuário.

 
![](/readme-images/animated_screenshot.gif)

## Ferramentas necessárias

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

## Como instalar

1. Clonar este repositório.
2. Execute `NPM instalar` para instalar as dependências do NPM e do Bower.
3. Execute `Gulp` estática para iniciar o servidor de desenvolvimento.
4. Vá para [mail.office365.com](http://mail.office365.com) e entre com sua conta do Microsoft Office 365. Caso não tenha uma, [ingresse no Programa para Desenvolvedores do Office 365 e obtenha uma assinatura gratuita de um ano do Office 365](https://aka.ms/devprogramsignup).
5. Clique no ícone de engrenagem para o menu configurações na barra de navegação e escolha *Gerenciar suplementos*.
6. Clique no ícone de adição e, em seguida, escolha *Adicionar de um arquivo*.
7. Navegue até essa pasta do repositório e escolha *manifest-outlook-add-in-scream.xml*.
8. Conclua o assistente (*Próximo*, *Instalar*, *OK*) para disponibilizar o Suplemento em sua conta do Office 365.
9. Abra o [aplicativo](https://localhost:8443/appread/index.html) em um navegador e confie no certificado para `localhost: 8443`. O suplemento não será executado se o seu computador não confiar.

## Como executar

1. Depois de instalar o suplemento, vá para [mail.office365.com](http://mail.office365.com). 
2. Abra um email.
3. Clique em *Suplementos* na parte superior da janela para ver os suplementos disponíveis e escolha **Scream into the void**.

## Solução de problemas

- Se o suplemento não for exibido no painel de tarefas, escolha **Inserir > Meus Suplementos > Scream into the void**.

## Perguntas e comentários

- Se você tiver problemas para executar este exemplo, [relate um problema](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
- As perguntas sobre o desenvolvimento de suplementos do Microsoft Office em geral devem ser postadas em [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Não deixe de marcar as perguntas ou comentários com [office-addins].

## Colaboração

Recomendamos que você contribua para nossos exemplos. Para obter diretrizes sobre como proceder, confira nosso [guia de contribuição](./Contributing.md)

Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/).  Para saber mais, confira as [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou entre em contato pelo [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.

## Recursos adicionais

- [Mais exemplos de Suplementos](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Suplementos do Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Anatomia de um Suplemento](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Criando um suplemento do Office com o Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
- [Gerador do Yeoman](https://github.com/OfficeDev/generator-office) – Gerador do Yeoman para compilar projetos relacionados do Microsoft Office (incluindo Suplementos). Esse projeto foi criado usando-o.
- [Office UI Fabric](https://dev.office.com/fabric) – A estrutura de front-end para criar experiências para o Office e o Office 365. Esse projeto usa esse recurso para obter uma aparência do Office. 
- [dev.office.com](https://dev.office.com) – Encontre a documentação, os exemplos e outras informações úteis relevantes para o desenvolvimento do Office.


## Direitos autorais
Copyright © 2015 Microsoft. Todos os direitos reservados.
