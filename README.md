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


## 🏗️ Infraestrutura do Projeto

Além do desenvolvimento da aplicação web, o projeto também conta com uma estrutura de rede e servidores, simulando um ambiente corporativo completo.

---

### 👥 Active Directory (AD) com usuários

Foi implementado um Active Directory para gerenciamento centralizado de usuários e permissões dentro da rede. Com isso, foi possível:

- Criar contas de usuários  
- Definir níveis de acesso  
- Organizar usuários em grupos  

Essa estrutura reforça a segurança e aproxima o projeto de um ambiente corporativo real.
<img width="1043" height="840" alt="Image" src="https://github.com/user-attachments/assets/946351e5-9c64-4c61-895d-2f27595e4de9" />

---

### 🌍 Serviço de DNS

O DNS (Domain Name System) foi configurado para permitir a resolução de nomes dentro da rede.

Isso possibilita:

- Acesso ao servidor por nome ao invés de IP  
- Melhor organização da rede  
- Facilidade de navegação entre máquinas  
<img width="791" height="556" alt="Image" src="https://github.com/user-attachments/assets/3d96cc5e-10c9-467d-8eae-718c33359fa1" />
---

### 🗄️ Banco de dados do servidor

O servidor hospeda o banco de dados da aplicação, responsável por armazenar todos os:

- Usuários cadastrados  
- Espécies em extinção  
- Informações sobre os biomas  

Todas as informações que não foram colacadas no site foram colocadas no MYSQl do servidor
<img width="1057" height="816" alt="Image" src="https://github.com/user-attachments/assets/24822ad3-3846-4cd9-bfb0-fda588a21e3f" />

---

### 💻 Máquinas clientes no domínio

As máquinas clientes foram conectadas a o domínio eco.local, permitindo gerenciamento centralizado.
<img width="1598" height="852" alt="Image" src="https://github.com/user-attachments/assets/eac61edf-c676-4bec-a36a-22f880213460" />
---

### 🌐 Acesso remoto ao servidor

Foi configurado acesso remoto ao servidor de uma maquina cliente, permitindo sua administração à distância.
Foi liberado a permissão pela GPO do servidor para tal usuário 
<img width="1598" height="852" alt="Image" src="https://github.com/user-attachments/assets/eac61edf-c676-4bec-a36a-22f880213460" />

---

### 🔐 Tela de login para acesso ao servidor

O ambiente conta com uma tela de autenticação, garantindo que apenas usuários autorizados tenham acesso ao servidor.

<img width="801" height="851" alt="Image" src="https://github.com/user-attachments/assets/67c79d7c-a115-4ce9-aa27-1751163dffe7" />

---

### 🖥️ Servidor acessado remotamente

O servidor principal da aplicação pode ser acessado remotamente, centralizando os serviços do sistema e permitindo sua gestão de forma eficiente.
<img width="966" height="854" alt="Image" src="https://github.com/user-attachments/assets/184e3c93-0ac2-4772-a4ef-1fcf5a08b1b3" />

Essa abordagem simula cenários reais de infraestrutura de TI utilizados em empresas.

---

## 🔗 Integração com o Projeto

Toda essa infraestrutura foi projetada para dar suporte à aplicação web desenvolvida, integrando diferentes áreas da tecnologia:

- Desenvolvimento de software  
- Redes de computadores  
- Administração de sistemas  
- Segurança da informação  

Isso torna o projeto mais completo, demonstrando não apenas a aplicação prática do código, mas também da estrutura necessária para mantê-lo em funcionamento.

# 📚 Referência Bibliográfica

BRASIL. Ministério do Meio Ambiente. Instituto Chico Mendes de Conservação da Biodiversidade. *Lista de espécies ameaçadas de extinção no Brasil – 2020*. Base de dados em formato CSV. Disponível em: <https://data.amerigeoss.org/dataset/especies-ameacadas/resource/1f13b062-f3f6-4198-a4c5-3581548bebec/download/lista-de-especies-ameacas-2020.csv>. Acesso em: 11 maio 2026.

