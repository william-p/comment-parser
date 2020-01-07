/* eslint no-unused-vars:off */
'use strict'

const util = require('util')
const fs = require('fs')
const path = require('path')
const { assert } = require('chai')
const parse = require('../index')

const parseFile = util.promisify(parse.file)

describe('Big File parsing', function () {
  it('should parse 3 tags on all blocks, "big-sample-1"', async function () {
    const comments = await parseFile(path.resolve(__dirname, 'fixtures/big-sample-1.js'))
    for (const comment of comments) { assert.equal(comment.tags.length, 3) }
  })

  it('should parse 3 tags on all blocks, "big-sample-2"', async function () {
    var comments = await parseFile(path.resolve(__dirname, 'fixtures/big-sample-2.js'))
    for (const comment of comments) { assert.equal(comment.tags.length, 3) }
  })

  it('should parse 3 tags on all blocks', async function () {
    let comments

    comments = await parseFile(path.resolve(__dirname, 'fixtures/big-sample-1.js'))
    for (const comment of comments) { assert.equal(comment.tags.length, 3) }

    comments = await parseFile(path.resolve(__dirname, 'fixtures/big-sample-2.js'))
    for (const comment of comments) { assert.equal(comment.tags.length, 3) }
  })
})
