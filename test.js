var wd = require('selenium-webdriver');
var assert = require('assert');

var SELENIUM_HOST = 'http://localhost:4444/wd/hub';
var URL = 'http://Lms.aeroflot.ru';


var username = '20733';
var password = '20733';
var needItem = 'Повышение квалификации бортпроводников 1-5 типов ВС (ежегодная или КПК)';

(async () => {
    var client = new wd.Builder()
        .usingServer(SELENIUM_HOST)
        .withCapabilities({ browserName: wd.Browser.CHROME })
        .build();
    await client.get(URL).then(async function() {
        await client.findElement({ name: 'Username' }).click();
        await client.findElement({ name: 'Username' }).sendKeys(username);
        await client.findElement({ name: 'Password' }).click();
        await client.findElement({ name: 'Password' }).sendKeys(password);
        await client.findElement({ id: 'login' }).click();
    });
    await client.wait(() => {
        return client.findElement({ id: 'content2Menus' }).isDisplayed();
    });
    await client.findElement({ id: 'content2Menus' }).then(el => {
        el.findElements({tagName: 'li'}).then(el => {
            el.map(el => {
                
            })
        });
    });
    //await client.quit();
    // await client.findElement({id: 'content2Menus'}).then(el => {
    //     console.log(el.isDisplayed);
    // });
})();



 
  