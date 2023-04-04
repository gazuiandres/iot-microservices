const si = require('systeminformation');

module.exports = async () => {
  const mem = await si.battery()
  return Number(mem.voltage.toFixed(2))
}
