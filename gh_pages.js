const gh_pages = require('gh-pages');

gh_pages.publish('build', {
    branch: 'build_client',
    remote: 'origin',
    user: {
        name: 'sprada-rus',
        email: 'sappronov@gmail.com'
    }
})