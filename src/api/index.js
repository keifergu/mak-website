import AV from 'leancloud-storage';

const appId = '2y7v8BdJxedXm5a5sNBji5Aj-gzGzoHsz';
const appKey = 'heXMkHNlopCuUXWzYPpnjcRw';

AV.init({ appId, appKey });

let Comment = AV.Object.extend('Comments');
let Mark = AV.Object.extend('Marks');

export default {
  user: {
    login() {
      AV.User.logIn('Tom', 'cat!@#123').then(function (loginedUser) {
         console.log(loginedUser);
       }, function (error) {
       });
    },
    register() {
      // 新建 AVUser 对象实例
      var user = new AV.User();
      // 设置用户名
      user.setUsername('Tom');
      // 设置密码
      user.setPassword('cat!@#123');
      // 设置邮箱
      user.setEmail('tom@leancloud.cn');
      user.signUp().then(function (loginedUser) {
          console.log(loginedUser);
      }, function (error) {
      });
    }
  },
  comment: {
    get(text, url) {
      let queryUrl = new AV.Query('Comments');
      let queryText = new AV.Query('Comments');
      queryUrl.equalTo('url', url);
      queryText.equalTo('text', text);
      let query = AV.Query.and(queryUrl, queryText);
      return query.find()
    },

    add(serialize, text, url, comment) {
      // 构建数据储存对象
      let data = new Comment();
      data.set('serialize', serialize);
      data.set('url', url);
      data.set('text', text);
      data.set('comment', comment);
      // 保存数据
      return data.save()
    },

    all(url) {
      let queryNote = new AV.Query('Comments');
      queryNote.equalTo('url', url);
      return queryNote.find();
    }
  },

  mark: {
    add(serialize, text, url) {
      let data = new Mark();
      data.set('url', url);
      data.set('text', text);
      data.set('serialize', serialize);
      // 保存数据
      return data.save()
    },

    get(url) {
      let queryUrl = new AV.Query('Marks');
      queryUrl.equalTo('url', url);
      return queryUrl.find()
    }
  }
}
