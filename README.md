# Projeto-eco-biomas
# 🌱 Espécies em Extinção

Este projeto foi desenvolvido em grupo durante a faculdade com o objetivo de unir tecnologia e conscientização ambiental. A proposta principal é criar uma aplicação web interativa que permita aos usuários conhecer espécies ameaçadas de extinção nos diferentes biomas brasileiros, promovendo educação, sustentabilidade e preservação da biodiversidade.

---

## 💡 Propósito do Projeto

O Brasil possui uma das maiores biodiversidades do mundo, mas muitas espécies estão ameaçadas devido a fatores como desmatamento, mudanças climáticas e ação humana.

Pensando nisso, desenvolvemos este sistema com os seguintes objetivos:

- Divulgar informações sobre espécies em risco de extinção  
- Relacionar animais aos seus respectivos biomas  
- Promover conscientização ambiental de forma acessível  
- Aplicar na prática conhecimentos de desenvolvimento web  
- Criar uma plataforma interativa com recursos modernos  

Este projeto reflete não apenas o aprendizado técnico do grupo, mas também o compromisso com a sustentabilidade e a preservação da natureza.

---

## ⚙️ Tecnologias Utilizadas

- Python  
- Flask  
- Flask-SocketIO  
- SQLite  
- HTML  
- CSS  
- JavaScript  

---

## 🚀 Funcionamento Geral

O arquivo principal do projeto é o `main.py`. Ele é responsável por:

- Criar a aplicação Flask  
- Configurar a chave secreta para sessões  
- Inicializar o Socket.IO para comunicação em tempo real  

A página inicial (`/`) exibe a tela de login. Ao inserir usuário e senha:

1. O sistema consulta o banco de dados  
2. Verifica se os dados estão corretos  
3. Redireciona para a página de biomas, caso válido  

A rota `/cadastro` permite que novos usuários sejam registrados, com dados armazenados no banco `usuarios.db`.

---

## 🌎 Exploração dos Biomas

A rota `/biomas` apresenta a tela principal com um mapa interativo dos biomas brasileiros.

Ao clicar em um bioma:

- O sistema busca as espécies ameaçadas no banco de dados  
- Retorna os dados dinamicamente  
- Exibe as informações na interface  

A rota `/api/biomas/<bioma>` funciona como uma API que retorna os dados em formato JSON.

---

## 🗄️ Banco de Dados

O arquivo `banco.py` gerencia os bancos SQLite.

### Bases criadas:

- `usuarios.db` → armazena usuários cadastrados  
- `animais_extincao.db` → armazena espécies ameaçadas  

### Funções principais:

- `cadastrar(usuario, senha)`  
- `login(usuario, senha)`  
- `buscar_especies_por_bioma(bioma)`  
- `criar_tabela()`  
- `criar_tabela_especies()`  

---

## 🎨 Interface Web

### 📁 Templates

- `APS.html` → tela de login  
- `Cadastro.html` → cadastro  
- `biomas.html` → mapa, espécies e chat  

### 📁 Static

- `APS.css` → estilos de login/cadastro  
- `biomas.css` → estilos da página principal  
- `APS.js` → animação da arara  
- `cadastro.js` → validações  
- `biomas.js` → interação com os biomas  

---

## 💬 Chat em Tempo Real

O projeto utiliza **Flask-SocketIO** para disponibilizar um chat em tempo real:

- Usuários entram automaticamente na sala `KBTG`  
- Mensagens são enviadas e recebidas instantaneamente  
- Notificações aparecem quando usuários entram ou saem  

---

## 🖥️ Versão Desktop (Tkinter)

O arquivo `tela.py` contém uma versão do sistema com interface gráfica em Tkinter, permitindo:

- Cadastro de usuários  
- Login  
- Acesso a um painel local  

---

## 🎥 Demonstração do Projeto

Veja o funcionamento completo da aplicação no vídeo abaixo:

[![Demonstração do sistema](https://img.youtube.com/vi/JK-vDPlxTi8/0.jpg)](https://youtu.be/JK-vDPlxTi8)


# 📚 Referência Bibliográfica

BRASIL. Ministério do Meio Ambiente. Instituto Chico Mendes de Conservação da Biodiversidade. *Lista de espécies ameaçadas de extinção no Brasil – 2020*. Base de dados em formato CSV. Disponível em: <https://data.amerigeoss.org/dataset/especies-ameacadas/resource/1f13b062-f3f6-4198-a4c5-3581548bebec/download/lista-de-especies-ameacas-2020.csv>. Acesso em: 11 maio 2026.

