#include "isogram.h"

bool is_isogram(const char phrase[]) {
  for (int i = 0; i < (int)strlen(phrase); i++) {
    char letter = phrase[i];
    if ((letter > 64 && letter < 91) || (letter > 96 && letter < 123)) {
      if (letter > 64 && letter < 91) {
        letter += 32;
      }
      for (int j = i + 1; j < (int)strlen(phrase); j++) {
        char letterTwo = phrase[j];
        if (letterTwo > 64 && letterTwo < 91) {
          letterTwo += 32;
        }
        if (letter == letterTwo) {
          return false;
        }
      }
    }
  }

  return true;
}
