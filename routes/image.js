const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('잘못된 요청입니다.');
});

router.post('/', function(req, res, next) {
  const image_url = req.body.image_url;
  const title_main = req.body.title_main;
  const title_sub = req.body.title_sub;:
  const bg_color = req.body.bg_color;
  const font_color = req.body.font_color;

  res.render('img', {
    image_url: image_url,
    title_main: title_main,
    title_sub: title_sub,
    bg_color: bg_color,
    font_color: font_color
  });
});

router.post('/req', async function(req, res, next) {
  const image_url = req.body.image_url;
  const title_main = req.body.title_main;
  const title_sub = req.body.title_sub;
  const bg_color = req.body.bg_color;
  const font_color = req.body.font_color;

  const browser = await puppeteer.launch({
    args: ["--enable-features=NetworkService", "--no-sandbox"],
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage()

  // Post로 요청을 보내기 위해 요청을 Intercept 합니다.
  await page.setRequestInterception(true);

  await page.once("request", interceptedRequest => {
    interceptedRequest.continue({
      method: "POST",
      postData: 'image_url=' + image_url + '&title_main=' + title_main + '&title_sub=' + title_sub + '&bg_color=' + bg_color + '&font_color' + font_color,
      headers: {
        ...interceptedRequest.headers(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    // 다른 요청을 처리하기 위해 Intercept를 해제합니다.
    page.setRequestInterception(false);
  });

  await page.goto('http://localhost:3000/img')

  const fileName = "capture-" + new Date().toISOString().substr(0, 10) + "-" + Math.floor(Math.random()*10000+10000) + ".png";

  const element = await page.$('#container');
  await element.screenshot({
    path: fileName
  })

  await browser.close()
  await res.sendFile(fileName, {root : '.'});
});

module.exports = router;
