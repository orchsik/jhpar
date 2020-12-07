import chalk from 'chalk';

export default <T>(a: T) => {
  console.log(chalk.black.bgWhite(JSON.stringify(a)));
};
