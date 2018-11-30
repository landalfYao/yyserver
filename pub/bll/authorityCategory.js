const model = require('./../model/authorityCategory.js')
const retCode = require('./../utils/retcode.js')
const com = require('../utils/common')
const db = require('./../db/mysqlHelper.js')
const config = require('./../config/config')

const authorityCategory = {
/**
* @api {post} /api/auth/cate/add 添加权限分类
* @apiDescription 添加权限分类
* @apiName Add
* @apiGroup Auth 权限
* @apiHeader {string} token token
* @apiHeader {string} uid 用户ID
* @apiParam {string} cateName 分类名称
* @apiParam {string} remarks 备注
* @apiParam {int} sort  序号
* @apiParam {int} isShow  是否显示 0不显示  1显示 
* @apiVersion 1.0.0  
* @apiSampleRequest http://localhost:3000/api/auth/cate/add
* @apiVersion 1.0.0
*/
    async add(ctx) {
        let form = ctx.request.body
        let result = retCode.Success
        let auth = await com.jwtFun.checkAuth(ctx)
        if (auth.auth) {
            let bkdata = await model.add({
                cateName: form.cateName,
                remarks: form.remarks,
                sort: form.sort,
                isShow: form.isShow
            })
            if (bkdata.errno) {
                if (bkdata.errno == 1062) {
                    result = retCode.Fail
                    result.msg = '该权限名称已存在'
                } else {
                    result = retCode.ServerError
                    result.msg = '服务端错误'
                }
            } else {
                result.data = bkdata.insertId
                result.msg = '添加成功'
            }
        } else {
            result = auth
        }
        return result
    },
    async update ( ctx ){
        
    }
}

module.exports = authorityCategory