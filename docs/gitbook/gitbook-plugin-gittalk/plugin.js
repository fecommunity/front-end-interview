require(['gitbook'], function(gitbook) {
  gitbook.events.bind('page.change', function() {
    var config = gitbook.state.config.pluginsConfig
    var _defaults = {
      id: window.md5(location.href)
    }
    var options = Object.assign({}, _defaults, config.gittalk)
    var gitalk = new window.Gitalk(options)

    gitalk.render('gitalk-container')
  })
})
