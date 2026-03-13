import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client"

const wss = new WebSocketServer({
    port: 3001
});

wss.on("connection", async (socket) => {
    const user = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("hi there you are connected to the server")
})