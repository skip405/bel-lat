import belLat from './index';

test('tests it works', () => {
  expect(belLat("прывітанне, сусвет")).toBe("pryvitannie, susviet");
});

describe('Letters', () => {
  test('Lowercase', () => {
    expect(belLat("а")).toBe("a");
    expect(belLat("б")).toBe("b");
    expect(belLat("в")).toBe("v");
    expect(belLat("г")).toBe("h");
    expect(belLat("ґ")).toBe("g");
    expect(belLat("д")).toBe("d");
    expect(belLat("ж")).toBe("ž");
    expect(belLat("і")).toBe("i");
    expect(belLat("й")).toBe("j");
    expect(belLat("к")).toBe("k");
    expect(belLat("м")).toBe("m");
    expect(belLat("о")).toBe("o");
    expect(belLat("п")).toBe("p");
    expect(belLat("р")).toBe("r");
    expect(belLat("т")).toBe("t");
    expect(belLat("у")).toBe("u");
    expect(belLat("ў")).toBe("ŭ");
    expect(belLat("ф")).toBe("f");
    expect(belLat("х")).toBe("ch");
    expect(belLat("ч")).toBe("č");
    expect(belLat("ш")).toBe("š");
    expect(belLat("ы")).toBe("y");
    expect(belLat("э")).toBe("e");
  });

  test('Uppercase', () => {
    expect(belLat("А")).toBe("A");
    expect(belLat("Б")).toBe("B");
    expect(belLat("В")).toBe("V");
    expect(belLat("Г")).toBe("H");
    expect(belLat("Ґ")).toBe("G");
    expect(belLat("Д")).toBe("D");
    expect(belLat("Ж")).toBe("Ž");
    expect(belLat("І")).toBe("I");
    expect(belLat("Й")).toBe("J");
    expect(belLat("К")).toBe("K");
    expect(belLat("М")).toBe("M");
    expect(belLat("О")).toBe("O");
    expect(belLat("П")).toBe("P");
    expect(belLat("Р")).toBe("R");
    expect(belLat("Т")).toBe("T");
    expect(belLat("У")).toBe("U");
    expect(belLat("Ў")).toBe("Ŭ");
    expect(belLat("Ф")).toBe("F");
    expect(belLat("Х")).toBe("Ch");
    expect(belLat("Ч")).toBe("Č");
    expect(belLat("Ш")).toBe("Š");
    expect(belLat("Ы")).toBe("Y");
    expect(belLat("Э")).toBe("E");
  });

  test('Omissions', () => {
    expect(belLat("ь")).toBe("");
    expect(belLat("’")).toBe("");
    expect(belLat("‘")).toBe("");
  });
});

describe('Special cases', () => {
  describe('Е, Ё, Ю, Я', () => {
    describe('Render with J', () => {
      describe('In the beginning of a word', () => {
        test('Lowercase', () => {
          expect(belLat("е")).toBe("je");
          expect(belLat("ё")).toBe("jo");
          expect(belLat("ю")).toBe("ju");
          expect(belLat("я")).toBe("ja");
        });

        test('Uppercase', () => {
          expect(belLat("Е")).toBe("Je");
          expect(belLat("Ё")).toBe("Jo");
          expect(belLat("Ю")).toBe("Ju");
          expect(belLat("Я")).toBe("Ja");
        });

        test('If next letter is uppercase (capslock)', () => {
          expect(belLat("ЕА")).toBe("JEA");
          expect(belLat("ЁВ")).toBe("JOV");
          expect(belLat("ЮБ")).toBe("JUB");
          expect(belLat("ЯГ")).toBe("JAH");
        });
      });

      describe('After vowels', () => {
        test('Lowercase', () => {
          expect(belLat("ае")).toBe("aje");
          expect(belLat("іе")).toBe("ije");
          expect(belLat("ое")).toBe("oje");
          expect(belLat("уе")).toBe("uje");
          expect(belLat("ые")).toBe("yje");
          expect(belLat("эе")).toBe("eje");

          expect(belLat("аё")).toBe("ajo");
          expect(belLat("іё")).toBe("ijo");
          expect(belLat("оё")).toBe("ojo");
          expect(belLat("уё")).toBe("ujo");
          expect(belLat("ыё")).toBe("yjo");
          expect(belLat("эё")).toBe("ejo");

          expect(belLat("аю")).toBe("aju");
          expect(belLat("ію")).toBe("iju");
          expect(belLat("ою")).toBe("oju");
          expect(belLat("ую")).toBe("uju");
          expect(belLat("ыю")).toBe("yju");
          expect(belLat("эю")).toBe("eju");

          expect(belLat("ая")).toBe("aja");
          expect(belLat("ія")).toBe("ija");
          expect(belLat("оя")).toBe("oja");
          expect(belLat("уя")).toBe("uja");
          expect(belLat("ыя")).toBe("yja");
          expect(belLat("эя")).toBe("eja");
        });

        test('Uppercase', () => {
          expect(belLat("аЕ")).toBe("aJe");
          expect(belLat("іЕ")).toBe("iJe");
          expect(belLat("оЕ")).toBe("oJe");
          expect(belLat("уЕ")).toBe("uJe");
          expect(belLat("ыЕ")).toBe("yJe");
          expect(belLat("эЕ")).toBe("eJe");

          expect(belLat("аЁ")).toBe("aJo");
          expect(belLat("іЁ")).toBe("iJo");
          expect(belLat("оЁ")).toBe("oJo");
          expect(belLat("уЁ")).toBe("uJo");
          expect(belLat("ыЁ")).toBe("yJo");
          expect(belLat("эЁ")).toBe("eJo");

          expect(belLat("аЮ")).toBe("aJu");
          expect(belLat("іЮ")).toBe("iJu");
          expect(belLat("оЮ")).toBe("oJu");
          expect(belLat("уЮ")).toBe("uJu");
          expect(belLat("ыЮ")).toBe("yJu");
          expect(belLat("эЮ")).toBe("eJu");

          expect(belLat("аЯ")).toBe("aJa");
          expect(belLat("іЯ")).toBe("iJa");
          expect(belLat("оЯ")).toBe("oJa");
          expect(belLat("уЯ")).toBe("uJa");
          expect(belLat("ыЯ")).toBe("yJa");
          expect(belLat("эЯ")).toBe("eJa");
        });

        test('If next letter is uppercase (capslock)', () => {
          expect(belLat("аЕА")).toBe("aJEA");
          expect(belLat("іЕБ")).toBe("iJEB");
          expect(belLat("оЕВ")).toBe("oJEV");
          expect(belLat("уЕГ")).toBe("uJEH");
          expect(belLat("ыЕД")).toBe("yJED");
          expect(belLat("эЕІ")).toBe("eJEI");

          expect(belLat("аЁА")).toBe("aJOA");
          expect(belLat("іЁБ")).toBe("iJOB");
          expect(belLat("оЁВ")).toBe("oJOV");
          expect(belLat("уЁГ")).toBe("uJOH");
          expect(belLat("ыЁД")).toBe("yJOD");
          expect(belLat("эЁІ")).toBe("eJOI");

          expect(belLat("аЮА")).toBe("aJUA");
          expect(belLat("іЮБ")).toBe("iJUB");
          expect(belLat("оЮВ")).toBe("oJUV");
          expect(belLat("уЮГ")).toBe("uJUH");
          expect(belLat("ыЮД")).toBe("yJUD");
          expect(belLat("эЮІ")).toBe("eJUI");

          expect(belLat("аЯА")).toBe("aJAA");
          expect(belLat("іЯБ")).toBe("iJAB");
          expect(belLat("оЯВ")).toBe("oJAV");
          expect(belLat("уЯГ")).toBe("uJAH");
          expect(belLat("ыЯД")).toBe("yJAD");
          expect(belLat("эЯІ")).toBe("eJAI");
        });
      });

      describe('After apostrophe', () => {
        test('Lowercase', () => {
          expect(belLat("’е")).toBe("je");
          expect(belLat("‘е")).toBe("je");

          expect(belLat("’ё")).toBe("jo");
          expect(belLat("‘ё")).toBe("jo");

          expect(belLat("’ю")).toBe("ju");
          expect(belLat("‘ю")).toBe("ju");

          expect(belLat("’я")).toBe("ja");
          expect(belLat("‘я")).toBe("ja");
        });

        test('Uppercase', () => {
          expect(belLat("’Е")).toBe("Je");
          expect(belLat("‘Е")).toBe("Je");

          expect(belLat("’Ё")).toBe("Jo");
          expect(belLat("‘Ё")).toBe("Jo");

          expect(belLat("’Ю")).toBe("Ju");
          expect(belLat("‘Ю")).toBe("Ju");

          expect(belLat("’Я")).toBe("Ja");
          expect(belLat("‘Я")).toBe("Ja");
        });

        test('If next letter is uppercase (capslock)', () => {
          expect(belLat("’ЕА")).toBe("JEA");
          expect(belLat("‘ЕА")).toBe("JEA");

          expect(belLat("’ЁА")).toBe("JOA");
          expect(belLat("‘ЁА")).toBe("JOA");

          expect(belLat("’ЮА")).toBe("JUA");
          expect(belLat("‘ЮА")).toBe("JUA");

          expect(belLat("’ЯА")).toBe("JAA");
          expect(belLat("‘ЯА")).toBe("JAA");
        });
      });

      describe('After Ў and Ь', () => {
        test('Lowercase', () => {
          expect(belLat("ўе")).toBe("ŭje");
          expect(belLat("ўё")).toBe("ŭjo");
          expect(belLat("ўю")).toBe("ŭju");
          expect(belLat("ўя")).toBe("ŭja");

          expect(belLat("ье")).toBe("je");
          expect(belLat("ьё")).toBe("jo");
          expect(belLat("ью")).toBe("ju");
          expect(belLat("ья")).toBe("ja");
        });

        test('Uppercase', () => {
          expect(belLat("ўЕ")).toBe("ŭJe");
          expect(belLat("ўЁ")).toBe("ŭJo");
          expect(belLat("ўЮ")).toBe("ŭJu");
          expect(belLat("ўЯ")).toBe("ŭJa");

          expect(belLat("ьЕ")).toBe("Je");
          expect(belLat("ьЁ")).toBe("Jo");
          expect(belLat("ьЮ")).toBe("Ju");
          expect(belLat("ьЯ")).toBe("Ja");
        });

        test('If next letter is uppercase (capslock)', () => {
          expect(belLat("ўЕА")).toBe("ŭJEA");
          expect(belLat("ўЁА")).toBe("ŭJOA");
          expect(belLat("ўЮА")).toBe("ŭJUA");
          expect(belLat("ўЯА")).toBe("ŭJAA");

          expect(belLat("ьЕА")).toBe("JEA");
          expect(belLat("ьЁА")).toBe("JOA");
          expect(belLat("ьЮА")).toBe("JUA");
          expect(belLat("ьЯА")).toBe("JAA");
        });
      });
    });

    describe('Render with I after consonants', () => {
      test('Lowercase', () => {
        expect(belLat("бе")).toBe("bie");
        expect(belLat("бё")).toBe("bio");
        expect(belLat("бю")).toBe("biu");
        expect(belLat("бя")).toBe("bia");
      });

      test('Uppercase', () => {
        expect(belLat("бЕ")).toBe("bIe");
        expect(belLat("бЁ")).toBe("bIo");
        expect(belLat("бЮ")).toBe("bIu");
        expect(belLat("бЯ")).toBe("bIa");
      });

      test('If next letter is uppercase (capslock)', () => {
        expect(belLat("бЕА")).toBe("bIEA");
        expect(belLat("бЁВ")).toBe("bIOV");
        expect(belLat("бЮБ")).toBe("bIUB");
        expect(belLat("бЯВ")).toBe("bIAV");
      });
    });
  });

  describe('Х', () => {
    test('Renders as CH if next letter is uppercase (capslock)', () => {
      expect(belLat("ХА")).toBe("CHA");
    });
  });

  describe('З, Н, С, Ц', () => {
    test('Render without an acute accent', () => {
      expect(belLat("з")).toBe("z");
      expect(belLat("н")).toBe("n");
      expect(belLat("с")).toBe("s");
      expect(belLat("ц")).toBe("c");

      expect(belLat("З")).toBe("Z");
      expect(belLat("Н")).toBe("N");
      expect(belLat("С")).toBe("S");
      expect(belLat("Ц")).toBe("C");
    });

    test('Render with an acute accent before Ь', () => {
      expect(belLat("зь")).toBe("ź");
      expect(belLat("нь")).toBe("ń");
      expect(belLat("сь")).toBe("ś");
      expect(belLat("ць")).toBe("ć");

      expect(belLat("Зь")).toBe("Ź");
      expect(belLat("Нь")).toBe("Ń");
      expect(belLat("Сь")).toBe("Ś");
      expect(belLat("Ць")).toBe("Ć");
    });
  });

  describe('Л', () => {
    describe('As per the Instruction on transliteration of geographical names', () => {
      test('Renders without an acute sign', () => {
        expect(belLat("л", { style: 'geographic' })).toBe("l");
        expect(belLat("Л", { style: 'geographic' })).toBe("L");
      });

      test('Renders with an acute sign before Ь', () => {
        expect(belLat("ль", { style: 'geographic' })).toBe("ĺ");
        expect(belLat("Ль", { style: 'geographic' })).toBe("Ĺ");
      });
    });

    describe('As per the rules of the Belarusian Latin alphabet (Łacinka)', () => {
      test('Renders with a dash sign', () => {
        expect(belLat("л", { style: 'lacinka' })).toBe("ł");
        expect(belLat("Л", { style: 'lacinka' })).toBe("Ł");
      });

      test('Renders without a dash sign before Е, Ё, Ю, Я, Ь', () => {
        expect(belLat("ле", { style: 'lacinka' })).toBe("lie");
        expect(belLat("лё", { style: 'lacinka' })).toBe("lio");
        expect(belLat("лю", { style: 'lacinka' })).toBe("liu");
        expect(belLat("ля", { style: 'lacinka' })).toBe("lia");
        expect(belLat("ль", { style: 'lacinka' })).toBe("l");

        expect(belLat("Ле", { style: 'lacinka' })).toBe("Lie");
        expect(belLat("Лё", { style: 'lacinka' })).toBe("Lio");
        expect(belLat("Лю", { style: 'lacinka' })).toBe("Liu");
        expect(belLat("Ля", { style: 'lacinka' })).toBe("Lia");
        expect(belLat("Ль", { style: 'lacinka' })).toBe("L");
      });
    });
  });
});

describe('Slugify', () => {
  test('Renders without diacritical signs', () => {
    expect(belLat("ж", { style: 'slugify' })).toBe("z");
    expect(belLat("з", { style: 'slugify' })).toBe("z");
    expect(belLat("л", { style: 'slugify' })).toBe("l");
    expect(belLat("н", { style: 'slugify' })).toBe("n");
    expect(belLat("с", { style: 'slugify' })).toBe("s");
    expect(belLat("ў", { style: 'slugify' })).toBe("u");
    expect(belLat("ц", { style: 'slugify' })).toBe("c");
    expect(belLat("ч", { style: 'slugify' })).toBe("c");
    expect(belLat("ш", { style: 'slugify' })).toBe("s");
  });

  test('Renders letters as lowercase', () => {
    expect(belLat("а", { style: 'slugify' })).toBe("a");
    expect(belLat("б", { style: 'slugify' })).toBe("b");
    expect(belLat("в", { style: 'slugify' })).toBe("v");
    expect(belLat("г", { style: 'slugify' })).toBe("h");
    expect(belLat("ґ", { style: 'slugify' })).toBe("g");
    expect(belLat("д", { style: 'slugify' })).toBe("d");
    expect(belLat("е", { style: 'slugify' })).toBe("je");
    expect(belLat("ё", { style: 'slugify' })).toBe("jo");
    expect(belLat("ж", { style: 'slugify' })).toBe("z");
    expect(belLat("з", { style: 'slugify' })).toBe("z");
    expect(belLat("і", { style: 'slugify' })).toBe("i");
    expect(belLat("й", { style: 'slugify' })).toBe("j");
    expect(belLat("к", { style: 'slugify' })).toBe("k");
    expect(belLat("л", { style: 'slugify' })).toBe("l");
    expect(belLat("м", { style: 'slugify' })).toBe("m");
    expect(belLat("н", { style: 'slugify' })).toBe("n");
    expect(belLat("о", { style: 'slugify' })).toBe("o");
    expect(belLat("п", { style: 'slugify' })).toBe("p");
    expect(belLat("р", { style: 'slugify' })).toBe("r");
    expect(belLat("с", { style: 'slugify' })).toBe("s");
    expect(belLat("т", { style: 'slugify' })).toBe("t");
    expect(belLat("у", { style: 'slugify' })).toBe("u");
    expect(belLat("ў", { style: 'slugify' })).toBe("u");
    expect(belLat("ф", { style: 'slugify' })).toBe("f");
    expect(belLat("х", { style: 'slugify' })).toBe("ch");
    expect(belLat("ц", { style: 'slugify' })).toBe("c");
    expect(belLat("ч", { style: 'slugify' })).toBe("c");
    expect(belLat("ш", { style: 'slugify' })).toBe("s");
    expect(belLat("ы", { style: 'slugify' })).toBe("y");
    expect(belLat("э", { style: 'slugify' })).toBe("e");
    expect(belLat("ю", { style: 'slugify' })).toBe("ju");
    expect(belLat("я", { style: 'slugify' })).toBe("ja");

    expect(belLat("А", { style: 'slugify' })).toBe("a");
    expect(belLat("Б", { style: 'slugify' })).toBe("b");
    expect(belLat("В", { style: 'slugify' })).toBe("v");
    expect(belLat("Г", { style: 'slugify' })).toBe("h");
    expect(belLat("Ґ", { style: 'slugify' })).toBe("g");
    expect(belLat("Д", { style: 'slugify' })).toBe("d");
    expect(belLat("Е", { style: 'slugify' })).toBe("je");
    expect(belLat("Ё", { style: 'slugify' })).toBe("jo");
    expect(belLat("Ж", { style: 'slugify' })).toBe("z");
    expect(belLat("З", { style: 'slugify' })).toBe("z");
    expect(belLat("І", { style: 'slugify' })).toBe("i");
    expect(belLat("Й", { style: 'slugify' })).toBe("j");
    expect(belLat("К", { style: 'slugify' })).toBe("k");
    expect(belLat("Л", { style: 'slugify' })).toBe("l");
    expect(belLat("М", { style: 'slugify' })).toBe("m");
    expect(belLat("Н", { style: 'slugify' })).toBe("n");
    expect(belLat("О", { style: 'slugify' })).toBe("o");
    expect(belLat("П", { style: 'slugify' })).toBe("p");
    expect(belLat("Р", { style: 'slugify' })).toBe("r");
    expect(belLat("С", { style: 'slugify' })).toBe("s");
    expect(belLat("Т", { style: 'slugify' })).toBe("t");
    expect(belLat("У", { style: 'slugify' })).toBe("u");
    expect(belLat("Ў", { style: 'slugify' })).toBe("u");
    expect(belLat("Ф", { style: 'slugify' })).toBe("f");
    expect(belLat("Х", { style: 'slugify' })).toBe("ch");
    expect(belLat("Ц", { style: 'slugify' })).toBe("c");
    expect(belLat("Ч", { style: 'slugify' })).toBe("c");
    expect(belLat("Ш", { style: 'slugify' })).toBe("s");
    expect(belLat("Ы", { style: 'slugify' })).toBe("y");
    expect(belLat("Э", { style: 'slugify' })).toBe("e");
    expect(belLat("Ю", { style: 'slugify' })).toBe("ju");
    expect(belLat("Я", { style: 'slugify' })).toBe("ja");
  });

  test('Creates a slug with dashes', () => {
    expect(belLat("прывітанне, сусвет", { style: 'slugify' })).toBe("pryvitannie-susviet");
  });
});

describe('Misc', () => {
  test('Throws a type error if wrong data type is provided', () => {
    expect(() => { belLat(1) }).toThrow(TypeError);
  });

  test('Ignores \'unknown\' characters', () => {
    expect(belLat("xyz")).toBe("xyz");
  });

  test('Does not parse empty strings', () => {
    expect(belLat("")).toBe("");
  });

  test('Allows basic custom replacements', () => {
    expect(belLat("№", {
      customReplacements: [['№', { regular: '#' }] ]
    })).toBe("#");
  });

  test('Allows basic custom removals', () => {
    expect(belLat("абв", {
      customReplacements: [['б', '_omitted'] ]
    })).toBe("av");
  });
});
