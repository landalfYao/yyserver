/**
 * 配置文件
 */
//发布配置
const production = {

    //服务器端口
    SERVER_PORT : 3000,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "http://hkapi.sunwou.com",
        user: "root",
        password: "Qwe123..",
        port: "3306",
        database: "yzy",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    },
    //超级管理员
    SUPER_ADMINISTRATOR:10000 

}

//开发配置
const development = {

    //服务器端口
    SERVER_PORT : 3000,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "47.97.208.192",
        user: "root",
        password: "Qwe123..",
        port: "3306",
        database: "yzy"
    },

    //超级管理员 Y_USER PK_ID
    SUPER_ADMINISTRATOR:10000 ,

    //登录限制
    limiTLogin:{
        open              :   true       ,
        limitTime         :   2*60*1000  ,   //几分钟之内连续输错
        inputPwdErrorNum  :   4          ,   //密码连续输错次数
        waitTime          :   5*60*1000  ,   //等待时间      
    }
}


const config = development

module.exports = config