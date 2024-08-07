// Bibliotecas e Framework
const supertest = require('supertest')

const petId = 25669201

// Em javaScript, classe é opcional, mas pode agrupar um Describe
describe(' API PetStore Swagger - Entidade Pet', () => {
    
    // Atributos do grupo/describe
    const request = supertest('https://petstore.swagger.io/v2') // Base URL

    // Funções ou Métodos: Its    
    it('POST Pet', () => {
        // Atributos, Campos , características, configurações

        // Funções de Apoio (Opcional)

        // Funções de teste em si

    })
    
})
