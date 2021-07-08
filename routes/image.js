// var html2canvas = require("html2canvas");
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('잘못된 요청입니다.');
});

router.post('/', function(req, res, next) {
  const image_url = req.body.image_url;
  const title_main = req.body.title_main;
  const title_sub = req.body.title_sub;
  const bg_color = req.body.bg_color;
  const font_color = req.body.font_color;
/*
  html2canvas(document.getElementById("container"), {
    onrendered: function (canvas) {
      let a = document.createElement('a');
      a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      a.download = "out.png";
      a.click();
    }
  });
*/

  res.render('img', {
    image_url: image_url,
    title_main: title_main,
    title_sub: title_sub,
    bg_color: bg_color,
    font_color: font_color
  });
});

module.exports = router;
