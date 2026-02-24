# difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll 

  These all are DOM selector methods.

  To create a new website at first we make a HTML structure,,,then CSS and then JavaScript. When we open a site in browser then instantly browser makes a DOM(Document Object Model) tree according html structure. DOM is like html but not fully html. It just a clone model. And we can modify this model by using JS,,,,cause js can't modify html directly. At that time we have to need these DOM selector methods. By using this methods we can get everything of an DOM model.

  Here are some basic difference between those selectors,,,,

  **1. getElementById :**
    For use this selector we need to element id and by this selector we can get only one unique element.

  **2. getElementsByClassName :** 
    For use this selector we need to elements class and by this selector we can get multiple elements. It returns html collection. 

   **3. querySelector / querySelectorAll :** 
    We can use these selectors by id, class and element name. But here some difference between those selectors. querySelector returns the first matching node in all matching node list. querySelectorAll returns all the matching node list.
    And one more thing these two selectors returns node list not html collection.



# How am I create and insert a new element into the DOM 

  Sometimes we need to create new element into the DOM. 

  To create new element at first we have to use -> document.createElement('element name');
  we can create it by declare in a variable too -> const newEl = document.createElement('element name');

  Even if we want that in this new element we can add id, class, attribute and set the inner text too. 

  After complete these all process we insert the new element into the DOM by using -> parentEL.appendChild(newEl); parentEl means that element where we insert the new element.



# What is Event Bubbling? And how does it work  

  Event bubbling is a concept that when we click a element then browser directly come to that element, then it starts to above step by step until it arrives to the window. That means at first browser arrives to the target element in capturing process and then it starts to above step by step by bubbling. In this time it does checkup that is any elements has event. If it has then the event is happened. We can set that in capturing time the event is activate. But most of the time event activate in bubbling time.
  
  It work in 3 Steps -> Capture Phase, Target Phase and Bubbling Phase.

  **1. Capture Phase :**  
    It is a steps/time when browser active to go to the clickable element. In this processing browser capture all the parent elements of clickable element.

  **2. Target Phase :**  
    When browser arrives the clickable element then it called target phase. Then it check is any event has in this target element. If it has then it triggered.

  **3. Bubbling Phase :**   
    The processing of leaving from target phase to window. In this time it checks step by step is any parent element has event. If it has it triggered.



#  What is Event Delegation in JavaScript? Why is it useful?  

  Event delegation is a process where we can control/modify many child elements by adding event on their parent element. 

  **Benefits :**  
    It is useful because if any child newly add in that parent element the eventListener still working on all old and new child. Cause we set event on parent not child. That means no matter how many new child are added, it works on every child. As a result of it's using we don't needed use eventListener so many time. And for this the memory utilization & performance stay well.



# the difference between preventDefault() and stopPropagation() methods 

  **preventDefault() :**  
    Basically when any event are happened on any html element then sometimes browser does some default behavior. We can stop that behavior by using preventDefault().

  **stopPropagation() :**  
    stopPropagation() is a method through which we can stop event bubbling. We set stopPropagation() in that element where we want to stop propagation/bubbling.