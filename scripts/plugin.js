


hexo.extend.helper.register('createMenu',function(posts){
  var menuStr=new Array();
  var that=this;
  if(posts){
    posts.forEach(function(item){
      menuStr.push('<a href="/'+item.path+'" class="article" title="'+item.title+'">')
      menuStr.push('<div class="imgbox">')
      menuStr.push('<img src="'+(item.cover || hexo.theme.config.default_cover)+'" alt="'+item.title+'>">')
      menuStr.push('</div>')
      menuStr.push('<div class="titlebox">')
      menuStr.push('<h3 class="title" title="'+item.title+'">'+item.title+'</h3>')
      menuStr.push('<p>'+item.subtitle+'</p>')
      menuStr.push('<span>'+that.full_date(item.date, 'YYYY-MM-DD')+'</span>')
      menuStr.push('</div>')
      menuStr.push('</a>');
    })
    return menuStr.join("");
  }
});