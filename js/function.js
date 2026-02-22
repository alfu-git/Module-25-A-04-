// GET ID //
function getId (id) {
  return document.getElementById(id);
}

// GET CLASS //
function getClass (className) {
  return document.getElementsByClassName(className);
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


// SET TOTAL & AVAILABLE-JOBS COUNT //
const allJobs = getId('all-cards').children.length;

let totalCount = getId('total-count');
totalCount.innerText = allJobs;

let availableJobs = document.querySelectorAll('.available-jobs');
availableJobs.forEach(element => {
  element.innerText = allJobs;
});


// SET INTERVIEW COUNT //
const interviewCards = getId('interview-cards').children.length;

let interviewCount = getNodeList('.interview-count');
interviewCount.forEach(element => {
  element.innerText = interviewCards;
})


// SET REJECTED COUNT //
const rejectedCards = getId('rejected-cards').children.length;

let rejectedCount = getNodeList('.rejected-count');
rejectedCount.forEach(element => {
  element.innerText = rejectedCards;
})


// GET ALL BTNS //
const allBtn = getId('all-btn');
const interviewBtn = getId('interview-btn');
const rejectedBtn = getId('rejected-btn');


// CREATE TOGGLE FUNCTION FOR BTNS //
function toggleFunction (id) {
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
  clickedBtn.classList.remove('bg-[#ffffff]', 'text-[#64748B]');

  // add blue bg on clicked btn
  clickedBtn.classList.add('bg-[#3B82F6]', 'text-[#ffffff]');
}


function showHide (id) {
  // get all section
  const jobSec = getId('job-sec');
  const interviewSec = getId('interview-sec');
  const rejectedSec = getId('rejected-sec');

  // hidden all sec
  jobSec.classList.add('hidden');
  interviewSec.classList.add('hidden');
  rejectedSec.classList.add('hidden');

  // get selected section
  const selectedSec = getId(id);
  
  // show selected section
  selectedSec.classList.remove('hidden');
}


function showHideLittle (id) {
  // get all little count 
  const allLittleCount = getId('all-little-count-sec');
  const interviewLittleCount = getId('interview-little-count-sec');
  const rejectedLittleCount = getId('rejected-little-count-sec');

  // hide all little count 
  allLittleCount.classList.add('hidden');
  interviewLittleCount.classList.add('hidden');
  rejectedLittleCount.classList.add('hidden');

  // get selected little count 
  const selectedLittleCount = getId(id);

  // show selected little count
  selectedLittleCount.classList.remove('hidden');
}

// ALL BTN EVENT //
allBtn.addEventListener('click', function() {
  toggleFunction('all-btn');
  showHideLittle('all-little-count-sec');
  showHide('job-sec');
})


// INTERVIEW BTN EVENT //
interviewBtn.addEventListener('click', function() {
  toggleFunction('interview-btn');
  showHideLittle('interview-little-count-sec');
  showHide('interview-sec');
})


// REJECTED BTN EVENT //
rejectedBtn.addEventListener('click', function() {
  toggleFunction('rejected-btn');
  showHideLittle('rejected-little-count-sec');
  showHide('rejected-sec');
})

