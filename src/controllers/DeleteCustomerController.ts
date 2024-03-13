// "FastifyRequest" e "FastifyReply" são importados do módulo fastify. Eles representam a requisição recebida e a resposta a ser enviada, respectivamente.
import { FastifyRequest, FastifyReply } from 'fastify';

//  "DeleteCustomerService" é importado de um módulo de serviços, que contém a lógica de negócios para deletar um cliente.
import { DeleteCustomerService } from '../services/DeleteCustomerService';

// Define uma classe que contém um método handle para lidar com as requisições de exclusão de clientes.
class DeleteCustomerController {

    // É um método assíncrono que espera receber um objeto request do tipo "FastifyRequest" e um objeto reply do tipo "FastifyReply".
    async handle(request: FastifyRequest, reply: FastifyReply) {

        // Extrai o id do cliente da query da requisição (request.query) e o converte para o tipo { id: string }.
        const { id } = request.query as { id: string };

        // Cria uma instância do serviço "DeleteCustomerService".
        const customerService = new DeleteCustomerService();
 
        // Chama o método execute do serviço, passando o id como argumento, e espera pelo resultado.
        const customer = await customerService.execute({ id });

        reply.send(customer); // Envia a resposta da operação de exclusão.

    };

};

export { DeleteCustomerController }; //  Exporta a classe DeleteCustomerController para que possa ser utilizada em outras partes da aplicação, como na definição de rotas.