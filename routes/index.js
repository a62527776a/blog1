var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var model = require('../models/model');
var User = model.User;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '主页',
        arts: [{
            title: 'nodeJS入门',
            tags: 'nodeJS',
            author: '...',
            createTime: '',
            content: '...'
        },{
            title: 'nodeJS入门',
            tags: 'nodeJS',
            author: '...',
            createTime: '',
            content: '...'
        },{
            title: 'nodeJS入门',
            tags: 'nodeJS',
            author: '...',
            createTime: '',
            content: '...'
        }]
    });
});

router.get('/login',function(req,res,next){
	res.render('login',{title:'login'});
})
router.post('/login',function(req,res){

})
router.post('/logout',function(req,res){

})
router.get('/reg',function(req,res){

})
router.post('/reg',function(req,res){
	var username = req.body.username,
		password = req.body.password,
		repeat_pwd = req.body.repeat_pwd;
		if(password !== repeat_pwd){
			console.log('两次密码输入不一致')
			return res.redirect('/reg');
		}
    User.findOne({username:username},function(err,user){
        if(err){
            console.log(err);
            return res.redirect('/reg');
        }
        if(user){
            console.log('用户名存在');
            return res.redirect('/reg');
        }
        var md5 = crypto.createHash('md5'),
            md5password = md5.updata(password).digest('hex');
        var newUser = new User({
            username:username,
            password:md5password,
            email:req.body.email
        })
        newUser.save(function(err,doc){
            if(err){
                console.log(err);
                return res.redirect('/reg');
            }
            console.log('注册成功');
            newUser.password = null;
            delete newUser.password;
            req.session.user = newUser;
            res.redirect('/');
        })
    })
})
router.get('/post',function(req,res){

})
router.post('/post',function(req,res){

})
router.get('/search',function(req,res){

})
router.post('/search',function(req,res){

})
router.get('/edit/:_id',function(req,res){

})
router.post('/edit/:_id',function(req,res){
	
})
router.post('/remove/:_id',function(req,res){

})
module.exports = router;
