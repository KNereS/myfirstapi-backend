// Importa a classe PrismaClient do pacote @prisma/client.
import { PrismaClient } from "@prisma/client";

// Cria uma nova instância do PrismaClient. Esta instância será usada para enviar consultas ao banco de dados.
const prismaClient = new PrismaClient();

// Exporta a instância do prismaClient como o export padrão do módulo. Isso permite que outros arquivos na aplicação importem essa instância e a utilizem para acessar o banco de dados.
export default prismaClient;