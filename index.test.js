const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')
const { describe } = require('@jest/globals');

describe('Band, Musician, and Song Models', () => {
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
        const newBand = await Band.create({ name: 'TicTacToe', genre: 'pop'});
        expect(newBand).toBeInstanceOf(Band);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const newMusician = await Musician.create({ name: 'JoeBlow', instrument: 'symbols'});
        expect(newMusician).toBeInstanceOf(Musician);
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const aBand = await Band.create({ name: 'TicTacToe', genre: 'pop'});
        const newBand = await aBand.update({ name: 'ConnectFour'});
        expect(newBand.name).toBe('ConnectFour');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const aMusician = await Musician.create({ name: 'JoeBlow', instrument: 'symbols'});
        const newMusician = await aMusician.update({ instrument: 'horn'});
        expect(newMusician.instrument).toBe('horn');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const aBand = await Band.create({ name: 'Roboto', genre: 'pop'});
        await aBand.destroy();
        const isNull = await Band.findByPk(3);
        expect(isNull).toBeNull();
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const aMusician = await Musician.create({ name: 'BasePlayer', instrument: 'base'});
        await aMusician.destroy({ where: { name: 'BasePlayer'}});
        const isNull = await Musician.findOne({ where: {name: 'BasePlayer'}});
        expect(isNull).toBeNull();
    })
})