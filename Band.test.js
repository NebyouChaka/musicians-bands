const {Sequelize} = require('./db');
const {Band, Musician} = require('./index')


describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name:'The Beatles'})
        expect(testMusican.name).toBe('The Beatles');
    })

    test('can create Band', async () => {
        const testBand = await Band.create({name: 'Boyz men', gener: 'vocal'}) 
        // TODO - test creating a musician
        expect('testMusician.gener').toBe('vocal');
    })
})
// test('Music lovers', async () => {
//     await createUser('Joe Blogs', 'joe.blogs@example.com');
//     expect(await db.query(sql`SELECT name, email FROM Band`)).toEqual([
//       {name: 'Joe Blogs', email: 'joe.blogs@example.com'},
//     ]);
//   });