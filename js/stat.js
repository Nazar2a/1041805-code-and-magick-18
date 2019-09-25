'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var DISTANCE_BETWEEN_BAR = 50; // расстояние между колонок
var BAR_WIDHT = 40;
var stepBetweenGap = DISTANCE_BETWEEN_BAR + BAR_WIDHT; // шаг построение колонок
var maxBarHight = CLOUD_HEIGHT - GAP * 2 - FONT_GAP * 5; // максимальная высота колонки


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y * 4);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y * 4 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDHT + stepBetweenGap * i, CLOUD_Y * 26);
    ctx.fillText(times[i].toFixed(0), CLOUD_X + BAR_WIDHT + stepBetweenGap * i, CLOUD_Y * 8 + (maxBarHight - ((maxBarHight * times[i]) / maxTime)));

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(232 , ' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_WIDHT + stepBetweenGap * i, CLOUD_Y * 9 + (maxBarHight - (maxBarHight * times[i]) / maxTime), BAR_WIDHT, (maxBarHight * times[i]) / maxTime);
  }
};
