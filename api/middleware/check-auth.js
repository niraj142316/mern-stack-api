const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        console.log(token);
        const vfy=jwt.verify(token, 'this is demo user api');
        if(vfy){
            next();
        }
        else{
            res.status(401).json({
                msg:'you are not a valid user.....'
            })
        }
    }
    catch(error){
        res.status(401).json({
            msg:'invalid token'
        })
    }
}