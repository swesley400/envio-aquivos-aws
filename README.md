# Serviço de Envio de Arquivos para a AWS

## Visão Geral
O projeto consiste em um serviço desenvolvido em TypeScript, que utiliza o framework Express.js para criar rotas que permitem o envio de arquivos para a AWS (Amazon Web Services). O objetivo principal do serviço é receber arquivos dos usuários, armazená-los temporariamente em uma pasta de cache local e, em seguida, encaminhá-los para o armazenamento na AWS, proporcionando uma solução escalável e segura para o armazenamento de arquivos.

## Funcionalidades Principais
### 1. Rota de Envio de Arquivos
O serviço disponibiliza uma rota HTTP que aceita solicitações de envio de arquivos. Os clientes podem fazer upload de arquivos por meio dessa rota.

### 2. Armazenamento Temporário em Cache
Os arquivos enviados são armazenados temporariamente em uma pasta de cache local para evitar a perda de dados durante o processo de envio para a AWS.

### 3. Integração com a AWS
Após o armazenamento temporário, o serviço utiliza as credenciais da AWS para transferir os arquivos para um armazenamento persistente na AWS. Isso pode ser feito usando serviços como o Amazon S3, que oferece alta disponibilidade e durabilidade dos dados.

### 4. Segurança
O projeto implementa medidas de segurança, como autenticação e autorização, para garantir que apenas usuários autorizados possam enviar arquivos e acessar os recursos na AWS.

## Tecnologias Utilizadas
- TypeScript: Linguagem de programação utilizada para desenvolver o serviço.
- Express.js: Framework para criação de rotas HTTP.
- AWS SDK: Biblioteca para interação com os serviços da AWS.
- Amazon S3: Serviço de armazenamento na AWS.
- Medidas de segurança, como autenticação e autorização, para proteger os recursos.

## Benefícios do Projeto
- Facilita o envio seguro de arquivos para a AWS.
- Evita a perda de dados por meio do armazenamento temporário em cache.
- Aproveita a escalabilidade e confiabilidade da AWS para o armazenamento de arquivos.
- Pode ser integrado a outros serviços e aplicativos que requerem armazenamento de arquivos na AWS.

**Nota:** Certifique-se de configurar corretamente as credenciais da AWS e implementar medidas de segurança adequadas para proteger o acesso aos recursos na AWS, a fim de garantir a integridade e a confidencialidade dos dados do usuário.
