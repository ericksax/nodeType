import express from "express"
import mongoose from "mongoose"
import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
        this.batabase()
        this.routes()
    }

    private middlewares() {
        this.express.use(express.json())
    }

    private batabase() {
        mongoose.connect('mongodb://localhost:27017/nodeTS', {
            useNewUrlParser: true, useUnifiedTopology: true
        })
    }

    private routes() {
        this.express.use("/", routes)
    }
}

export default new App().express