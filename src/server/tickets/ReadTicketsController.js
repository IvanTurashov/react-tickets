const { getAll } = require('./TicketService.js');

const ReadTicketsController = async (req, res, next) => {
    try {
        const content = await getAll();
        res.json(content);
    } catch (e) {
        next(e);
    }
};

module.exports = ReadTicketsController;