'use strict';
(() => {
  const ads = document.querySelector('.ads'),
    items = document.querySelector('.items'),
    item = document.querySelectorAll('.item'),
    propsList = document.querySelectorAll('.props__list'),
    content = document.querySelectorAll('.content'),
    itemTwo = document.querySelector('.item_two .props__item_four'),
    itemSix = document.querySelectorAll('.item_six .props__item_two'),
    itemFour = document.querySelectorAll(
      '.item_four .props__list .props__item_four'
    );

  propsList[2].append(itemSix[0], itemSix[1]);

  ads.remove();
  items.append(item[1], item[2], item[3], item[0], item[4], item[5]);
  const clone = propsList[3].cloneNode(true);
  itemFour[2].after(itemTwo);
  propsList[3].replaceWith(propsList[4]);
  content[4].append(clone);
})();
