const si = require('systeminformation');

module.exports = async () => {
  const mem = await si.mem()
  let value = mem.used / 1024
  value = value / 1024
  value = value / 1024
  return Number(value.toFixed(2))
}
