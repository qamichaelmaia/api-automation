const { spec } = require('pactum');
const { eachLike, like } = require('pactum-matchers');

it('Listagem de usuários', async () => {
  await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
        query {
            Users {
              id
              email
              profile {
                firstName
              }
            }
          }
    `)
    .expectStatus(200)
    .expectJsonMatch({
        data: {
            Users: eachLike({
                id: like("6601b8404cd5a2e84942488f"),
                email: like("michaelqa@hotmail.com"),
                profile: {
                    firstName: ("Michael")
                }
            })
        }
    })
});
