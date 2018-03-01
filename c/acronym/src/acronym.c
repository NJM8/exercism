#include "acronym.h"

char *abbreviate(const char *phrase) {
  if (phrase == NULL) {
    return NULL;
  }

  if (strncmp(phrase, "", 1) == 0) {
    return NULL;
  }

  char * result;
  result = malloc(sizeof(char) * 4);
  result[0] = phrase[0];
  int count = 1;
  int flag = 0;

  for (int i = 1; i < (int)strlen(phrase); i++) {
    if (flag == 1) {
      if (phrase[i] > 96 && phrase[i] < 123){
        result[count] = phrase[i] - 32;
      } else {
        result[count] = phrase[i];
      }
      count++;
      flag = 0;
      continue;
    }
    if (phrase[i] == 32 || phrase[i] == 45) {
      flag = 1;
    }
  }

  return result;
}
