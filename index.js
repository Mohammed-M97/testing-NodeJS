let fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);

        // unlink for delete file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'message.txt'), data);

        // append is adding data to file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'message.txt'), '\n\n Hi nice to meet you');

        await fsPromises.rename(path.join(__dirname, 'files', 'message.txt'), path.join(__dirname, 'files', 'messageDone.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'messageDone.txt'), 'utf8');
        console.log(newData);
        
    } catch (err) {
        console.error(err);
    }
}

fileOps();


/* fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}) */

/* fs.readFile('./files/lorem.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}) */

/* fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello nice to meet you', (err) => {
    if (err) throw err;
    console.log('write done');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Meet too', (err) => {
        if (err) throw err;
        console.log('reply done');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'message.txt'), (err) => {
            if (err) throw err;
            console.log('message done');
        })
    })
}) */