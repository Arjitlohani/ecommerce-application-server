import formidable from 'formidable';

export const formidableParser = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req,(error,fields,files)=>{
        if(error){
            return res.status(400).send({
                success: false,
                message: "Invalid form data",
                error
            })
        }
        req.body= fields
        req.files= files
        next()
})

}