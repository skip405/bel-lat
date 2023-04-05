const processSpecialCase = (char, nextChar, prevChar, style, replacement) => {
  let index = 0;

  switch( char.toLowerCase() ) {
    case 'ў' :
      index = 1;

      if( 'geo-2023' === style ) {
        index = 2;
      }

      break;
    case 'л' :
      if( 'geo-2000' === style ) {
        if( ['ь'].includes(nextChar.toLowerCase()) ) {
          index = 2;
        } else {
          index = 0;
        }
      } else if( 'lacinka' === style ) {
        if( ['е', 'ё', 'ю', 'я', 'ь'].includes(nextChar.toLowerCase()) ) {
          index = 0;
        } else {
          index = 1;
        }
      }

      break;
    case 'е' :
    case 'ё' :
    case 'ю' :
    case 'я' :
      if( ['а', 'і', 'о', 'у', 'ы', 'ў', 'э', 'ь', '’', '‘'].includes(prevChar.toLowerCase()) || '' === prevChar ) {
        index = 1;
      }

      break;
    case 'з' :
    case 'н' :
    case 'с' :
    case 'ц' :
      if( ['ь'].includes(nextChar.toLowerCase()) ) {
        index = 1;
      }
      if( 'geo-2023' === style ) {
        index = 0;
      }

      break;
    case 'ж' :
    case 'ч' :
    case 'ш' :
      index = 1;

      if( 'geo-2023' === style ) {
        index = 2;
      }

      break;
  }

  return processReturnValue(replacement[index], char, nextChar, style);
}

const processChar = (char, nextChar, prevChar, style, replacement) => {
  if( '_omitted' === replacement ) {
    return '';
  }

  const specialCases = ['е', 'ё', 'ж', 'з', 'л', 'н', 'с', 'ў', 'ц', 'ч', 'ш', 'ю', 'я'];

  if( specialCases.includes(char.toLowerCase()) ) {
    return processSpecialCase(char, nextChar, prevChar, style, replacement);
  }

  let replacementValue = replacement[0];

  if( 'geo-2023' === style && replacement[1] ) {
    replacementValue = replacement[1];
  }

  return processReturnValue(replacementValue, char, nextChar, style);
}

const processReturnValue = (value, char, nextChar, style) => {
  if( char === char.toUpperCase() && char !== char.toLowerCase() ) {
    if( '' !== nextChar && nextChar === nextChar.toUpperCase() ) {
      return value.toUpperCase();
    }

    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }

  return value;
}

export default function belLat(string, options) {
  if ( 'string' !== typeof string ) {
    throw new TypeError('Needs a string');
  }

  options = {
    customReplacements: [],
    style: 'lacinka',
    ...options
  };

  const replacements = new Map([
    ['а', ['a']],
    ['б', ['b']],
    ['в', ['v']],
    ['г', ['h', 'g']],
    ['ґ', ['g']],
    ['д', ['d']],
    ['е', ['ie', 'je']],
    ['ё', ['io', 'jo']],
    ['ж', ['z', 'ž', 'zh']],
    ['з', ['z', 'ź']],
    ['і', ['i']],
    ['й', ['j']],
    ['к', ['k']],
    ['л', ['l', 'ł', 'ĺ']],
    ['м', ['m']],
    ['н', ['n', 'ń']],
    ['о', ['o']],
    ['п', ['p']],
    ['р', ['r']],
    ['с', ['s', 'ś']],
    ['т', ['t']],
    ['у', ['u']],
    ['ў', ['u', 'ŭ', 'w']],
    ['ф', ['f']],
    ['х', ['ch', 'h']],
    ['ц', ['c', 'ć']],
    ['ч', ['c', 'č', 'ch']],
    ['ш', ['s', 'š', 'sh']],
    ['ь', '_omitted'],
    ['ы', ['y']],
    ['э', ['e']],
    ['ю', ['iu', 'ju']],
    ['я', ['ia', 'ja']],
    ['’', '_omitted'],
    ['‘', '_omitted'],
    ...options.customReplacements
  ]);

  return string.split(' ').map( word => {
    if( '' === word ) {
      return '';
    }

    const resultForWord = [];

    for( let i = 0; i < word.length; i++ ) {
      const replacement = replacements.get(word[i].toLowerCase());

      if( ! replacement ) {
        resultForWord.push( word[i] );

        continue;
      }

      const nextChar = word[i + 1] || '';
      const prevChar = word[i - 1] || '';

      resultForWord.push( processChar(word[i], nextChar, prevChar, options.style, replacement) );
    }

    return resultForWord.join('');
  } ).join(' ');
}
