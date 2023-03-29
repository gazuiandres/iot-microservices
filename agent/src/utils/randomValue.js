module.exports = () => {
  const value = Date.now() + ""
  return parseInt(value.split("").slice(3, -1).join(""))
}
