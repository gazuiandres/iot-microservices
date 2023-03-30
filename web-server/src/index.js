const chalk = require('chalk')

const app = require('./app')
const { PORT } = require('./config')

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)


app.listen(PORT, () => {
  console.log(chalk.green(`[WEB-SERVER]: Connected on PORT ${PORT}`))
})
