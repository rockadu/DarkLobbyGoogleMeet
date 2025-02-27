# Dark Lobby Google Meet

Este repositório contém uma extensão simples para alterar a cor de fundo da tela de espera (lobby) do Google Meet. O objetivo é modificar o fundo para um tom mais escuro, ajudando a reduzir o cansaço visual durante as reuniões.

---

## Conteúdo

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Como Instalar](#como-instalar)
- [Código Fonte](#código-fonte)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## Visão Geral

A extensão altera a cor de fundo do lobby do Google Meet para um tom de cinza escuro (`#474747`). Essa mudança pode diminuir o impacto de uma tela muito iluminada, proporcionando uma experiência mais confortável para os olhos.

---

## Funcionalidades

- **Mudança de Cor do Lobby:** Ao carregar uma sala do Google Meet, o script identifica o elemento da tela de espera e altera a sua cor de fundo.
- **Atualização Periódica:** O script executa a função de mudança de cor a cada 1 segundo para garantir que a alteração persista, mesmo quando o DOM é modificado dinamicamente.

---

## Como Instalar

### Pré-requisitos

- Navegador Google Chrome ou outro compatível com extensões baseadas em Manifest V3.
- Acesso ao modo de desenvolvedor do navegador.

### Passo a Passo

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/rockadu/DarkLobbyGoogleMeet.git
   cd DarkLobbyGoogleMeet
   ```

2. **Carregue a extensão:**
    - Chrome: Abra ```chrome://extensions/```
    - Edge: Abra ```edge://extensions/```

3. Ative o modo desenvolvedor.

5. Clique em "Carregar sem compactação" e selecione a pasta do projeto

### Uso
Após a instalação, abra o Google Meet e entre em uma reunião. A extensão automaticamente alterará o fundo da sala de espera para o tema escuro configurado.

###  Contribuições
Contribuições são bem-vindas! Se você tiver ideias, correções de bugs ou melhorias, sinta-se à vontade para:

- Fazer um fork do repositório.
- Criar uma nova branch com suas alterações.
- Submeter um pull request explicando detalhadamente as mudanças implementadas.

### Licença
Este projeto está licenciado sob a [MIT License](https://mit-license.org/).