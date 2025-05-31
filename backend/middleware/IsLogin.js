import jwt from 'jsonwebtoken'
 const isLogin=(req,res,next)=>{
        try {
            const {id,role}=jwt.verify(req?.headers?.authorization.split(' ')[1],process.env.SECRET_KEY)
            req.userId=id
            req.role=role
            if(!req.userId || !req.role){
                return res.status(401).json({
                    success:false,
                    message:'ابتدا وارد شوید'
                })
            }
            return next()
        } catch (error) {
            console.log("🚀 ~ isLogin ~ error:", error)
            return res.status(401).json({
                success:false,
                message:'ابتدا وارد شوید'
            })
        }
}
export default isLogin


