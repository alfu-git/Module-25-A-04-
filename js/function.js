// ===============================
// ARRAYS (SOURCE OF TRUTH)
// ===============================
let interviewArr = [];
let rejectedArr = [];


// HELPER FUNCTIONS
// ===============================

function getId(id) {
  return document.getElementById(id);
}

function getNodeList(selector) {
  return document.querySelectorAll(selector);
}

function getClass(className) {
  return document.getElementsByClassName(className);
}

function getInnerText(id) {
  const el = document.getElementById(id);
  const text = el.innerText;
  return text;
}


// SET TOTAL & AVAILABLE-JOBS COUNT //
function setTotalCount () {
const allJobs = getId("all-cards").children.length;

let totalCount = getId("total-count");
totalCount.innerText = allJobs;

let availableJobs = document.querySelectorAll(".available-jobs");
availableJobs.forEach((element) => {
  element.innerText = allJobs;
});
}
setTotalCount();


// SET INTERVIEW COUNT //
function setInterviewCount() {
  const interviewCards = getId("interview-cards").children.length;

  let interviewCount = getNodeList(".interview-count");
  interviewCount.forEach((element) => {
    element.innerText = interviewCards;
  });

  const interviewEmptyDashboard = getId('interview-empty-dashboard');

  if (interviewCards === 0) {
    interviewEmptyDashboard.classList.remove('hidden');
  }
  else {
    interviewEmptyDashboard.classList.add('hidden');
  }
}
setInterviewCount();


// SET REJECTED COUNT //
function setRejectedCount() {
  const rejectedCards = getId("rejected-cards").children.length;

  let rejectedCount = getNodeList(".rejected-count");
  rejectedCount.forEach((element) => {
    element.innerText = rejectedCards;
  });

  const rejectedEmptyDashboard = getId('rejected-empty-dashboard');

  if (rejectedCards === 0) {
    rejectedEmptyDashboard.classList.remove('hidden');
  }
  else {
    rejectedEmptyDashboard.classList.add('hidden');
  }
}
setRejectedCount();


// GET ALL BTNS //
const allBtn = getId("all-btn");
const interviewBtn = getId("interview-btn");
const rejectedBtn = getId("rejected-btn");

// CREATE TOGGLE FUNCTION FOR BTNS //
function toggleFunction(id) {
  // remove blue bg from all btns
  allBtn.classList.remove("bg-[#3B82F6]", "text-[#ffffff]");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-[#ffffff]");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-[#ffffff]");

  // add white bg for all btns
  allBtn.classList.add("bg-[#ffffff]", "text-[#64748B]");
  interviewBtn.classList.add("bg-[#ffffff]", "text-[#64748B]");
  rejectedBtn.classList.add("bg-[#ffffff]", "text-[#64748B]");

  // get clicked btn
  const clickedBtn = getId(id);

  // remove white bg from clicked btn
  clickedBtn.classList.remove("bg-[#ffffff]", "text-[#64748B]");

  // add blue bg on clicked btn
  clickedBtn.classList.add("bg-[#3B82F6]", "text-[#ffffff]");
}

function showHide(id) {
  // get all section
  const jobSec = getId("job-sec");
  const interviewSec = getId("interview-sec");
  const rejectedSec = getId("rejected-sec");

  // hidden all sec
  jobSec.classList.add("hidden");
  interviewSec.classList.add("hidden");
  rejectedSec.classList.add("hidden");

  // get selected section
  const selectedSec = getId(id);

  // show selected section
  selectedSec.classList.remove("hidden");
}

function showHideLittle(id) {
  // get all little count
  const allLittleCount = getId("all-little-count-sec");
  const interviewLittleCount = getId("interview-little-count-sec");
  const rejectedLittleCount = getId("rejected-little-count-sec");

  // hide all little count
  allLittleCount.classList.add("hidden");
  interviewLittleCount.classList.add("hidden");
  rejectedLittleCount.classList.add("hidden");

  // get selected little count
  const selectedLittleCount = getId(id);

  // show selected little count
  selectedLittleCount.classList.remove("hidden");
}


// ALL BTN EVENT //
allBtn.addEventListener("click", function () {
  toggleFunction("all-btn");
  showHideLittle("all-little-count-sec");
  showHide("job-sec");
});


// INTERVIEW BTN EVENT //
interviewBtn.addEventListener("click", function () {
  toggleFunction("interview-btn");
  showHideLittle("interview-little-count-sec");
  showHide("interview-sec");
});


// REJECTED BTN EVENT //
rejectedBtn.addEventListener("click", function () {
  toggleFunction("rejected-btn");
  showHideLittle("rejected-little-count-sec");
  showHide("rejected-sec");
});


// RENDER INTERVIEW //
function renderInterview(job) {
  // get card parent
  const cardsParent = getId('interview-cards');

  // create card & card inner html
  const cardDiv = document.createElement('div');
  cardDiv.className = 'cards mt-4 p-6 bg-[#ffffff] border-l-3 border-[#10B981] rounded-lg shadow-[0_0_40px_rgba(34,197,94,0.6)] flex gap-4 justify-between';
  cardDiv.innerHTML = ` 
    <div>
      <h3 class="company-name mb-1 text-[#002C5C] text-lg font-semibold">${job.companyName}</h3>
      <h4 class="position mb-5 text-[#64748B]">${job.position}</h4>
      <p class="type-salary mb-5 text-sm text-[#64748B]">${job.typeSalary}</p>

      <span class="signal mb-2 inline-block bg-[green] rounded-sm py-2 px-3 text-[white] text-sm font-medium">${job.signal}</span>

      <p class="description mb-5 text-[#323B49] text-sm">${job.description}</p>

      <button class="interview-btn btn inline-block text-[#10B981] bg-[#ffffff] border-[#10B981]">${job.interviewBtn}</button>
      <button class="rejected-btn btn inline-block text-[#EF4444] bg-[#ffffff] border-[#EF4444]">${job.rejectedBtn}</button>
    </div>

    <div>
      <button class="delete-btn btn w-8 h-8 rounded-full p-5 bg-[#ffffff] border-[#F1F2F4] text-[#64748B] text-xl">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  `
  // add cardDiv to cardsParent 
  cardsParent.appendChild(cardDiv);

  // update interview count 
  setInterviewCount();
}


// RENDER REJECTED //
function renderRejected(job) {
  // get card parent
  const cardsParent = getId('rejected-cards');

  // create card & card inner html
  const cardDiv = document.createElement('div');
  cardDiv.className = 'cards mt-4 p-6 bg-[#ffffff] border-l-3 border-[#EF4444] rounded-lg shadow-[0_0_40px_rgba(239,68,68,0.6)] flex gap-4 justify-between';
  cardDiv.innerHTML = `
    <div>
      <h3 class="company-name mb-1 text-[#002C5C] text-lg font-semibold">${job.companyName}</h3>
      <h4 class="position mb-5 text-[#64748B]">${job.position}</h4>
      <p class="type-salary mb-5 text-sm text-[#64748B]">${job.typeSalary}</p>
      <span class="signal mb-2 inline-block bg-[red] rounded-sm py-2 px-3 text-[white] text-sm font-medium">${job.signal}</span>
      <p class="description mb-5 text-[#323B49] text-sm">${job.description}</p>
      <button class="interview-btn btn inline-block text-[#10B981] bg-[#ffffff] border-[#10B981]">${job.interviewBtn}</button>
      <button class="rejected-btn btn inline-block text-[#EF4444] bg-[#ffffff] border-[#EF4444]">${job.rejectedBtn}</button>
    </div>

    <div>
      <button class="delete-btn btn w-8 h-8 rounded-full p-5 bg-[#ffffff] border-[#F1F2F4] text-[#64748B] text-xl">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  `

  // add cardDiv to cardsParent 
  cardsParent.appendChild(cardDiv);

  // update rejected count 
  setRejectedCount();
}


// ===============================
// GET ALL MAIN CARDS
// ===============================
document.addEventListener('click', function (event) {

  const card = event.target.closest('.cards');
  if (!card) return;

    const interviewClicked = event.target.classList.contains('interview-btn');
    const rejectedClicked = event.target.classList.contains('rejected-btn');
    const deleteClicked = event.target.closest('.delete-btn');

    // card delete function
    if(deleteClicked) {
      const card = event.target.closest('.cards');
      card.remove();
      setTotalCount();
      setInterviewCount();
      setRejectedCount();
    }

    // guard condition
    if (!interviewClicked && !rejectedClicked) return;
    

    // ===============================
    // GET CARD DATA
    // ===============================
    const companyName = card.querySelector('.company-name').innerText;
    const position = card.querySelector('.position').innerText;
    const typeSalary = card.querySelector('.type-salary').innerText;
    const description = card.querySelector('.description').innerText;
    const interviewBtnText = card.querySelector('.interview-btn').innerText;
    const rejectedBtnText = card.querySelector('.rejected-btn').innerText;
    const cardSignal = card.querySelector('.signal');

    let signalText = '';

    // ===============================
    // IF INTERVIEW CLICKED
    // ===============================
    // console.log(interviewClicked);

    if (interviewClicked) {

      signalText = 'Interviewed';

      cardSignal.classList.remove('rejected-signal');
      cardSignal.classList.add('interview-signal');
      cardSignal.innerText = signalText;

      // Remove from rejected array
      rejectedArr = rejectedArr.filter(item => item.companyName !== companyName);

      // Remove from rejected DOM
      removeCardFromSection('rejected-cards', companyName);

      // Prevent duplicate
      const alreadyExists = interviewArr.find(item => item.companyName === companyName);

      if (!alreadyExists) {

        const cardObj = {
          companyName,
          position,
          typeSalary,
          signal: signalText,
          description,
          interviewBtn: interviewBtnText,
          rejectedBtn: rejectedBtnText
        };

        interviewArr.push(cardObj);
        renderInterview(cardObj);
      }
    }

    // ===============================
    // IF REJECT CLICKED
    // ===============================
    if (rejectedClicked) {

      signalText = 'Rejected';

      cardSignal.classList.remove('interview-signal');
      cardSignal.classList.add('rejected-signal');
      cardSignal.innerText = signalText;

      // Remove from interview array
      interviewArr = interviewArr.filter(item => item.companyName !== companyName);

      // Remove from interview DOM
      removeCardFromSection('interview-cards', companyName);

      const alreadyExists = rejectedArr.find(item => item.companyName === companyName);

      if (!alreadyExists) {

        const cardObj = {
          companyName,
          position,
          typeSalary,
          signal: signalText,
          description,
          interviewBtn: interviewBtnText,
          rejectedBtn: rejectedBtnText
        };

        rejectedArr.push(cardObj);
        renderRejected(cardObj);
      }
    }

    // ===============================
    // UPDATE COUNTS
    // ===============================
    setInterviewCount();
    setRejectedCount();

  });


// ===============================
// REMOVE CARD FROM SECTION
// ===============================
function removeCardFromSection(sectionId, companyName) {

  const section = getId(sectionId);
  const children = [...section.children];

  children.forEach(child => {
    const title = child.querySelector('h3');
    if (title && title.innerText === companyName) {
      child.remove();
    }
  });
}