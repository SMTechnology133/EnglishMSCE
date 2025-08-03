//This is a global JS module of the paid service

//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('show'); 
}); 

//________________________________

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//________________________________

$(document).ready (function(){
$("img").attr("loading", "lazy");
});

//________________________________

 //code to download or preview PDF
  function showPdfOptions(pdfUrl) {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("pdfModal");
    const actions = document.getElementById("pdfActions");
    const viewer = document.getElementById("pdfViewer");
    const iframe = document.getElementById("pdfFrame");

    // Reset modal
    actions.innerHTML = '';
    viewer.style.display = 'none';
    iframe.src = '';

    // Create buttons
    const previewBtn = document.createElement("button");
    previewBtn.textContent = "Preview PDF";
    previewBtn.className = "preview-btn";
    previewBtn.onclick = () => {
      viewer.style.display = 'block';
      iframe.src = pdfUrl;
    };

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download PDF";
    downloadBtn.className = "download-btn";
    downloadBtn.onclick = () => {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = pdfUrl.split('/').pop();
      link.click();
    };

    // Add buttons to modal
    actions.appendChild(previewBtn);
    actions.appendChild(downloadBtn);

    // Show modal
    overlay.style.display = "block";
    modal.style.display = "block";
  }

  function closePdfModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("pdfModal").style.display = "none";
  }
  //end code to download or preview PDF
  
//________________________________
  
  //custom alert box script
  function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    // Play the alert sound
    const sound = document.getElementById("alertSound");
    sound.currentTime = 0;
    sound.play();
  }

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
//end custom alert box script

//________________________________
  
  //javascript code to search my website globle search of the free service
//List of all the websites
    const sitePages = [
      { title: "Zoology", url: "file:///storage/emulated/0/projects/vlibrary/homePage.html" },
      
      { title: "English", url: "file:///storage/emulated/0/projects/vlibrary/africaOnline.html" },
      
      { title: "Mathematics", url: "contact.html" },
      
      { title: "Geography", url: "products.html" },
      
      { title: "Chemistry", url: "services.html" }
    ];
    //End List of all the websites

    function searchSiteGlobal() {
      const query = document.getElementById("searchBox").value.toLowerCase();
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      const matches = sitePages.filter(page =>
        page.title.toLowerCase().includes(query) || page.url.toLowerCase().includes(query)
      );

      if (matches.length === 0 && query !== "") {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      } else {
        matches.forEach(page => {
          const link = document.createElement("a");
          link.href = page.url;
          link.textContent = page.title;
          resultsDiv.appendChild(link);
        });
      }
    }
    	//end javascript code to search my website global search of the paid service
    	
//________________________________
    	
    	 	//code to share application
 	//universal functione
    function shareWebsite() {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: 'Check out this website!',
          url: window.location.href
        })
        .then(() => console.log('Thanks for sharing!'))
        .catch((error) => console.error('Sharing failed:', error));
      } else {
        alert("Your browser doesn't support the Web Share API.");
      }
    }
  //end code to share application

//________________________________

//warning not to share paid service content
 invalid=()=>{
  	alert("🔒 You are restricted to share these services, unless you are willing to cover for the cost by Sending K2000 to +265 982177920 🙊");
  }
  //end warning not to share paid service content
  
//________________________________
  
  

//________________________________
  
  //code to show update time
  // Set the post time (you can customize this)
  const postTime = new Date('2025-06-01T14:00:00'); // Example date

  function timeAgo(time) {
    const now = new Date();
    const seconds = Math.floor((now - time) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);
    const months  = Math.floor(days / 30);
    const years   = Math.floor(days / 365);

    if (seconds < 60)
      return `Updated ${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    else if (minutes < 60)
      return `Updated ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    else if (hours < 24)
      return `Updated ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    else if (days < 30)
      return `Updated ${days} day${days !== 1 ? 's' : ''} ago`;
    else if (days < 365)
      return `Updated ${months} month${months !== 1 ? 's' : ''} ago`;
    else
      return `Updated ${years} year${years !== 1 ? 's' : ''} ago`;
  }

  function updateTimestamp() {
    document.getElementById('timestamp').textContent = timeAgo(postTime);
  }

  updateTimestamp(); // Initial call
  setInterval(updateTimestamp, 30000); // Update every 30 seconds
//end code to show update time

//________________________________

//functione to change button background color on click
function color(element) {
  element.style.backgroundColor = "maroon";
}
//end functione to change button background color on click

function africaOnlineHome(){
	open("https:///www.salmandascript.github.io/AfricaOnline");
}

s300=()=>{
	open("https:///www.salmandascript.github.io/wikipedia");
}

//________________________________

//speech 3
function profiler3() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("This component is easy to use, created mobile first you can edit and run it on your smartphone, alternatively with a little knowledge you can deploy your art on the Internet. You does not need any programming knowledge to use this component, by meticulously following instructions provided in this documentation,  you can almost  create profiles on any subject of your interest. The component is for of learning web programming,  it is free you can change it, manipulate it or share it, in accordance  with terms of service. The component is a user interface, and can be used to build profiles on various subjects, from prominent people, celebrities in all fields to animals and plants, it can serve as a classification system of some sort.");
  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice
  // Speak the text
  speechSynthesis.speak(utterance);
}
//end of speech 3

msceLearning=()=>{
	
}