define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/cate/add",
    "title": "添加权限分类",
    "description": "<p>添加权限分类</p>",
    "name": "Add",
    "group": "Auth___",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cateName",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort",
            "description": "<p>序号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "isShow",
            "description": "<p>是否显示 0不显示  1显示</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/auth/cate/add"
      }
    ],
    "filename": "pub/bll/authorityCategory.js",
    "groupTitle": "Auth___"
  },
  {
    "type": "post",
    "url": "/api/secret/encrypt",
    "title": "加密",
    "description": "<p>加密</p>",
    "name": "Encrypt",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str",
            "description": "<p>输入文本</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"name\" : \"loginName\",\n        \"password\" : \"loginPass\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/secret/encrypt"
      }
    ],
    "filename": "pub/bll/secret.js",
    "groupTitle": "Secret"
  },
  {
    "type": "post",
    "url": "/api/user/get",
    "title": "用户查询",
    "description": "<p>用户查询</p>",
    "name": "Get",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fields",
            "description": "<p>查询字段 例('name,id') 传空代表查询所有</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wheres",
            "description": "<p>查询条件 例('name=0 and id=3')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sorts",
            "description": "<p>查询排序 例('name desc, id asc')</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/get"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名 4到16位，只能输入字母、数字、下划线、减号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码 8位以上密码，必须包含字母和数字</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"code\": 1,\n \"codeMsg\": \"SUCCESS OK\",\n \"data\": \"refref2wss\",\n \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/login"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名 4到16位，只能输入字母、数字、下划线、减号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码 8位以上密码，必须包含字母和数字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "checkPwd",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"code\": 1,\n \"codeMsg\": \"SUCCESS OK\",\n \"data\": \"refref2wss\",\n \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/register"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/state/available",
    "title": "启用用户",
    "description": "<p>启用用户</p>",
    "name": "available",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ids",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/state/available"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/state/disable",
    "title": "禁用用户",
    "description": "<p>禁用用户</p>",
    "name": "disable",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ids",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/state/disable"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/info",
    "title": "查询用户信息(个人)",
    "description": "<p>查询用户信息(个人)</p>",
    "name": "info",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/info"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/update",
    "title": "更新用户个人信息",
    "description": "<p>更新用户个人信息</p>",
    "name": "update",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/update"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/update/pwd",
    "title": "修改密码",
    "description": "<p>修改密码</p>",
    "name": "updatePwd",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPwd",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPwd",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirmPwd",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/update/pwd"
      }
    ],
    "filename": "pub/bll/user.js",
    "groupTitle": "User"
  }
] });
