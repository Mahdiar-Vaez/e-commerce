import jwt from 'jsonwebtoken'
export const IsAdmin=(req,res,next)=>{
        try {
            const {id,role}=jwt.verify(req?.headers?.authorization.split(' ')[1],process.env.SECRET_KEY)
            req.userId=id
            req.role=role
            if(role!='admin' || role!='superAdmin'){
                return res.status(401).json({
                    success:false,
                    message:'سطح دسترسی: شما حق دسترسی رو ندارید'
                })
               
            }
            return next()
        } catch (error) {
            console.log("🚀 ~ isAdmin ~ error:", error)
            return res.status(401).json({
                success:false,
                message:'سطح دسترسی: شما حق دسترسی رو ندارید'
            })
        }
}