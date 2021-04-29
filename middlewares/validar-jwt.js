const  { response,request } =require('express');
const jwt =require('jsonwebtoken');

const validarJWT = (req=request,res =response,next) => {

    const token =req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticon'
        })
    }
    try{
        const payload=jwt.verify( token, process.env.SECRETORPRIVATEKEY )

        console.log( payload );
        next();
    }
    catch( error ){
        console.log(error);
        res.status(401).json({
            msg:'Token no valido'
        })

    }
    

}

module.exports = {
    validarJWT
}













