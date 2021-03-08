// Import DB
const db = require('..models');

const index = async (req, res) => {
    const allMessages = await db.Message.findAll();
    if (allMessages.length >= 1) res.json({ messages: allMessages });
    else res.json({ messages: 'There are no messages' });
}


module.exports = {
    index,
}