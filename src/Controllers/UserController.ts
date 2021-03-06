import User from '../model/User'
import { Response, Request } from 'express'

class UserControllers {
    public async index(req: Request, res: Response) {
        const users = await User.find()

        return res.json(users)
    }
    
    public async create(req: Request, res: Response) {
        const user = await User.create(req.body)

        return res.json(user)
    }
}
 
export default new UserControllers 