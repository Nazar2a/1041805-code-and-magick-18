'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
var GAP = 10;
var FONT_GAP = 20;
var DISTANCE_BETWEEN_BAR = 50; // расстояние между колонок
var BAR_WIDHT = 40;
var BAR_Y = 90;
var BAR_COLOR_YOU = 'rgba(255, 0, 0, 1)';
var HEADING_Y = 40;
var stepBetweenGap = DISTANCE_BETWEEN_BAR + BAR_WIDHT; // шаг построение колонок
var maxBarHight = CLOUD_HEIGHT - GAP * 2 - FONT_GAP * 5; // максимальная высота колонки
var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = '#000';
var TEXT_PLAYER_Y = 260;
var TEXT_TIME_Y = 80;


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

var renderBar = function (ctx, player, timePlayer, numberBar, maxTimePlayer) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(player, CLOUD_X + BAR_WIDHT + stepBetweenGap * numberBar, TEXT_PLAYER_Y);
  ctx.fillText(timePlayer.toFixed(0), CLOUD_X + BAR_WIDHT + stepBetweenGap * numberBar, TEXT_TIME_Y + (maxBarHight - ((maxBarHight * timePlayer) / maxTimePlayer)));

  if (player === 'Вы') {
    ctx.fillStyle = BAR_COLOR_YOU;
  } else {
    ctx.fillStyle = 'hsl(232 , ' + Math.random() * 100 + '%, 50%)';
  }
  ctx.fillRect(CLOUD_X + BAR_WIDHT + stepBetweenGap * numberBar, BAR_Y + (maxBarHight - (maxBarHight * timePlayer) / maxTimePlayer), BAR_WIDHT, (maxBarHight * timePlayer) / maxTimePlayer);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, HEADING_Y);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, HEADING_Y + FONT_GAP);

  var maxTimePlayer = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderBar(ctx, players[i], times[i], i, maxTimePlayer);
  }
};
