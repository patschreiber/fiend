
import { GameObject } from '../engine/GameObject';
import { Template } from '../engine/templates/Template';

describe("GameObjects validity", () => {

  // A collection of GameObject ids.
  let goids = [
    GameObject.create(Template.get("Player")).getId(),
    GameObject.create(Template.get("OrdinaryFolk")).getId(),
    GameObject.create().getId(),
  ];

  for (let goid in goids) {
    it ('has a real ID', () => {
      expect(goid).not.toEqual(undefined);
      expect(goid).not.toEqual("undefined");
      expect(goid).not.toEqual(null);
      expect(goid).not.toEqual("null");
      expect(goid).not.toEqual(0);
    });
  }
});
