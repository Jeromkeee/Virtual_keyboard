const keys_inRow = [
    [
        {
            type: ['Backquote', 'key'],
            id: 'Backquote',
            caseDown: '`',
            caseUp: '~'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit1',
            caseDown: '1',
            caseUp: '!'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit2',
            caseDown: '2',
            caseUp: '@'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit3',
            caseDown: '3',
            caseUp: '#'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit4',
            caseDown: '4',
            caseUp: '$'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit5',
            caseDown: '5',
            caseUp: '%'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit6',
            caseDown: '6',
            caseUp: '^'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit7',
            caseDown: '7',
            caseUp: '&'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit8',
            caseDown: '8',
            caseUp: '*'
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit9',
            caseDown: '9',
            caseUp: '('
        },
        {
            type: ['graykey', 'key'],
            id: 'Digit0',
            caseDown: '0',
            caseUp: ')'
        },
        {
            type: ['graykey', 'key'],
            id: 'Minus',
            caseDown: '-',
            caseUp: '_'
        },
        {
            type: ['graykey', 'key'],
            id: 'Equal',
            caseDown: '=',
            caseUp: '+'
        },
        {
            type: ['darkkey', 'Backspace', 'key'],
            id: 'Backspace',
            caseSpecial: 'Backspace'
        }
    ], 
    [
        {
            type: ['darkkey', 'Tab', 'key'],
            id: 'Tab',
            caseSpecial: 'Tab'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyQ',
            caseDown: 'Q'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyW',
            caseDown: 'W'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyE',
            caseDown: 'E'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyR',
            caseDown: 'R'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyT',
            caseDown: 'T'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyY',
            caseDown: 'Y'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyU',
            caseDown: 'U'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyI',
            caseDown: 'I'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyO',
            caseDown: 'O'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyP',
            caseDown: 'P'
        },
        {
            type: ['graykey', 'key'],
            id: 'BracketLeft',
            caseDown: '[',
            caseUp: '{'
        },
        {
            type: ['graykey', 'key'],
            id: 'BracketRight',
            caseDown: ']',
            caseUp: '}'
        },
        {
            type: ['graykey', 'key'],
            id: 'Backslash',
            caseDown: '\/',
            caseUp: '|'
        },
        {
            type: ['darkkey', 'Delete', 'key'],
            id: 'Delete',
            caseSpecial: 'Del'
        }
    ],
    [
        {
            type: ['darkkey', 'CapsLock', 'key'],
            id: 'CapsLock',
            caseSpecial: 'CapsLock'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyA',
            caseDown: 'A'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyS',
            caseDown: 'S'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyD',
            caseDown: 'D'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyF',
            caseDown: 'F'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyG',
            caseDown: 'G'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyH',
            caseDown: 'H'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyJ',
            caseDown: 'J'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyK',
            caseDown: 'K'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyL',
            caseDown: 'L'
        },
        {
            type: ['graykey', 'key'],
            id: 'Semicolon',
            caseDown: ';',
            caseUp: ':'
        },
        {
            type: ['graykey', 'key'],
            id: 'Quote',
            caseDown: `'`,
            caseUp: '"'
        },
        {
            type: ['darkkey', 'Enter', 'key'],
            id: 'Enter',
            caseSpecial: 'Enter'
        }
    ], 
    [
        {
            type: ['darkkey', 'ShiftLeft', 'key'],
            id: 'ShiftLeft',
            caseSpecial: 'Shift'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyZ',
            caseDown: 'Z'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyX',
            caseDown: 'X'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyC',
            caseDown: 'C'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyV',
            caseDown: 'V'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyB',
            caseDown: 'B'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyN',
            caseDown: 'N'
        },
        {
            type: ['graykey', 'key'],
            id: 'KeyM',
            caseDown: 'M'
        },
        {
            type: ['graykey', 'key'],
            id: 'Comma',
            caseDown: ',',
            caseUp: '<'
        },
        {
            type: ['graykey', 'key'],
            id: 'Period',
            caseDown: '.',
            caseUp: '>'
        },
        {
            type: ['graykey', 'key'],
            id: 'Slash',
            caseDown: '/',
            caseUp: '?'
        },
        {
            type: ['darkkey', 'ArrowUp', 'key'],
            id: 'ArrowUp',
            caseSpecial: '▲'
        },
        {
            type: ['darkkey', 'ShiftRight', 'key'],
            id: 'ShiftRight',
            caseSpecial: 'Shift'
        }
    ],
    [
        {
            type: ['darkkey', 'ControlLeft', 'key'],
            id: 'ControlLeft',
            caseSpecial: 'Ctrl'
        },
        {
            type: ['darkkey', 'MetaLeft', 'key'],
            id: 'MetaLeft',
            caseSpecial: 'Win'
        },
        {
            type: ['darkkey', 'AltLeft', 'key'],
            id: 'AltLeft',
            caseSpecial: 'Alt'
        },
        {
            type: ['graykey', 'Space', 'key'],
            id: 'Space'
        },
        {
            type: ['darkkey', 'AltRight', 'key'],
            id: 'AltRight',
            caseSpecial: 'Alt'
        },
        {
            type: ['darkkey', 'ArrowLeft', 'key'],
            id: 'ArrowLeft',
            caseSpecial: '◄'
        },
        {
            type: ['darkkey', 'ArrowDown', 'key'],
            id: 'ArrowDown',
            caseSpecial: '▼'
        },
        {
            type: ['darkkey', 'ArrowRight', 'key'],
            id: 'ArrowRight',
            caseSpecial: '►'
        },
        {
            type: ['darkkey', 'ControlRight', 'key'],
            id: 'ControlRight',
            caseSpecial: 'Ctrl'
        }
    ]
]

export default keys_inRow