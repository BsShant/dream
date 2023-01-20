export const sliderChildren = [
  {
    name: "Summarize Written Text",
    route: "summarize-written-text",
    parent: "pte-writing",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Write Essay",
    route: "write-essay",
    parent: "pte-writing",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Read Aloud",
    route: "read-aloud",
    parent: "pte-speaking",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Repeat Sentence",
    route: "repeat-sentence",
    parent: "pte-speaking",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Describe Image",
    route: "describe-image",
    parent: "pte-speaking",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Re-tell Lecture",
    route: "re-tell-lecture",
    parent: "pte-speaking",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Answer Short Question",
    route: "answer-short-question",
    parent: "pte-speaking",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Fill In The Blanks",
    route: "fill-in-the-blanks",
    parent: "pte-reading",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "MCQ",
    route: "m-c-q",
    parent: "pte-reading",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Re-order Paragraphs",
    route: "re-order-paragraphs",
    parent: "pte-reading",
    icon: <i className="fa-solid fa-palette"></i>,
  },

  {
    name: "Select The Best Word",
    route: "select-best-word",
    parent: "pte-reading",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Choose Single Answer",
    route: "choose-single-answer",
    parent: "pte-reading",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Summarize Spoken Text",
    route: "summarize-spoken-text",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Choose Multiple Answer",
    route: "choose-multiple-answer",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Fill In The Blanks",
    route: "fill-in-the-blanks",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Highlight Correct Summary",
    route: "highlight-correct-summary",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Choose Single Answer",
    route: "choose-single-answer",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  // {
  //     name: 'Select Missing Words',
  //     route: 'select-missing-words',
  //     parent: 'pte-listening',
  //     icon: <i className="fa-solid fa-palette"></i>,
  // },
  {
    name: "Highlight Incorrect Words",
    route: "highlight-incorrect-words",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
  {
    name: "Write From Dictation",
    route: "write-from-dictation",
    parent: "pte-listening",
    icon: <i className="fa-solid fa-palette"></i>,
  },
];

export const sliderData = [
  {
    name: "Dashboard",
    route: "dashboard",
    group: "top",
    icon: <i className="fa-solid fa-palette"></i>,
    dropdown: true,
  },
  {
    name: "Video Lessons",
    route: "video-lessons",
    group: "top",
    icon: <i class="fa-solid fa-video"></i>,
    dropdown: true,
  },
  {
    name: "PTE speaking",
    route: "pte-speaking",
    group: "practice",
    icon: <i className="fa-solid fa-palette"></i>,
    dropdown: true,
  },
  {
    name: "PTE Writing",
    route: "pte-writing",
    group: "practice",
    icon: <i class="fa-solid fa-pen-to-square"></i>,
    dropdown: true,
  },
  {
    name: "PTE Reading",
    route: "pte-reading",
    group: "practice",
    icon: <i class="fa-brands fa-readme"></i>,
    dropdown: true,
  },
  {
    name: "PTE Listening",
    route: "pte-listening",
    group: "practice",
    icon: <i class="fa-solid fa-ear-listen"></i>,
    dropdown: true,
  },
  {
    name: "PTE Mock Test",
    route: "pte-mock-test",
    group: "extra",
    icon: <i class="fa-solid fa-file-circle-question"></i>,
    dropdown: true,
  },
  {
    name: "Material Download",
    route: "material-download",
    group: "extra",
    icon: <i class="fa-solid fa-download"></i>,
    dropdown: true,
  },
];

export const groupData = [
  {
    name: "Top",
    id: "top",
  },
  {
    name: "Practice",
    id: "practice",
  },
  {
    name: "Extra",
    id: "extra",
  },
];
