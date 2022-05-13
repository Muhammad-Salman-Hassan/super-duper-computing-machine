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
    const { name, username } = req.body
    if (!name || !username) {
        return res.send(422).json({ error: "Filled both field" })
    }
    let user = new User({
        name,
        username
    })
    user.save().then(
        (err: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(user)
            }
        }
    )
}

export let updateUser = (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.params.id, req.body ).then((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Updated Sucessfully")
        }
    })
}

export let deleteUser = (req: Request, res: Response) => {
    User.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Delete success full")
        }
    })
}