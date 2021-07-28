"use strict";

import assert from "assert";

import linkToSegmentFromMouseClick from "../scripts/linkToSegmetFromClick";
const pointObject = {
  A: { vec: "top", x: 700, y: 100, c: "rgb(255, 0, 0)" },
  B: { vec: "top", x: 730, y: 80, c: "rgb(255, 0, 0)" },
  E: { vec: "top", x: 670, y: 130, c: "rgb(255, 0, 0)" },
  G: { vec: "top", x: 680, y: 160, c: "rgb(255, 0, 0)" },
  c: { vec: "top", x: 750, y: 50, c: "rgb(255, 0, 0)" },
  d: { vec: "top", x: 600, y: 75, c: "rgb(255, 0, 0)" },
  f: { vec: "top", x: 675, y: 125, c: "rgb(255, 0, 0)" },
  FF: { vec: "top", x: 715, y: 78, c: "rgb(255, 0, 0)" },
  AA: { vec: "bottom", x: 692, y: 116, c: "rgb(255, 0, 0)" },
  T: { vec: "top", x: 650, y: 66, c: "rgb(255, 0, 0)" },
  TT: { vec: "top", x: 687, y: 57, c: "rgb(255, 0, 0)" },
  TTT: { vec: "top", x: 609, y: 78, c: "rgb(255, 0, 0)" },
};
const otrezkiObject = {
  "c.....d": { a: "c", b: "d", c: "rgb(255, 0, 0)" },
  "f.....c": { a: "f", b: "c", c: "rgb(255, 0, 0)" },
};
const goodMouseCooridates = [
  pointObject["E"],
  pointObject["B"],
  { x: 705, y: 105 },
  pointObject["AA"],
  pointObject["FF"],
  pointObject["T"],
  pointObject["TT"],
  pointObject["TTT"],
  pointObject["c"],
  pointObject['f']
];
const badMouseCoordinates = [
  { x: 680, y: 160 },
  { x: 10, y: 20 },
  { x: 750, y: 150 },
  { x: 710, y: 70 },
  { x: 670, y: 180 },
];

describe("Тестирование плагина по выбору отрезков с помощью указателя мышки", () => {
  it("Должны вернуть ссылку на отрезок", () => {
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[0],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["f.....c"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[1],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["f.....c"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[2],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["f.....c"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[3],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["f.....c"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[4],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["f.....c"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[5],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["c.....d"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[6],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["c.....d"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[7],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["c.....d"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[8],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["c.....d"]
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        goodMouseCooridates[9],
        pointObject,
        otrezkiObject
      ),
      otrezkiObject["f.....c"]
    );
  });
  it("Должны вернуть null", () => {
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        badMouseCoordinates[0],
        pointObject,
        otrezkiObject
      ),
      null
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        badMouseCoordinates[1],
        pointObject,
        otrezkiObject
      ),
      null
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        badMouseCoordinates[2],
        pointObject,
        otrezkiObject
      ),
      null
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        badMouseCoordinates[3],
        pointObject,
        otrezkiObject
      ),
      null
    );
    assert.deepStrictEqual(
      linkToSegmentFromMouseClick(
        badMouseCoordinates[4],
        pointObject,
        otrezkiObject
      ),
      null
    );
  });
});
