# Peregrin
Realiza o controle autorização da aplicação cliente oferencendo a diretiva <peSecurity/> e o controle de rotas.

## Pré-requisitos
É necessário ter previamente instalado as ferramentas:

- Nodejs 0.12 ou superior
- Bower
- Grunt

## Instalação
Para instalar basta rodar o comando:

`npm install`

## Construção
Durante a construção da aplicação são realizadas diversas tarefas tais como: 

- Limpeza da pasta de distribuição.
- Geração do relatório de análise de código (ESLint).
- Geração do relatório de testes unitários.
- Junção dos arquivos JS.
- Geração dos relatórios de documentação do código fonte (NgDoc).
- Análise de qualidade na ferramenta Sonar.

#### Gerar a documentação

`grunt docs`

#### Rodar os testes unitários

`grunt test`

#### Construção completa (documentação, testes unitários e minificação)

`grunt dist  | grunt`