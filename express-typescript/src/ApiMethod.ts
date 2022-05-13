import { Request, Response } from "express";
import { User } from "./userSchema";

// GetMethod

export let getUser = (req: Request, res: Response) => {
    const userdata = User.find((err: any, users: any) => {
        if (err) {
            return res.send(err)
        } else {
            res.send(users)
        }
    })

    
}

export let getUserbyid = (req: Request, res: Response) => {
    const usersbyid = User.findById(req.params.id, (err: any, users: any) => {
        if (err) {
            return res.send(err)
        } else {
            res.send(users)
        }
    })
}

//put method
export let addUser = (req: Request, res: Response) => {
    let user = new User(req.body)
    user.save((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}
