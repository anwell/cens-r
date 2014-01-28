element=document.createElement('span');
element.setAttribute("style", "background-color:black;color:black;");
findAndReplaceDOMText(document.body, {find: 'match', wrap: element});