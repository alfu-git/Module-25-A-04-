// GET ID //
function getId (id) {
  return document.getElementById(id);
}


// GET INNER TEXT //
function getInnerText (id) {
  const el = document.getElementById(id);
  const text = el.innerText;
  return text;
}


// GET NODE LIST //
function getNodeList (className) {
  const nodeList = document.querySelectorAll(className);
  return nodeList;
}


// SET TOTAL COUNT //
const allJobs = getId('all-cards').children.length;

let totalCount = getId('total-count');
totalCount.innerText = allJobs;


// SET INTERVIEW COUNT //
const interviewCards = getId('interview-cards').children.length;

let interviewCount = getId('interview-count');
interviewCount.innerText = interviewCards;


// SET REJECTED COUNT //
const rejectedCards = getId('rejected-cards').children.length;

let rejectedCount = getId('rejected-count');
rejectedCount.innerText = rejectedCards;


// CREATE TOGGLE FUNCTION FOR BTNS //
function toggleFunction (id) {
  // get all btns
  const allBtn = getId('all-btn');
  const interviewBtn = getId('interview-btn');
  const rejectedBtn = getId('rejected-btn');

  // remove blue bg from all btns
  allBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');
  interviewBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');
  rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');

  // add white bg for all btns
  allBtn.classList.add('bg-[#ffffff]', 'text-[#64748B]');
  interviewBtn.classList.add('bg-[#ffffff]', 'text-[#64748B]');
  rejectedBtn.classList.add('bg-[#ffffff]', 'text-[#64748B]');

  // get clicked btn
  const clickedBtn = getId(id);

  // remove white bg from clicked btn
  clickedBtn.classList.remove('bg-[#ffffff]', 'text-[#64748B');

  // add blue bg on clicked btn
  clickedBtn.classList.add('bg-[#3B82F6]', 'text-[#ffffff]');
}