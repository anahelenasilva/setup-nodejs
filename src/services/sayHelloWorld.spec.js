const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello tests', () => {
    it('should return Hello World', () => {
        const response = sayHelloWorld.sayHello()
        expect(response).toEqual('Hello World')
    })

    it('should return Hello Name', () => {
        const response = sayHelloWorld.sayHello('Name')
        expect(response).toEqual('Hello Name')
    })
});
