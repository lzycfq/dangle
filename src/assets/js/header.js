var headerText = '<header class="container">\n' +
    '    <!--头部导航栏-->\n' +
    '        <nav class="navbar nav_head">\n' +
    '            <div class="navbar-header">\n' +
    '                <button type="button" class="navbar-toggle collapsed btn_br" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n' +
    '                    <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>\n' +
    '                </button>\n' +
    '                <div style="height:54px;overflow:hidden;"><a href="/" title="当乐厨卫官网-中国十大厨电品牌_厨电品牌排行榜前十"><img src="/images/logo.png" alt="当乐厨卫官网-中国十大厨电品牌_厨电品牌排行榜前十" title="" class="nav_header_img"></a></div>\n' +
    '            </div>\n' +
    '            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n' +
    '                <ul class="nav navbar-nav nav_text" id="tiaozhuan">\n' +
    '                    <li role="presentation"><a title="厨房电器" href="/#tab_menu">核心产品</a></li>\n' +
    '                    <li role="presentation"><a title="关于当乐厨卫" href="about">关于当乐</a></li>\n' +
    '                    <li role="presentation"><a title="厨房电器新闻资讯" href="http://www.danglelife.com/News/list/type/1.html">厨电资讯</a></li>\n' +
    '                    <li role="presentation"><a title="品牌传播" href="brand" rel="nofollow">品牌传播</a></li>\n' +
    '                    <li role="presentation"><a title="招商加盟" href="handbook" rel="nofollow">招商加盟</a></li>\n' +
    '                    <li role="presentation"><a href="https://www.jd.com" target="_blank" rel="nofollow">在线商城</a></li>\n' +
    '                </ul>\n' +
    '                <form class="navbar-form navbar-right" action="{:U(\'Goods/list\')}" method="get">\n' +
    '                    <div class="form-group">\n' +
    '                        <input type="text" class="form-control" placeholder="产品型号" name="name">\n' +
    '                    </div>\n' +
    '                    <button type="submit" class="btn btn-default">搜索</button>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        </nav>\n' +
    '    </header>';
document.write(headerText);