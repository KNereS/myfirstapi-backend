// // "FastifyRequest" e "FastifyReply" são importados do módulo fastify. Eles representam a requisição recebida e a resposta a ser enviada, respectivamente.
import { FastifyReply } from 'fastify';

// ListCustomerService é importado de um módulo de serviços, que contém a lógica de negócios para listar clientes.
import { ListCustomerService } from '../services/ListCustomerService';

// Define uma classe que contém um método handle para lidar com as requisições de listagem de clientes.
class ListCustomerController {

    // Método assíncrono que espera receber um objeto reply do tipo "FastifyReply".
    async handle(reply: FastifyReply){

        // Cria uma instância do serviço "ListCustomerService".
        const listCustomerService = new ListCustomerService();
 
        // Chama o método 'execute' do serviço, que busca todos os clientes cadastrados. 
        const customers = await listCustomerService.execute();

        reply.send(customers); // Envia a lista de clientes como resposta.

    };

};

export { ListCustomerController }; // Exporta a classe ListCustomerController para que possa ser utilizada em outras partes da aplicação, como na definição de rotas.