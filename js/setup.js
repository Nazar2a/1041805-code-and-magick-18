'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var shuffleArr = function (arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

shuffleArr(WIZARD_NAMES);
shuffleArr(WIZARD_SURNAMES);
shuffleArr(WIZARD_COAT_COLORS);
shuffleArr(WIZARD_EYES_COLORS);

var wizards = [
  {
    name: WIZARD_NAMES[0] + ' ' + WIZARD_SURNAMES[0],
    coatColor: WIZARD_COAT_COLORS[0],
    eyesColor: WIZARD_EYES_COLORS[0]
  },
  {
    name: WIZARD_NAMES[1] + ' ' + WIZARD_SURNAMES[1],
    coatColor: WIZARD_COAT_COLORS[1],
    eyesColor: WIZARD_EYES_COLORS[1]
  },
  {
    name: WIZARD_NAMES[2] + ' ' + WIZARD_SURNAMES[2],
    coatColor: WIZARD_COAT_COLORS[2],
    eyesColor: WIZARD_EYES_COLORS[2]
  },
  {
    name: WIZARD_NAMES[3] + ' ' + WIZARD_SURNAMES[3],
    coatColor: WIZARD_COAT_COLORS[3],
    eyesColor: WIZARD_EYES_COLORS[3]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
