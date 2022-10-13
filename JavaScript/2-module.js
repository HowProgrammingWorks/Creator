'use strict';

const crypto = require('node:crypto');

const UINT32_MAX = 0xffffffff;
const BUF_LEN = 1024;
const BUF_SIZE = BUF_LEN * Uint32Array.BYTES_PER_ELEMENT;

const randomPrefetcher = {
  buf: crypto.randomBytes(BUF_SIZE),
  pos: 0,
};

const cryptoRandom = () => {
  if (randomPrefetcher.pos === randomPrefetcher.buf.length) {
    randomPrefetcher.pos = 0;
    crypto.randomFillSync(randomPrefetcher.buf);
  }
  const val = randomPrefetcher.buf.readUInt32LE(randomPrefetcher.pos);
  randomPrefetcher.pos += Uint32Array.BYTES_PER_ELEMENT;
  return val / (UINT32_MAX + 1);
};

module.exports = { cryptoRandom };
