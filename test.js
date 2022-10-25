const {Builder, Browser, By, Key, until} = require('selenium-webdriver');


(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.google.com/ncr');
    let searchField = await driver.findElement(By.name('q'));
    await searchField.sendKeys('Денис Мархель');
    await searchField.sendKeys(Key.ENTER);
    //await driver.wait(until.titleIs('Денис Мархель - Поиск в Google'), 5000);

    let list = await driver.findElements(By.className('MjjYud'));
    if(list.length <= 0){
        console.log('Test - Fail');
        throw new Error ('Test - Fail');
    } else {
        console.log ('Test - Success');
    }

  } finally {
    await driver.quit();
  }
})();