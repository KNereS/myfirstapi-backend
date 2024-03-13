// Fastify é um framework web para Node.js que se destaca por sua alta performance, baixa latência e alta escalabilidade. É uma escolha popular para o desenvolvimento de APIs modernas.

// Importando Fastify.
import fastify from 'fastify';
import cors from '@fastify/cors';

// No contexto do desenvolvimento de aplicações web, rotas são essenciais para definir os caminhos que os usuários podem seguir dentro de um site ou aplicativo.

// Importando as rotas da aplicação.
import { routes } from './routes';

const app = fastify({ logger: true }); // cria uma instância do Fastify com o registro de logs ativado;
const port = 3000; // define a porta que será ouvida pelo servidor;

// Define uma função assíncrona chamada "start"
const start = async () => {

    await app.register(routes); // registra as rotas com a instância do Fastify.

    await app.register(cors); // registra o plugin CORS em uma aplicação Fastify. CORS é um mecanismo que permite que recursos restritos em uma página da web sejam solicitados de outro domínio fora do domínio ao qual pertence o recurso. Isso é usado principalmente para permitir que APIs sejam acessadas por aplicações web hospedadas em domínios diferentes.

    // Um bloco "try...catch" é usado para capturar e tratar erros que podem ocorrer quando o servidor tenta ouvir na porta especificada.

    try {

        await app.listen({ port: port }); // diz ao servidor para começar a ouvir por requisições na porta especificada pela variável "port"

        console.log(`Server listening on port ${port}`); // se o servidor começar a ouvir com sucesso, essa linha imprimirá uma mensagem no console indicando em qual porta o servidor está ativo.

    } catch(err) {

        process.exit(1); // se um erro ocorrer e for capturado pelo bloco catch, essa linha encerrará o processo do Node.js com um código de saída 1, que é um código de erro genérico indicando que o programa terminou com um erro.

    };

} 

start(); // Por fim, a função "start" é chamada para executar o código que ela contém.