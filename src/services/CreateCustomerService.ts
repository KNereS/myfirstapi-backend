// Este serviço é responsável por encapsular a lógica de criação de um novo cliente, garantindo que todos os dados necessários estejam presentes e interagindo com o banco de dados para persistir essas informações.

//

import prismaClient from '../prisma'; // importa a instância do Prisma Client que permite acessar o banco de dados.

// Define uma interface TypeScript para os dados do cliente, especificando que um cliente deve ter um name e um email, ambos do tipo string.
interface CreateCustomerProps {
    name: string;
    email: string;
};

//

// Define uma classe que contém um método execute para criar um novo cliente no banco de dados:
class CreateCustomerService {

    // Método assíncrono que recebe um objeto com name e email como argumentos.
    async execute({name, email}: CreateCustomerProps) {

        if (!name || !email){
            throw new Error("Por favor, PREENCHA TODOS os DADOS.");
        }; // Verifica se name e email foram fornecidos. Se algum deles estiver faltando, lança um erro com a mensagem “Por favor, PREENCHA TODOS os DADOS.”

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true,
            }
        }); // utiliza o Prisma Client para criar um novo registro na tabela customer do banco de dados com os dados fornecidos e um status definido como true.

        return customer; // retorna o cliente recém-criado.

    };

};

// Exporta a classe para que possa ser utilizada em outras partes da aplicação.
export { CreateCustomerService };