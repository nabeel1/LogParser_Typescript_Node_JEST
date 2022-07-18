import { StringClass } from "./StringClass";

describe('stringClass', () => {
    
    const cc = new StringClass();
    test('Checking the String Breakdown return contain keyword', () => {
      expect(cc.StringRead("Random String return string will have special keyword")).toContain("timestamp");
    });
    
    test('Checking the String Breakdown return contain keyword', () => {
      expect(cc.StringRead("Random String return string will have special keyword")).toContain("error");
    });
  });