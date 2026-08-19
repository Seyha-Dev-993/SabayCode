import { Topic } from '../types';
import { cLessonsPart1 } from './cLessonsPart1';
import { cLessonsPart2 } from './cLessonsPart2';
import { cLessonsPart3 } from './cLessonsPart3';
import { cLessonsPart4 } from './cLessonsPart4';

// Map lessons from the parts into their specific topic structures
const allPart1Lessons = cLessonsPart1; // c-home (1) to c-while-loop (15)
const allPart2Lessons = cLessonsPart2; // c-for-loop (16) to c-function-pointers (31)
const allPart3Lessons = cLessonsPart3; // c-create-files (32) to c-free (47)
const allPart4Lessons = cLessonsPart4; // c-null-pointer (48) to c-miscellaneous (60)

export const cTopics: Topic[] = [
  {
    id: "getting-started", // Uses getting-started so that LessonInterface renders it without collapsible header
    title: { en: "C Tutorial", km: "មេរៀន C" },
    lessons: [
      ...allPart1Lessons, // Lessons 1 to 15 (C HOME, C Intro, C Get Started, C Syntax, C Output, C Comments, C Variables, C Data Types, C Type Conversion, C Constants, C Operators, C Booleans, C If...Else, C Switch, C While Loop)
      allPart2Lessons[0],  // 16. C For Loop
      allPart2Lessons[1],  // 17. C Break/Continue
      allPart2Lessons[2],  // 18. C Arrays
      allPart2Lessons[3],  // 19. C Multi-Dimensional Arrays
      allPart2Lessons[4],  // 20. C Strings
      allPart2Lessons[5],  // 21. C String Functions
      allPart2Lessons[6]   // 22. C Pointers
    ]
  },
  {
    id: "c-functions",
    title: { en: "C Functions", km: "អនុគមន៍ C" },
    lessons: [
      allPart2Lessons[7],  // 23. C Functions
      allPart2Lessons[8],  // 24. C Function Parameters
      allPart2Lessons[9],  // 25. C Function Declarations
      allPart2Lessons[10], // 26. C Scope
      allPart2Lessons[11], // 27. C Static Variables
      allPart2Lessons[12], // 28. C Recursion
      allPart2Lessons[13], // 29. C Math Functions
      allPart2Lessons[14], // 30. C String to Number
      allPart2Lessons[15]  // 31. C Function Pointers
    ]
  },
  {
    id: "c-files",
    title: { en: "C Files", km: "ឯកសារ C" },
    lessons: [
      allPart3Lessons[0], // 32. C Create Files
      allPart3Lessons[1], // 33. C Write Files
      allPart3Lessons[2]  // 34. C Read Files
    ]
  },
  {
    id: "c-structures",
    title: { en: "C Structures", km: "រចនាសម្ព័ន្ធ Structures" },
    lessons: [
      allPart3Lessons[3], // 35. C Structures
      allPart3Lessons[4], // 36. C Struct Members
      allPart3Lessons[5], // 37. C Struct Strings
      allPart3Lessons[6], // 38. C Struct Copying
      allPart3Lessons[7], // 39. C Nested Structs
      allPart3Lessons[8], // 40. C Structs in Functions
      allPart3Lessons[9]  // 41. C Array of Structs
    ]
  },
  {
    id: "c-memory",
    title: { en: "C Memory", km: "ការចងចាំ Memory" },
    lessons: [
      allPart3Lessons[10], // 42. C Memory Address
      allPart3Lessons[11], // 43. C Pointers & Arrays
      allPart3Lessons[12], // 44. C malloc
      allPart3Lessons[13], // 45. C calloc
      allPart3Lessons[14], // 46. C realloc
      allPart3Lessons[15]  // 47. C free
    ]
  },
  {
    id: "c-errors",
    title: { en: "C Errors", km: "កំហុសនៅក្នុង C" },
    lessons: [
      allPart4Lessons[0], // 48. C NULL Pointer
      allPart4Lessons[1], // 49. C Error Handling
      allPart4Lessons[2], // 50. C Input Validation
      allPart4Lessons[3], // 51. C Debugging
      allPart4Lessons[4], // 52. C Memory Leak Detection
      allPart4Lessons[5]  // 53. C Hardened Function
    ]
  },
  {
    id: "c-miscellaneous",
    title: { en: "C Miscellaneous", km: "មេរៀនផ្សេងៗ" },
    lessons: [
      allPart4Lessons[6],  // 54. C Preprocessor
      allPart4Lessons[7],  // 55. C Header Files
      allPart4Lessons[8],  // 56. C typedef
      allPart4Lessons[9],  // 57. C Command Line
      allPart4Lessons[10], // 58. C Unions
      allPart4Lessons[11], // 59. C Bitfields
      allPart4Lessons[12]  // 60. C Miscellaneous
    ]
  }
];
