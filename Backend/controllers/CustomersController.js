import { CustomerModel } from "../models/CustomersModel.js";


export const CustomersController = {
    getAll: async (req ,res)=>{
        let customers = await CustomerModel.find()
        res.send(customers)
    },
    getById: async (req,res)=>{
        let id = req.params.id
        let mycustomer = await CustomerModel.findById(id)
        res.send({
            message:"customer finded",
            data: mycustomer
        })
    },
    deleteCustomer: async (req ,res)=>{
        // let {id} = req.params
        // await CustomerModel.findByIdAndDelete(id)
        // res.send({
        //     message:"Customer deleted"
        // }) 
        try {
            await CustomerModel.findByIdAndDelete(req.params.id)
            res.status(204).send()
        } catch (error) {
            res.status(400).json({message:"Deleted"})
        }
    },
    postCustomer: async (req, res)=>{
        let newCustomer = CustomerModel(req.body)
        console.log(req.body)
        await newCustomer.save()
        res.send({
            message:"Post Saved",
            data:newCustomer
        })

    },
    updateCustomer: async (req, res)=>{
        let id = req.params.id
        let updateCustomer = req.body
        let updatedCustomer = await CustomerModel.findByIdAndUpdate({_id:id}, updateCustomer, {new:true})
        res.send(updatedCustomer)

    }
}