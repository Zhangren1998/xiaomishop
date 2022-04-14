# xiaomi-mall

##项目难点

```
技术难点1：获取到服务器返回的数据后赋值给变量，变量增加isChecked属性会导致复选框状态无法更改
解决方案：先给获取到的数据设置isChecked属性和值再赋值给变量

技术难点2：页面刷新会导致vuex中的数据被初始化，数据丢失
解决方案：  window.addEventListener('beforeunload', () => {
              console.log(this.$store.state.carts.count);
              sessionStorage.setItem('count', this.$store.state.carts.count)
            })
刷新页面之前将数据保存在本地，在vuex中数据赋值改为count: sessionStorage.getItem('count') || 0,
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
