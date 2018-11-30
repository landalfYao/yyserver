const usermodel = require('./../model/user.js')
const retCode = require('./../utils/retcode.js')
const com = require('../utils/common')
const db = require('./../db/mysqlHelper.js')
const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
const pPattern =  /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/
const mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[7|8])|(18[0,5-9]))\d{8}$/;
const user = {

/**
* @api {post} /api/user/get 用户查询
* @apiDescription 用户查询
* @apiName Get
* @apiGroup User
* @apiHeader {string} token token
* @apiHeader {string} uid 用户ID
* @apiParam {string} fields 查询字段 例('name,id') 传空代表查询所有
* @apiParam {string} wheres 查询条件 例('name=0 and id=3')
* @apiParam {string} sorts  查询排序 例('name desc, id asc')
* @apiParam {int} pageIndex  页码
* @apiParam {int} pageSize  每页条数
* @apiVersion 1.0.0  
* @apiSuccessExample {json} Success-Response:
*  {
*   "code": 1,
*   "codeMsg": "SUCCESS OK",
*   "data": {
*       "list": [
*           {
*               "pk_id": "Y1001",
*               "username": "test001",
*               "pwd": "qweqwe",
*               "phone_number": "17788889999",
*               "nick_name": "测试一号",
*               "avatar_url": "",
*               "email": null,
*               "create_datetime": "2018-11-29T03:44:20.000Z",
*               "update_datetime": null,
*               "is_delete": 0,
*               "user_state": "AVAILABLE"
*           }
*       ],
*       "total": 1
*   }
*}
* @apiSampleRequest http://localhost:3000/api/user/get
* @apiVersion 1.0.0
*/
  async getList ( ctx ) {
    ctx.request.body.tables = 'y_user'
    let result = await com.commonSelect.getList( ctx )
    if(result.args){
        let userResult = await usermodel.getList(result.args,result.ct)
        let bkdata = result.result
        bkdata.data = userResult
        let ct = result.ct.payload
        if(ct){
            db.setLog({
              uid:ct.pk_id,
              ped_operation: '查询用户信息',
              operation_code:bkdata.code,
              operation_msg: bkdata.codeMsg,
              api_url:'/api/user/get'
            })
        }
        return bkdata
    }else{
        return result
    }
  },
/**
* @api {post} /api/user/register 用户注册
* @apiDescription 用户注册
* @apiName Register
* @apiGroup User
* @apiParam {string} username 用户名 4到16位，只能输入字母、数字、下划线、减号
* @apiParam {string} password 密码 8位以上密码，必须包含字母和数字
* @apiParam {string} checkPwd 确认密码
* @apiVersion 1.0.0  
* @apiSuccessExample {json} Success-Response:
 * {
 *  "code": 1,
 *  "codeMsg": "SUCCESS OK",
 *  "data": "refref2wss",
 *  "msg": "注册成功"
 * }
 * @apiSampleRequest http://localhost:3000/api/user/register
 * @apiVersion 1.0.0
*/
  async register ( ctx ) {
    let form = ctx.request.body

    if(form.username == '' || form.username == undefined){
        result = retCode.NotNullValue
        result.msg = '用户名不能为空'
        return result
    }else if(form.password == '' || form.password == undefined){
        result = retCode.NotNullValue
        result.msg = '密码不能为空'
        return result
    }else if(form.checkPwd == '' || form.checkPwd == undefined){
        result = retCode.NotNullValue
        result.msg = '确认密码不能为空'
        return result
    }else{
        form.password = com.secrets.decypt(form.password,'base64', com.ivkey, 'hex', true)
        form.checkPwd = com.secrets.decypt(form.checkPwd,'base64', com.ivkey, 'hex', true)
        if(form.password == form.checkPwd){
            let result = retCode.Success
            if(!uPattern.test(form.username)){
                result = retCode.IncorrectFormat
                result.msg = '请输入4到16位，只能输入字母、数字、下划线、减号'
                return result
            }else{
                if(!pPattern.test(form.password)){
                    result = retCode.IncorrectFormat
                    result.msg = '请输入8位以上密码，必须包含字母和数字'
                    return result
                }else{
                    let res = await usermodel.addUser({
                        username:form.username,
                        password:com.md5(form.password),
                        nickName:form.username
                    })
                    if(res.errno){
                        return {code:res.errno ,codeMsg:res.code ,msg:'用户名已存在'}
                    }else{
                        db.setLog({
                            uid:res.insertId,
                            ped_operation: '注册用户',
                            operation_code:result.code,
                            operation_msg: result.codeMsg,
                            api_url:'/api/user/register'
                        })
                        result.data = form.username
                        result.msg  = '注册成功'
                        return result
                    }
                    
                }
            }
        }else{
            result = retCode.Fail
            result.msg = '密码不相等'
            return result
        }
    }
  },

/**
* @api {post} /api/user/login 用户登录
* @apiDescription 用户登录
* @apiName Login
* @apiGroup User
* @apiParam {string} username 用户名 4到16位，只能输入字母、数字、下划线、减号
* @apiParam {string} password 密码 8位以上密码，必须包含字母和数字
* @apiVersion 1.0.0  
* @apiSuccessExample {json} Success-Response:
 * {
 *  "code": 1,
 *  "codeMsg": "SUCCESS OK",
 *  "data": "refref2wss",
 *  "msg": "注册成功"
 * }
 * @apiSampleRequest http://localhost:3000/api/user/login
 * @apiVersion 1.0.0
*/
  async login ( ctx ) {
    let form = ctx.request.body
    //参数判空
    let result = await this.isParamsNull( form )

    if(result.code == 1){
        form.password = com.secrets.decypt(form.password,'base64', com.ivkey, 'hex', true)
        form.password = com.md5(form.password)
        let res = null
        //登录方式，手机号/用户名/邮箱
        let loginStyle = 'username'
        if(mPattern.test(form.username)){
            loginStyle = 'phone_number'
        }else if(ePattern.test(form.username)){
            loginStyle = 'email'
        }else{
            loginStyle = 'username'
        }
        let isUser = await usermodel.getByUsername(form)
        if(isUser.errno){
            return {code:res.errno ,codeMsg:res.code ,msg:'数据异常'}
        }else{
            if(isUser.length == 1){
                res = await usermodel.getByUsernameAndPassword(loginStyle,form)
                if(res.errno){
                    return {code:res.errno ,codeMsg:res.code ,msg:'数据异常'}
                }else{
                    if(res.length == 1){
                        if(res[0].is_delete == 1){
                            result = retCode.Fail
                            result.msg = '用户已被删除'
                        }else if(res[0].user_state == 'DISABLE'){
                            result = retCode.Fail
                            result.msg = '账户不可用,请联系管理'
                        }else{
                            const userToken = {
                                pk_id: res[0].pk_id,
                                username: res[0].username
                            }
                            const token = await com.jwtFun.sign(userToken)
                            result = retCode.Success
                            result.msg = '登录成功'
                            result.token = token
                            result.data = res[0]
                            db.setLog({
                                uid:res[0].pk_id,
                                ped_operation: '用户登录',
                                operation_code:result.code,
                                operation_msg: result.codeMsg,
                                api_url:'/api/user/login'
                            })
                        }
                    }else if(res.length >1){
                        result = retCode.Fail
                        result.msg = '登录异常'
                    }else{
                        result = retCode.UsernameOrPasswordError
                        result.msg = '密码不正确'
                        db.setLog({
                            uid:isUser[0].pk_id,
                            ped_operation: '用户登录',
                            operation_code:result.code,
                            operation_msg: result.codeMsg,
                            api_url:'/api/user/login'
                        })
                    }
                }
            }else if(isUser.length > 1){
                result = retCode.Fail
                result.msg = '登录异常'
            }else{
                result = retCode.UserNotExist
                result.msg = '用户不存在'
            }
            
        }
    }

    return result
  },
  //登录判断空值
  async isParamsNull( form ){
    let result = retCode.Success
    if(form.username == '' || form.username == undefined){
        result = retCode.NotNullValue
        result.msg = '用户名不能为空'
    }else if(form.password == '' || form.password == undefined){
        result = retCode.NotNullValue
        result.msg = '密码不能为空'
    }
    return result
  },
  //密码输错锁定
  async inputPwdErrorLimit( form ){
    
  }
}

module.exports = user