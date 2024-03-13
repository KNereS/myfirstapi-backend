// Importa a instância configurada do Prisma Client que permite a interação com o banco de dados.
import prismaClient from '../prisma';

// Define uma classe que contém um método "execute".
class ListCustomerService {

    // É um método assíncrono que, quando chamado, utiliza o Prisma Client para buscar (findMany) todos os registros de clientes na tabela customer do banco de dados.
    async execute() {

        // Não recebe nenhum argumento, pois está buscando todos os clientes sem filtros.
        const customers = await prismaClient.customer.findMany();

        return customers; // Retorna a lista de clientes encontrados.

    };

};

export { ListCustomerService }; //  Exporta a classe criada para que possa ser utilizada em outras partes da aplicação.