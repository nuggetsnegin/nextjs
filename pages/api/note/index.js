import nc from 'next-connect'
import notes from '../../../src/data/data'
const handler = nc()
    .post((req, res) => {
        const note = {
            //whatever is on request.body
            ...req.body,
            id: Date.now()
        }
        //push to our db of notes
        notes.push(note);
        res.json({data: note})
    })
    //get all the notes
    .get((req, res) => {
        res.json({data: notes})
    })
 
export default handler
