const db = require('./../db/mysqlHelper.js')

const authorityCategory = {
    async add ( args ){
        let sql = 'INSERT INTO y_authority_category (cate_name,remarks,sort,is_show) value(?,?,?,?)'
        let params = [args.cateName, args.remarks, args.sort, args.isShow]
        let result = await db.query(sql, params)
        return result
    },
    async update ( args ){
        let sql = 'UPDATE y_authority_category set cate_name=?,remarks=?,sort=?,is_show=? where pk_id in (?)'
        let params = [args.cateName,args.remarks,args.sort,args.isShow,args.uid]
        let result = await db.query(sql,params)
        return result
    }
}

module.exports = authorityCategory