// Importa a instância configurada do Prisma Client que permite a interação com o banco de dados.
import prismaClient from '../prisma';

// Define uma interface TypeScript que especifica que a propriedade id é necessária para a operação de exclusão e deve ser do tipo string.
interface DeleteCustomerProps{
    id: string;
};

// Define uma classe que contém um método execute para deletar um cliente existente no banco de dados.
class DeleteCustomerService {

    // Método assíncrono que recebe um objeto com a propriedade id.
    async execute({id}: DeleteCustomerProps){

        if (!id) {
            throw new Error("Solicitação INVÁLIDA.");
        }; // Verifica se o id foi fornecido. Se não, lança um erro indicando que a solicitação é inválida.

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        }); // Usa o Prisma Client para procurar o primeiro cliente que corresponde ao id fornecido.

        if (!findCustomer) {
            throw new Error("Cliente NÃO EXISTE.");
        }; // Se nenhum cliente for encontrado, lança um erro informando que o cliente não existe.

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        }); // Se um cliente for encontrado, usa o Prisma Client para deletar o cliente com base no id.

        return { message: "Cliente Deletado com SUCESSO." }; // Retorna um objeto com uma mensagem indicando que o cliente foi deletado com sucesso.

    };

};

// Exporta a classe criada para que possa ser utilizada em outras partes da aplicação.
export { DeleteCustomerService };