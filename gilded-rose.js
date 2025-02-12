export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn
      item.quality = item.quality
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert" && item.sellIn > 10) {
      item.quality--
      item.sellIn--
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert" && item.sellIn > 5 && item.sellIn <= 10) {
      item.quality += 2 
      item.sellIn--
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert" && item.sellIn <= 5 && item.sellIn > 0) {
      item.quality += 3
      item.sellIn--
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert" && item.sellIn <= 0) {
      item.quality = 0
      item.sellIn--
    } else if (item.name === "Conjured" && item.sellIn < 0) {
      item.quality -= 4
      item.sellIn--
    } else if (item.name === "Conjured") {
      item.quality -= 2
      item.sellIn--
    } else if (item.name === "Aged Brie") {
      item.quality++
      item.sellIn--
    } else if (item.sellIn < 0) {
      item.quality -= 2
      item.sellIn--
    } else if (item.quality >= 0 && item.quality <= 50) {
      item.quality--
      item.sellIn--
    }
    if (item.quality < 0) {
      item.quality = 0
    }
    if (item.quality > 50 && item.name !== "Sulfuras, Hand of Ragnaros") {
      item.quality = 50
    }
  }  
}