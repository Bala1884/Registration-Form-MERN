import RegistrationModel from "../Models/registration.js";

const register=async (req,res)=>{  
    try {
        const { name, email, password } = req.body;
        const existingUser = await RegistrationModel.findOne({ email: email });
        
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }
    
        const newUser = new RegistrationModel({ name, email, password });
        const savedUser = await newUser.save();
    
        res.status(201).json(savedUser);
      } 
      catch (err) {
        res.status(500).json({ error: err.message });
      }
    }

    export default register;


