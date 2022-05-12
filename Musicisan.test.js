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
        const testMuscian = await Musician.create({name:'micheal Jackson'})
        expect(testMusican.name).toBe('micheal Jackson');
    })

    test('can create a Musician', async () => {
        const testMuscian = await Musician.create({name: 'Micheal Bolton', instrument: 'Gitar'}) 
        // TODO - test creating a musician
        expect('testMusician.instrument').toBe('Gitar');
    })
})