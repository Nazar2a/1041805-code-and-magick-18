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
var TEXT_COLOR = '#000';
var TEXT_FONT = '16px PT Mono';

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

var players = ['Пендальф', 'Вы', 'Алатар', 'Паландо'];

var renderBar = function (ctx, player, timePlayer, numberBar, maxTimePlayer) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(player, CLOUD_X + BAR_WIDHT + stepBetweenGap * numberBar, CLOUD_Y * 26);
  ctx.fillText(timePlayer.toFixed(0), CLOUD_X + BAR_WIDHT + stepBetweenGap * numberBar, CLOUD_Y * 8 + (maxBarHight - ((maxBarHight * timePlayer) / maxTimePlayer)));

  if (player === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(232 , ' + Math.random() * 100 + '%, 50%)';
  }
  ctx.fillRect(CLOUD_X + BAR_WIDHT + stepBetweenGap * numberBar, CLOUD_Y * 9 + (maxBarHight - (maxBarHight * timePlayer) / maxTimePlayer), BAR_WIDHT, (maxBarHight * timePlayer) / maxTimePlayer);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y * 4);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y * 4 + FONT_GAP);

  var maxTimePlayer = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderBar(ctx, players[i], times[i], i, maxTimePlayer);
  }
};
