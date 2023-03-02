import express, {Request, Response} from 'express'

const LinkRouter = express.Router()

const baseLinkModel = ""

const shortenLink = (req: Request, res:Response) => {
    const link: string = req.body.link
    let forwardTo;
    let newLink;



    res.send('Shortened link')
}


LinkRouter.post('/shorten_link', shortenLink)


module.exports = LinkRouter