
// // Getting the elements
// var selectContElement = document.querySelector('.selectCont');
// var selectCont3Elements = document.querySelectorAll('.selectCont3');

// // Check the width of the first .selectCont
// if (selectContElement.offsetWidth < 705) {
//     // Iterate over all the .selectCont3 elements
//     selectCont3Elements.forEach(function (element) {
//         // Set the max-width to 350px
//         element.style.maxWidth = '350px';
//     });
// }




// // var genBtn = document.getElementById('genBtn');
// // function regenerate() {
// //     document.getElementById("genBtn").click();
// // }


// function getMyCookies() {
//     return document.cookie;
// }

// document.getElementById('myForm').addEventListener('submit', function (e) {
//     e.preventDefault();  // Prevent the form from being submitted


//     genBtn.style.backgroundColor = 'gray'; // Disable the submit button
//     genBtn.innerText = 'Skriver din tekst...';
//     genBtn.disabled = true; // Disable the submit button

//     document.getElementById('paragraph1CV').innerText = "Vent venligst...";
//     // document.getElementById('loaderAn').classList.remove("hidden");

//     const resultDiv = document.getElementById('resultDiv');
//     resultDiv.classList.remove("hidden");
//     resultDiv.scrollIntoView(false);

//     const maintext = document.getElementById('cv-textarea').value;
//     const { switchchecked, languageSelector } = generateMessage();
//     //console.log("function", generateMessage())
//     //console.log("swicthCheck", switchchecked)
//     //console.log("languageSelector", languageSelector)
//     //console.log("maintext", maintext)
//     // const message = generateMessage(maintext);
//     // console.log(message)
//     const data = {
//         'action': 'korrektur_gpt',
//         'switchchecked': switchchecked,
//         'languageSelector': languageSelector,
//         'mainText': maintext
//     }
//     // console.log(data)
//     fetch(SB_ajax_object.ajax_url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded;',
//         },
//         body: new URLSearchParams(data).toString()

//         // body: `action=korrektur_gpt&switchchecked=${switchchecked}&languageSelector=${encodeURIComponent(languageSelector)}&cv-textarea=${encodeURIComponent(maintext)}`
//     })
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             if (data.success) {
//                 document.getElementById("paragraph1CV").value = data.data.choices[0].message.content; // Assuming the response structure includes 'data' and 'message'
//                 genBtn.innerText = 'Skriv ny tekst!';
//                 $("#shortC").trigger('input');
//             } else {
//                 document.getElementById("paragraph1CV").value = 'Error: ' + data.data;
//                 genBtn.innerText = 'Retry';
//             }
//             genBtn.disabled = false;
//             genBtn.style.backgroundColor = '#8EB3E0';
//             // document.getElementById('loaderAn').classList.add("hidden");
//         })
//         .catch(error => {
//             //console.error('Error:', error);
//             document.getElementById("paragraph1CV").value = 'An error occurred. Please try again.';
//             genBtn.innerText = 'Retry';
//             genBtn.disabled = false;
//             genBtn.style.backgroundColor = '#8EB3E0';
//             // document.getElementById('loaderAn').classList.add("hidden");
//         });
// });

// function generateMessage() {
//     const switchChecked = document.getElementById('switchbtn').checked;

//     const languageselector = document.getElementById('languageSelector').value;

//     return {
//         switchchecked: switchChecked,
//         languageSelector: languageselector
//     };

// }





// // ------------------------------------------ new needed code ------------------------------------------

// function adjustTextareaHeight() {
//     const textareas = document.querySelectorAll("#paragraph1CV, .editable-section textarea.content");
//     textareas.forEach(textarea => {
//         if (textarea.offsetHeight > 0) {
//             textarea.style.height = "auto";
//             const newHeight = textarea.scrollHeight + "px";
//             textarea.style.height = newHeight;
//         } else {
//             textarea.style.height = "50px";
//         }
//     });
// }
// const textSections = document.querySelectorAll(".editable-section textarea.content");
// const copyBtns = document.querySelectorAll(".copy-btn");
// const tickBtns = document.querySelectorAll(".tick-btn");

// copyBtns.forEach((copyBtn, index) => {
//     copyBtn.addEventListener("click", () => {
//         const tickBtn = tickBtns[index];

//         navigator.clipboard.writeText(textSections[index].value).then(() => {
//             tickBtn.classList.remove("fade-out");
//             copyBtn.classList.add("fade-out");
//             setTimeout(() => {
//                 copyBtn.style.display = "none";
//                 tickBtn.style.display = "inline-block";
//                 tickBtn.classList.add("fade-in");
//             }, 500);

//             setTimeout(() => {
//                 tickBtn.classList.remove("fade-in");
//                 tickBtn.classList.add("fade-out");
//                 setTimeout(() => {
//                     tickBtn.style.display = "none";
//                     copyBtn.style.display = "inline-block";
//                     copyBtn.classList.remove("fade-out");
//                     copyBtn.classList.add("fade-in");
//                 }, 500);
//             }, 2000);
//         }).catch(err => {
//             console.error("Failed to copy text: ", err);
//         });
//     });
// });



// const responsesArray = [];
// const currentResponseIndices = [];

// document.querySelectorAll(".editable-section textarea.content").forEach(() => {
//     responsesArray.push([]);
//     currentResponseIndices.push(0);
// });



// document.querySelectorAll(".btn-rewrite").forEach((btn, index) => {
//     btn.addEventListener("click", async () => {
//         const rewriteReasonDiv = document.querySelectorAll(".rewrite-reason-div")[index];
//         rewriteReasonDiv.style.display = "none";

//         const rewriteReason = rewriteReasonDiv.querySelector("textarea").value;
//         const textareaToUpdate = document.querySelectorAll(".editable-section textarea.content")[index];
//         const currentContent = textareaToUpdate.value;

//         // // Disable the rewrite button and show loading state
//         // btn.disabled = true;
//         // btn.innerText = 'Omskriver...';

//         const { switchchecked, languageSelector } = generateMessage();

//         const data = {
//             'action': 'korrektur_gpt',
//             'switchchecked': switchchecked,
//             'languageSelector': languageSelector,
//             'mainText': currentContent,
//             'rewrite-reason': rewriteReason
//         };

//         try {
//             const response = await fetch(SB_ajax_object.ajax_url, {
//                 method: 'POST',
//                 credentials: 'same-origin',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded;',
//                 },
//                 body: new URLSearchParams(data).toString()
//             });

//             const responseData = await response.json();

//             if (responseData.success) {
//                 const newContent = responseData.data.choices[0].message.content;
//                 responsesArray[index].push(newContent);
//                 currentResponseIndices[index] = responsesArray[index].length - 1;
//                 displayResponse(index);
//             } else {
//                 alert('Error: ' + responseData.data);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while processing your request.');
//         } finally {
//             // Re-enable the rewrite button and restore original text
//             btn.disabled = false;
//             btn.innerText = 'Omskriv';
//         }
//     });
// });
// function updateResponseCounter(index) {
//     const counter = document.querySelectorAll(".response-counter")[index];
//     const currentIndex = currentResponseIndices[index];
//     const total = responsesArray[index].length;
//     counter.textContent = `${currentIndex + 1}/${total}`;
// }

// function displayResponse(index) {
//     const textareaToUpdate = document.querySelectorAll(".editable-section textarea.content")[index];
//     const currentIndex = currentResponseIndices[index];
//     textareaToUpdate.value = responsesArray[index][currentIndex];
//     adjustTextareaHeight();
//     updateResponseCounter(index);

//     const nav = document.querySelectorAll(".response-navigation")[index];
//     const prevBtn = nav.querySelector(".prev-btn");
//     const nextBtn = nav.querySelector(".next-btn");

//     prevBtn.disabled = currentIndex === 0;
//     nextBtn.disabled = currentIndex === responsesArray[index].length - 1;
// }

// document.querySelectorAll(".response-navigation").forEach((nav, index) => {
//     const prevBtn = nav.querySelector(".prev-btn");
//     const nextBtn = nav.querySelector(".next-btn");

//     prevBtn.addEventListener("click", () => {
//         if (currentResponseIndices[index] > 0) {
//             currentResponseIndices[index]--;
//             displayResponse(index);
//         }
//     });

//     nextBtn.addEventListener("click", () => {
//         if (currentResponseIndices[index] < responsesArray[index].length - 1) {
//             currentResponseIndices[index]++;
//             displayResponse(index);
//         }
//     });
// });

// function initialDisplayResponse(response, index) {
//     responsesArray[index] = [response];
//     currentResponseIndices[index] = 0;
//     displayResponse(index);
// }


// document.querySelectorAll(".rewrite-btn").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         document.querySelectorAll(".rewrite-reason-div")[index].style.display = "flex";
//     });
// });

// document.querySelectorAll(".btn-skip").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         document.querySelectorAll(".rewrite-reason-div")[index].style.display = "none";
//     });
// });


// Getting the elements
var selectContElement = document.querySelector('.selectCont');
var selectCont3Elements = document.querySelectorAll('.selectCont3');

// Check the width of the first .selectCont
if (selectContElement.offsetWidth < 705) {
    // Iterate over all the .selectCont3 elements
    selectCont3Elements.forEach(function (element) {
        // Set the max-width to 350px
        element.style.maxWidth = '350px';
    });
}

// Adjust textarea height
function adjustTextareaHeight() {
    const textareas = document.querySelectorAll("#paragraph1CV, .editable-section textarea.content");
    textareas.forEach(textarea => {
        if (textarea.offsetHeight > 0) {
            textarea.style.height = "auto";
            const newHeight = textarea.scrollHeight + "px";
            textarea.style.height = newHeight;
        } else {
            textarea.style.height = "50px";
        }
    });
}

// Generate message function
function generateMessage() {
    const switchChecked = document.getElementById('switchbtn').checked;
    const languageSelector = document.getElementById('languageSelector').value;

    return {
        switchchecked: switchChecked,
        languageSelector: languageSelector
    };
}

// Form submission event listener
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from being submitted

    const genBtn = document.getElementById('genBtn');
    genBtn.style.backgroundColor = 'gray'; // Disable the submit button
    genBtn.innerText = 'Skriver din tekst...';
    genBtn.disabled = true; // Disable the submit button

    document.getElementById('paragraph1CV').innerText = "Vent venligst...";
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.classList.remove("hidden");
    resultDiv.scrollIntoView(false);

    const maintext = document.getElementById('cv-textarea').value;
    const { switchchecked, languageSelector } = generateMessage();

    const data = {
        'action': 'korrektur_gpt',
        'switchchecked': switchchecked,
        'languageSelector': languageSelector,
        'mainText': maintext
    };

    fetch(SB_ajax_object.ajax_url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
        },
        body: new URLSearchParams(data).toString()
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("paragraph1CV").value = data.data.choices[0].message.content; // Assuming the response structure includes 'data' and 'message'
            genBtn.innerText = 'Skriv ny tekst!';
            $("#shortC").trigger('input');
        } else {
            document.getElementById("paragraph1CV").value = 'Error: ' + data.data;
            genBtn.innerText = 'Retry';
        }
        genBtn.disabled = false;
        genBtn.style.backgroundColor = '#8EB3E0';
    })
    .catch(error => {
        document.getElementById("paragraph1CV").value = 'An error occurred. Please try again.';
        genBtn.innerText = 'Retry';
        genBtn.disabled = false;
        genBtn.style.backgroundColor = '#8EB3E0';
    });
});

// Rewrite button event listener
document.querySelectorAll(".btn-rewrite").forEach((btn, index) => {
    btn.addEventListener("click", async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        const rewriteReasonDiv = document.querySelectorAll(".rewrite-reason-div")[index];
        rewriteReasonDiv.style.display = "none";

        const rewriteReason = rewriteReasonDiv.querySelector("textarea").value;
        const textareaToUpdate = document.querySelectorAll(".editable-section textarea.content")[index];
        const currentContent = textareaToUpdate.value;

        const { switchchecked, languageSelector } = generateMessage();

        const data = {
            'action': 'korrektur_gpt',
            'switchchecked': switchchecked,
            'languageSelector': languageSelector,
            'mainText': currentContent,
            'rewrite-reason': rewriteReason
        };

        try {
            const response = await fetch(SB_ajax_object.ajax_url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;',
                },
                body: new URLSearchParams(data).toString()
            });

            const responseData = await response.json();

            if (responseData.success) {
                const newContent = responseData.data.choices[0].message.content;
                responsesArray[index].push(newContent);
                currentResponseIndices[index] = responsesArray[index].length - 1;
                displayResponse(index);
            } else {
                alert('Error: ' + responseData.data);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your request.');
        } finally {
            // Re-enable the rewrite button and restore original text
            btn.disabled = false;
            btn.innerText = 'Omskriv';
        }
    });
});

// Handle rewrite reason display
document.querySelectorAll(".rewrite-btn").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        document.querySelectorAll(".rewrite-reason-div")[index].style.display = "flex";
    });
});

document.querySelectorAll(".btn-skip").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        document.querySelectorAll(".rewrite-reason-div")[index].style.display = "none";
    });
});

const responsesArray = [];
const currentResponseIndices = [];

document.querySelectorAll(".editable-section textarea.content").forEach(() => {
    responsesArray.push([]);
    currentResponseIndices.push(0);
});

function updateResponseCounter(index) {
    const counter = document.querySelectorAll(".response-counter")[index];
    const currentIndex = currentResponseIndices[index];
    const total = responsesArray[index].length;
    counter.textContent = `${currentIndex + 1}/${total}`;
}

function displayResponse(index) {
    const textareaToUpdate = document.querySelectorAll(".editable-section textarea.content")[index];
    const currentIndex = currentResponseIndices[index];
    textareaToUpdate.value = responsesArray[index][currentIndex];
    adjustTextareaHeight();
    updateResponseCounter(index);

    const nav = document.querySelectorAll(".response-navigation")[index];
    const prevBtn = nav.querySelector(".prev-btn");
    const nextBtn = nav.querySelector(".next-btn");

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === responsesArray[index].length - 1;
}

document.querySelectorAll(".response-navigation").forEach((nav, index) => {
    const prevBtn = nav.querySelector(".prev-btn");
    const nextBtn = nav.querySelector(".next-btn");

    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        if (currentResponseIndices[index] > 0) {
            currentResponseIndices[index]--;
            displayResponse(index);
        }
    });

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        if (currentResponseIndices[index] < responsesArray[index].length - 1) {
            currentResponseIndices[index]++;
            displayResponse(index);
        }
    });
});

function initialDisplayResponse(response, index) {
    responsesArray[index] = [response];
    currentResponseIndices[index] = 0;
    displayResponse(index);
}
