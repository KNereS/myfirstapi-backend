// "FastifyRequest" e "FastifyReply" são importados do módulo fastify. Eles representam a requisição recebida e a resposta a ser enviada, respectivamente.
import { FastifyRequest, FastifyReply } from 'fastify';

//  É importado de um módulo de serviços, que contém a lógica de negócios para criar um novo cliente.
import { CreateCustomerService } from '../services/CreateCustomerService';

// Define uma classe que contém um método handle para lidar com as requisições de criação de clientes.
class CreateCustomerController {

    // Método assíncrono que espera receber um objeto request do tipo "FastifyRequest" e um objeto reply do tipo "FastifyReply".
    async handle(request:FastifyRequest, reply: FastifyReply){

        const {name, email} = request.body as {name: string, email: string}; // Extrai 'name' e 'email' do corpo da requisição

        const customerService = new CreateCustomerService(); // Cria uma instância do serviço "CreateCustomerService".

        const customer = await customerService.execute({ name, email }); // Chama o método "execute" do serviço, passando 'name' e 'email' como argumentos, e espera pelo resultado.

        reply.send(customer); // Envia o cliente criado como resposta.

    };

};

// Exporta a classe para que possa ser utilizada em outras partes da aplicação, como na definição de rotas.
export { CreateCustomerController };