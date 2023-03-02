import express, {Request, Response} from 'express'

const router = express.Router()

const baseLinkModel = ""

const shortenLink = (req: Request, res:Response) => {
    const longLink = req.body.longLink
    const link: string = req.body.link
    let forwardTo;
    let newLink;

    

    res.send('Shortened link')
}


router.route('/shorten_link')
    .post(shortenLink)


module.exports = router