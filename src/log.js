import chalk from 'chalk'

export default (_toLog) => {
  return console.log(chalk.bgRed('********', _toLog))
}
