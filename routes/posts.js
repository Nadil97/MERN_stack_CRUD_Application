const express=require('express');
const Posts=require('../models/posts');

const router=express.Router();

router.post('/post/save',(req,res)=>{
    let newPost =new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts save successfully"
        });

    }
        
    );
});

router.get('/post',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

module.exports =router;