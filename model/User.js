const mongoose=require('mongoose')
const validateMsg=require('validator')
const {Schema}=mongoose;

// var validateEmail = function(email) {
//     var re =/^\S+@\S+\.\S+$/;
//     return re.test(email)
// };

var strongPassword=function(password){
    const minLength=8

    return(
        
            password.length >= minLength 
        );
    
}
const nameValidtion=function(name){
   var res=/^[a-zA-Z\s]+$/;
   return res.test(name);
}

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'A name is required'],
        minlength:[4,"Name must be at least 3 characters"],
        maxlength:[20,"Name can't exceed 15 characters"],
        validate: [nameValidtion,'Invalid Name']
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique: true,
        // validate:[validateEmail,'invalid email']
        validate:[validateMsg.isEmail,'invalid email']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate:[strongPassword,"incorrect password"]
    },
    date:{
        type:Date,
        default: Date.now()
    }

})

module.exports=mongoose.model('user',userSchema);