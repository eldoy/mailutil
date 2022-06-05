const os = require('os')
const crypto = require('crypto')

function domain(email) {
  const m = /[^@]+@([\w\d\-\.]+)/.exec(email)
  return m && m[1]
}

function id(from) {
  const random = [2, 2, 2, 6].reduce(
    (prev, len) => prev + '-' + crypto.randomBytes(len).toString('hex'),
    crypto.randomBytes(4).toString('hex')
  )
  const host = (domain(from) || os.hostname() || 'localhost').split('@').pop()
  return `<${random}@${host}>`
}

module.exports = { domain, id }
