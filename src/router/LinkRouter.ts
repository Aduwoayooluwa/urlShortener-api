import express, {Request, Response} from 'express'
import { isUrlValid } from '../utils/validUrl'
import { nanoid } from 'nanoid'
const config = require('config')
const LinkSchema = require('./models/LinkSchema')


export const router = express.Router()

const shortenLink = async (req: Request, res:Response) => {
    const longLink = req.body.longLink
    const link: string = req.body.link
    const baseUrl = config.get('baseUrl');

    // chck if long url is valid
    if (!isUrlValid(link)) {
        return res.status(400).json({message: "Boss man, your url isn't valid. Abeg no spoil our name"})
    }


    if (isUrlValid(longLink)) {
        try {
            let url = LinkSchema.findOne({ longLink });

            if (url) {
                console.log("Already exists....");
                return res.status(201).json({ data: url });
            } else {
                //  create url code
                let urlCode = nanoid(10);
                let shortLink = baseUrl + '/' + urlCode;

                url = new LinkSchema({
                    longLink,
                    shortLink,
                    urlCode,
                    date: new Date()
                })

                console.log("Saving new record.....")

                await url.save();
                return res.status(201).json({ data: url })
            }
        
        } 
        
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Sonme error occured" })
        }    
    } else {
        return res.status(400).json({ message: "invalid long url" })

    }
}


router.route('/shorten_link')
    .post(shortenLink)


    // redirecting shortened link to original url
router.route('/:code')
    .get( async (req: Request, res:Response) => {
        try {
            const url = await LinkSchema.findOne({ urlCode: req.params.code })

            if (url) {
                console.log('Found. redirecting to original url');
                return res.redirect(url.longLink)
            }
            else {
                return res.status(400).json({ message: "Not found" })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Some error has occured" })
        }
    })


