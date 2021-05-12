module.exports = {
    plugins: {
        autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
        "postcss-px-to-viewport": {
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            viewportHeight:667,
            unitPrecision: 6,
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["ignore",'TabBar','TabBarItem','Navbar'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
             // 是否转换后直接更换属性值
            exclude: [/TabBar/], // 设置忽略文件，用正则做目录名匹配
            //如果设置了include，那将只有匹配到的文件才会被转换
        }
    }
};

