import { Router } from 'express'
import UserControllers from '../src/Controllers/UserController'

const routes = Router()

routes.get('/', UserControllers.index)
routes.post('/', UserControllers.create)

export default routes 