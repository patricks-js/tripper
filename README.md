# Tripper

**Tripper** é uma plataforma para organizar viagens entre grupos de amigos, permitindo aos organizadores criar viagens, convidar participantes, programar atividades e gerenciar toda a logística de maneira eficiente e colaborativa.

## Funcionalidades Principais

- **Criação de Viagens**: Organize viagens com facilidade, definindo destino, datas e convidando participantes.
- **Convites e Confirmações por E-mail**: Convide amigos via e-mail e acompanhe as confirmações diretamente na plataforma.
- **Gerenciamento de Atividades**: Planeje e visualize atividades programadas para cada dia da viagem.
- **Sugerir Atividades**: Participantes podem sugerir novas atividades, que os organizadores podem aceitar ou rejeitar.
- **Recursos de Gamificação**: Recompense os participantes por ações como sugestões e confirmações rápidas.
- **Sistema de Autenticação via Magic Link**: Usuários podem acessar o sistema sem necessidade de senhas, através de links únicos enviados por e-mail.

## Tecnologias

**Tripper** é construído usando **Next.js 15** e aproveita ao máximo as **Server Actions**, permitindo que o projeto opere sem um back-end dedicado. Toda a lógica de negócios, autenticação, e manipulação de dados é feita diretamente no servidor via server actions, garantindo simplicidade e eficiência.

### Principais Features do Next.js 15

- **Server Actions**: Todas as operações que envolvem manipulação de dados (criação de viagens, confirmação de participantes, etc.) são processadas no servidor, eliminando a necessidade de um back-end separado.
- **Rotas e APIs**: As rotas e endpoints são gerenciados diretamente no Next.js, centralizando as funcionalidades.
- **Autenticação via Magic Link**: Autenticação simples e segura sem a necessidade de senhas, baseada em links temporários enviados por e-mail.

## Instalação e Configuração

### Requisitos

- **Node.js 18+**
- **NPM ou Yarn**
- **Next.js 15**

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/tripper.git
   ```

2. Instale as dependências:

   ```bash
   cd tripper
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto e defina as seguintes variáveis:

     ```text
     NEXT_PUBLIC_BASE_URL=http://localhost:3000
     EMAIL_SERVICE_API_KEY=<sua-chave-api-de-email>
     ```

4. Execute o projeto localmente:

   ```bash
   npm run dev
   ```

5. O projeto estará disponível em `http://localhost:3000`.

## Fluxo de Usuário

1. **Criar Viagem**:
   - O usuário cria uma nova viagem na página inicial, fornecendo informações como destino, data de início e fim, e convidados (opcional).

2. **Convites por E-mail**:
   - O organizador convida os participantes via e-mail. Os convites contêm um link único que permite ao usuário confirmar sua participação e acessar as informações da viagem.

3. **Confirmação e Autenticação**:
   - Ao aceitar o convite, uma conta é criada automaticamente, e o usuário é autenticado via **magic link**. Não é necessário criar uma senha ou conta manualmente.

4. **Gerenciamento de Atividades**:
   - O organizador cadastra atividades para cada dia da viagem. Participantes também podem sugerir novas atividades que podem ser aceitas ou recusadas.

5. **Dashboard de Viagens**:
   - Após confirmar a participação, o usuário tem acesso ao dashboard da viagem, onde pode visualizar as atividades e interagir com outros participantes.

## Gamificação

**Tripper** usa gamificação para incentivar a participação ativa e o engajamento dos usuários:

- **Pontos e Recompensas**: Participantes ganham pontos por confirmar presença rapidamente, sugerir atividades e participar ativamente na organização da viagem.
- **Classificação de Participantes**: O sistema mantém um ranking dos participantes mais engajados, promovendo uma competição amigável.

## API e Server Actions

Utilizando as **Server Actions** do Next.js 15, todas as operações são executadas diretamente no servidor. Abaixo estão algumas das principais ações do sistema:

### Criação de Viagem

```js
export async function createTrip(data) {
  // Lógica para salvar a viagem no banco de dados
}
```

### Envio de Convite

```js
export async function sendInvite(email, tripId) {
  // Lógica para enviar convite via e-mail
}
```

### Confirmação de Participante

```js
export async function confirmParticipant(token) {
  // Lógica para confirmar participação e autenticar via magic link
}
```

## Ferramentas e Bibliotecas Utilizadas

- **Day.js**: Para manipulação e verificação de datas.
- **React Mail & Resent**: Bibliotecas para lidar com e-mails no front-end.
- **Nodemailer**: Utilizado para envio de e-mails no back-end.
- **Promise.all()**: Para executar operações assíncronas em paralelo, como o envio de múltiplos convites.
