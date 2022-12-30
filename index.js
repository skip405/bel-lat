import slugify from '@sindresorhus/slugify';

const processSpecialCase = (char, nextChar, prevChar, style, replacement) => {
  let variant = 'regular';

  switch( char.toLowerCase() ) {
    case 'ў' :
      variant = 'with-breve';

      if( 'slugify' === style ) {
        variant = 'regular';
      }

      break;
    case 'л' :
      if( 'geographic' === style ) {
        if( ['ь'].includes(nextChar.toLowerCase()) ) {
          variant = 'with-acute';
        } else {
          variant = 'regular';
        }
      } else if( 'lacinka' === style ) {
        if( ['е', 'ё', 'ю', 'я', 'ь'].includes(nextChar.toLowerCase()) ) {
          variant = 'regular';
        } else {
          variant = 'with-stroke';
        }
      }

      break;
    case 'е' :
    case 'ё' :
    case 'ю' :
    case 'я' :
      variant = 'with-i';

      if( ['а', 'і', 'о', 'у', 'ы', 'ў', 'э', 'ь', '’', '‘'].includes(prevChar.toLowerCase()) || '' === prevChar ) {
        variant = 'with-j';
      }

      break;
    case 'з' :
    case 'н' :
    case 'с' :
    case 'ц' :
      if( ['ь'].includes(nextChar.toLowerCase()) ) {
        variant = 'with-acute';
      }
      if( 'slugify' === style ) {
        variant = 'regular';
      }

      break;
    case 'ж' :
    case 'ч' :
    case 'ш' :
      variant = 'with-caron';

      if( 'slugify' === style ) {
        variant = 'regular';
      }

      break;
  }

  return processReturnValue(replacement[variant], char, nextChar, style);
}

const processChar = (char, nextChar, prevChar, style, replacement) => {
  if( '_omitted' === replacement ) {
    return '';
  }

  const specialCases = ['е', 'ё', 'ж', 'з', 'л', 'н', 'с', 'ў', 'ц', 'ч', 'ш', 'ю', 'я'];

  if( specialCases.includes(char.toLowerCase()) ) {
    return processSpecialCase(char, nextChar, prevChar, style, replacement);
  }

  return processReturnValue(replacement.regular, char, nextChar, style);
}

const processReturnValue = (value, char, nextChar, style) => {
  const upperCaseChar = char.toUpperCase();

  if( 'slugify' === style ) {
    return value.toLowerCase();
  } else {
    if( char === upperCaseChar && char !== char.toLowerCase() ) {
      if( '' !== nextChar && nextChar === nextChar.toUpperCase() ) {
        return value.toUpperCase();
      }

      return `${value[0].toUpperCase()}${value.slice(1)}`;
    }
  }

  return value;
}

export default function belLat(string, options) {
  if ( typeof string !== 'string' ) {
    throw new TypeError('Needs a string');
  }

  options = {
    customReplacements: [],
    style: 'lacinka',
    ...options
  };

  const replacements = new Map([
    ['а', {
      'regular': 'a',
    }],
    ['б', {
      'regular': 'b',
    }],
    ['в', {
      'regular': 'v',
    }],
    ['г', {
      'regular': 'h',
    }],
    ['ґ', {
      'regular': 'g',
    }],
    ['д', {
      'regular': 'd',
    }],
    ['е', {
      'with-i': 'ie',
      'with-j': 'je',
    }],
    ['ё', {
      'with-i': 'io',
      'with-j': 'jo',
    }],
    ['ж', {
      'regular': 'z',
      'with-caron': 'ž',
    }],
    ['з', {
      'regular': 'z',
      'with-acute': 'ź',
    }],
    ['і', {
      'regular': 'i',
    }],
    ['й', {
      'regular': 'j',
    }],
    ['к', {
      'regular': 'k',
    }],
    ['л', {
      'regular': 'l',
      'with-stroke': 'ł',
      'with-acute': 'ĺ',
    }],
    ['м', {
      'regular': 'm',
    }],
    ['н', {
      'regular': 'n',
      'with-acute': 'ń',
    }],
    ['о', {
      'regular': 'o',
    }],
    ['п', {
      'regular': 'p',
    }],
    ['р', {
      'regular': 'r',
    }],
    ['с', {
      'regular': 's',
      'with-acute': 'ś',
    }],
    ['т', {
      'regular': 't',
    }],
    ['у', {
      'regular': 'u',
    }],
    ['ў', {
      'regular': 'u',
      'with-breve': 'ŭ',
    }],
    ['ф', {
      'regular': 'f',
    }],
    ['х', {
      'regular': 'ch',
    }],
    ['ц', {
      'regular': 'c',
      'with-acute': 'ć',
    }],
    ['ч', {
      'regular': 'c',
      'with-caron': 'č',
    }],
    ['ш', {
      'regular': 's',
      'with-caron': 'š',
    }],
    ['ь', '_omitted'],
    ['ы', {
      'regular': 'y',
    }],
    ['э', {
      'regular': 'e',
    }],
    ['ю', {
      'with-i': 'iu',
      'with-j': 'ju',
    }],
    ['я', {
      'with-i': 'ia',
      'with-j': 'ja'
    }],
    ['’', '_omitted'],
    ['‘', '_omitted'],
    ...options.customReplacements
  ]);

  const transformedString = string.split(' ').map( word => {
    if( '' === word ) {
      return '';
    }

    const resultForWord = [];

    for( let i = 0; i < word.length; i++ ) {
      const lowerCaseChar = word[i].toLowerCase();
      const replacement = replacements.get(lowerCaseChar);

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

  return 'slugify' === options.style ? slugify( transformedString ) : transformedString;
}
