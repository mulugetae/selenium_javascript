const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
try {
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://www.iworkplc.com/contact');
  

 let varone = await driver.findElement(By.xpath('/html/body/div/div/div[3]/div/footer/div[2]/div[2]/div[2]/div/div/div[6]/p/span'));
 let vartwo = await driver.findElement(By.xpath('/html/body/div/div/div[3]/div/footer/div[2]/div[2]/div[2]/div/div/div[7]/p/span'));
 let varones = await varone.getAttribute('innerHTML');
 let vartwos = await vartwo.getAttribute('innerHTML');
 let mobileNumber = parseInt(vartwos.substring(vartwos.length-4));
 let officeNumber = parseInt(varones.substring(vartwos.length-4));
 var dividedValue = officeNumber/mobileNumber;
  console.log(dividedValue);
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
} catch (error) {
console.log(error);
}
    
    
};
example();