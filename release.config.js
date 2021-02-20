module.exports = {
  branches: [
    'master',
    {
      name: 'beta',
      prerelease: true
    }
  ],
  verifyConditions: [ '@semantic-release/changelog', '@semantic-release/git', '@semantic-release/npm' ]
}
