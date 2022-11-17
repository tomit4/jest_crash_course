const functions = require('../functions')

// Runs before/after each test
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// runs before/after all tests
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

const initDatabase = () => console.log('Database Initialized...')
const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking Name....')

describe('Checking Names', () => {
    beforeEach(() => nameCheck())

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})


// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// not.toBe
test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

/* CHECK FOR TRUTH & FALSY VALUES
    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the opposite of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true
    toBeFalsey matches anything that an if statement treats as false
*/

// toBeFalsy
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// toBeNull
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

// toEqual for Object Comparison
test('User should be Brad Traversy', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    })
})

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800
    const load2 = 800
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

// Working with async data

// promise
// test('User fetched name should be Leanne Graham', () => {
    // expect.assertions(1)
    // return functions.fetchuser()
        // .then(data => {
            // expect(data.name).toEqual('Leanne Graham')
        // })
// })

test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchuser()
    expect(data.name).toEqual('Leanne Graham')
})
