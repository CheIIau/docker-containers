import fastify, { FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { Pool } from "pg";
import { pgDatabase, pgHost, pgPassword, pgPort, pgUser } from "./keys";

(async function start() {
  const server = fastify();

  // server.addHook('onRequest', (request, reply, done) => {
  //   console.log(request.headers)
  //   done()
  // })

  await server.register(cors, {
    // put your options here
  });

  const pgClient = new Pool({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: +pgPort!,
  });

  await pgClient.connect()

  pgClient.on('connect', (client) => {
    client
      .query(
        "CREATE TABLE IF NOT EXISTS TODOS (id SERIAL PRIMARY KEY, todo TEXT NOT NULL)"
      )
      .catch((err) => console.error(err));
    console.log(1)
  });

  //just for test (:
  server.get("/ping/", async (request, reply) => {
    reply.send({ text: "pong" });
  });


  server.get("/todos/", async (request, reply) => {
    const values = await pgClient.query("SELECT * from TODOS");
    reply.send(values.rows);
  });

  server.post("/todo/", async (request: FastifyRequest<{ Body: { todo?: string } }>, reply) => {
    if (!request.body.todo) return
    try {
      const todoText = request.body.todo
      console.log(todoText)
      const values = await pgClient.query("INSERT INTO TODOS (todo) VALUES ($1)", [todoText])
      reply.status(200).send({ ok: true })
    } catch (error) {
      reply.status(500).send({ ok: false, error })
    }
  });

  server.delete("/todo/:id/", async (request: FastifyRequest<{ Params: { id?: string } }>, reply) => {
    if (!request.params.id) return
    try {
      const id = +request.params.id
      const values = await pgClient.query("DELETE FROM TODOS WHERE id = $1", [id])
      reply.status(200).send({ ok: true })
    } catch (error) {
      reply.status(500).send({ ok: false, error })
    }
  });

  server.listen({ port: 5000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
