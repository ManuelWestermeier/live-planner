const { areSetAndTheSameType } = require("are-set");
const { createServer } = require("wsnet-server");

createServer({ port: 8080 }, async client => {
    var user = false

    client.onGet("auth", data => {
        if (!areSetAndTheSameType(data, [["user", "string"], ["password", "string"]])) {
            return
        }
    })
})