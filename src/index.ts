import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import {schema} from './Schema';
import {Users} from './Entities/Users';

const main = async () => {

    await createConnection({
        type: 'mysql',
        database: 'cook_book_db',
        username: "root",
        password: "Admin24",
        logging: true,
        synchronize: true,
        entities: [Users]
    });
    const app = express();
    app.use(cors());
    app.use(express.json());
    //TODO: add graphql schema
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(5000, () => {
        console.log('Server started on port 5000');
    });
}

main().catch(err => console.error(err));