
const express=require("express");
const app=express();
const ejs=require("ejs");
const mongoose=require("mongoose");
const methodOverride=require("method-override");

const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
const Listing=require("./models/listings.js");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));



main().then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log("db connection unsucessfull");
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust")
}

app.get("/",(req,res)=>{
    res.send("hii");
})

app.get("/listings",async (req,res)=>{
    let allListing=await Listing.find({});
    res.render("index",{allListing});
})


//FOR ADDING NEW LISTING
app.get("/listings/new",async (req,res)=>{
       res.render("new");
});


//SHOW ROUTE (particular id)
app.get("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    const idListings=await Listing.findById(id);
    res.render("show",{idListings});
})
//create route
app.post("/listings",async (req,res)=>{
    let listing=req.body.listings;
    const newListing=new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
    console.log(newListing);
    

});

//edit the info
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("edit",{listing})
})
//update route
app.put("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings")
})

app.listen(8080,()=>{
    console.log("app is listening on port 8080");
})
