const uuidv4 = require('uuid/v4');
const { readFile } = require('../handlers/handlerJSON.js');

const getAll = async () => {
    try {
        let content = await readFile(`${__dirname}/tickets.json`);

        if (content) {
            content.tickets = content.tickets.map(ticket => ({ id: uuidv4(), ...ticket }));
            return content;
        }
    } catch (e) {
        throw Error(e);
    }
};

module.exports = {
    getAll
};