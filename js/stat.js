'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var SPEAKERS_GAP = 50;
var BAR_WIDHT = 40;
var nameGap = SPEAKERS_GAP + BAR_WIDHT;
var barHight = CLOUD_HEIGHT - GAP * 2 - FONT_GAP * 5;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y * 4);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y * 4 + FONT_GAP);

  var maxTime = getMaxElement(times);

 for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDHT + nameGap * i, CLOUD_Y * 26);
    ctx.fillText((times[i] / 100).toFixed(1), CLOUD_X + BAR_WIDHT + nameGap * i, CLOUD_Y * 8 + (barHight - ((barHight * times[i]) / maxTime)));

   if (players[i] == 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
    ctx.fillStyle = 'rgba(0, 0 ,255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + BAR_WIDHT + nameGap * i, CLOUD_Y * 9 + (barHight - (barHight * times[i]) / maxTime), BAR_WIDHT, (barHight * times[i]) / maxTime);
  }
};
