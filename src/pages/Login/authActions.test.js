const rewire = require("rewire")
const authActions = rewire("./authActions")
const submit = authActions.__get__("submit")
// @ponicode
describe("authActions.login", () => {
    test("0", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            authActions.login(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["elio@example.com", "Elio", "Dillenberg"], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            authActions.login(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            authActions.login(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], [10, -45.9, 103.5, 0.955674], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            authActions.login(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["a", "b", "043", "foo bar"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            authActions.login(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            authActions.login(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("submit", () => {
    test("0", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], [-1, 0.5, 1, 2, 3, 4, 5], ["elio@example.com", "Elio", "Dillenberg"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            submit(param1, "http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            submit(param1, "http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            submit(param1, "ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            submit(param1, "https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            submit(param1, "https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            submit(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authActions.logout", () => {
    test("0", () => {
        let callFunction = () => {
            authActions.logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authActions.validateToken", () => {
    test("0", () => {
        let callFunction = () => {
            authActions.validateToken("=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authActions.validateToken("~@")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authActions.validateToken("×")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authActions.validateToken("...")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authActions.validateToken("[")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            authActions.validateToken(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
