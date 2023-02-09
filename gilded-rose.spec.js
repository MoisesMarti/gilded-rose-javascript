import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("Once sellIn days is less than zero, quality degrades twice as fast", () => {
    const testItem = new Item("test", -1, 10)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(-2)
    expect(testItem.quality).toBe(8)
  })
})

describe("updateQuality", () => {
  it("quality is never negative", () => {
    const testItem = new Item("test", 5, 0)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(4)
    expect(testItem.quality).toBe(0)
  })
})

describe("updateQuality", () => {
  it("Aged Brie quality increases the older it gets", () => {
    const testItem = new Item("Aged Brie", 4, 5)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(3)
    expect(testItem.quality).toBe(6)
  })
})

describe("updateQuality", () => {
  it("The quality of an item is never more than 50", () => {
    const testItem = new Item("Aged Brie", 3, 50)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(2)
    expect(testItem.quality).toBe(50)
  })
})

describe("updateQuality", () => {
  it("legendary item never has to be sold nor does it decrease in quality", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(0)
    expect(testItem.quality).toBe(80)
  })
})

describe("updateQuality", () => {
  it("quality increases by 2 when there are 10 days or less left before the concert", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 7)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(5)
    expect(testItem.quality).toBe(9)
  })
  
  it("quality increases by 3 when there are 5 days or less left before the concert", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(4)
    expect(testItem.quality).toBe(9)
  })
  
  it("quality drops to 0 after the concert", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 2)
    items.push(testItem)
    updateQuality()

    expect(testItem.sellIn).toBe(-1)
    expect(testItem.quality).toBe(0)
  })
})