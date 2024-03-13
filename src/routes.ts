// Importações

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
// são importados do módulo "fastify". Eles são usados para tipar as variáveis e funções, fornecendo autocompletar e verificação de tipos no código.

import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomerController } from './controllers/ListCustomersController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
// são importados dos seus respectivos módulos no diretório controllers. Eles contêm a lógica para lidar com as requisições.

//

export async function routes(fastify: FastifyInstance) {

    // Define uma rota POST para o caminho '/customer'. Quando essa rota é acessada, a função assíncrona cria uma nova instância de "CreateCustomerController" e chama o método handle para processar a requisição e resposta
    fastify.post("/customer", async (request:FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    });

    // Define uma rota GET para o caminho '/customers'. Usa "ListCustomerController" para lidar com a requisição e listar os clientes.
    fastify.get("/customers", async (request:FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(reply);
    });

    // Define uma rota DELETE para o caminho '/customer'. Usa "DeleteCustomerController" para processar a exclusão de um cliente.
    fastify.delete("/customer", async (request:FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });

}; // A função routes é exportada para ser usada em outra parte do código, onde as rotas serão registradas na instância do Fastify. "fastify: FastifyInstance" indica que a função recebe uma instância do Fastify como argumento.