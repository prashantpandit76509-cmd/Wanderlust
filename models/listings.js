const mongoose=require("mongoose");
const schema=mongoose.Schema;
const listings=new schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:Object,
        default:"https://unsplash.com/photos/transamerica-pyramid-skyline-in-san-francisco-pKEGyLcl1ac",
        set:(v)=>v===""?"https://unsplash.com/photos/transamerica-pyramid-skyline-in-san-francisco-pKEGyLcl1ac":v
    },
    price:Number,
    location:String,
    country:String
})
const Listings=mongoose.model("Listings",listings);
module.exports=Listings;
