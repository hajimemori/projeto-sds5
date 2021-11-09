# Projeto Semana Spring React 5 da DevSuperior

Este projeto foi desenvolvido durante a semana Spring React 5 e consiste em uma aplicação desenvolvida com Spring, PostgreSQL, React, Bootstrap. A aplicação foi hospedada no Netlify (o frontend) e no Heroku (o backend).
A aplicação relativo a um Dashboard de vendas, exibe gráficos com taxa de sucesso de cada um dos vendedores, a quantidade de vendas por vendedor e ainda uma tabela com todas as vendas. Os dados do gráfico e da tabela fornecidas pelo banco de dados.

https://dsvendas-hajime.netlify.app/

## Frontend

Para o desenvolvimento do frontend foi utilizado o React com a linguagem Typescript. 
Após a criação do projeto utilizando o comando 

```npx create-react-app frontend --template typescript```

Depois limpamos os arquivos criados pelo npx que não são relativos ao projeto. Depois adicionamos o Bootstrap pelo yarn.

Inicialmente foi feito os componentes no React de forma estático, como:
* Navbar 
* Footer
* Data Table 

Instalamos pelo npm a biblioteca de gráficos chamada de ApexCharts que serão utilizadas para exibir e manipular os grágicos.

## Backend

Para iniciar o projeto backend utilizamos o Spring Initializr com denpendencias de 
* Web
* JPA
* H2
* Postgres
* Security
para gerar os arquivos iniciais. 

Em seguida fazemos a configuração de segurança no Spring. Depois criamos as entidades e seed do banco de dados. 
Criamos as entidades e a camada de serviço; a camada de DTO (Data Tranfer Objects) e os controladores que por sia vez irão distribuir os dados coletados por meio de Requisições HTTP: REST enviando um arquivo no formato JSON.

## Integração backend e frontend

Para a integração instalamos o react Router DOM no projeto, criamos uma página home e uma para o Dashboard  e utilizamos o Routes.tsx para nos direcionar na aplicação. 
Instalamos o Axios para fazer as raquisições e usamos os Hooks 'useState' e 'useEffect' para obtermos a atualização dos gráficos.
