
# export const solution = (inputList: string) => {
#   const wordList = inputList.split(' ');
#   let abbreviation = '';
#   wordList.forEach((word) => {
#     const regex = /[A-Z]/;
#     if (regex.test(word)) {
#       abbreviation += word[0];
#     }
#   });
#   if (abbreviation === 'UCPC') {
#     return 'I Love UCPC';
#   } else {
#     return 'I hate UCPC';
#   }
# };

import re
# inputString = input()

inputString = 'Union of Computer Programming Contest club contest'
inputString = 'Union of Computer Programming contest Club contest'
inputString = 'Union of Computer Programming contest club Contest'
inputString = 'Union of Collegiate Programming Contest club contest'
inputString = 'Union of Collegiate Programming contest Club contest'
inputString = 'Union of Collegiate Programming contest club Contest'
inputString = 'University Computer Programming Contest'
inputString = 'University Computer Programming Club contest'
inputString = 'University Computer Programming club Contest'
inputString = 'University Computer Programming Club Contest'
inputString = 'University C++ Computer Programming Club Contest'
# inputString = 'University Collegiate Programming Contest'
# inputString = 'University CPC'

test = re.findall('[A-Z]', inputString)
abbreviation = ''.join(test)
print(abbreviation)

if abbreviation == 'UCPC':
  print('I love UCPC')
else:
  print('I hate UCPC')




# wordList = inputString.split(' ')

# abbreviation = ''
# for word in wordList:
#   test = re.match('[A-Z]', word)
#   if test:
#     abbreviation += word[0]
 
# if abbreviation == 'UCPC':
#   print('I love UCPC')
# else:
#   print('I hate UCPC')

