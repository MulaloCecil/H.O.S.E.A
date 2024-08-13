
//get link and additional content elements
 const showUserCentric = document.getElementById('showUserCentric');

 const usercentric = document.getElementById('usercentric');

showUserCentric.addEventListener('click',(event)=>{
    event.preventDefault();
 if(usercentric.style.display === "none" || usercentric.style.display === "")
 {
    usercentric.style.display = "flex";  
 }
 else{
    usercentric.style.display = "none";
    
 }
}
)
// Function to show the selected content and hide others
function showContent(contentId) {
    // Hide all content boxes
    document.querySelectorAll('.choose_box').forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected content box
    document.getElementById(contentId).style.display = 'block';
}

// Event listeners for each link
document.getElementById('showInnovative').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('defaultContent');
});

document.getElementById('showUserCentric').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('userCentricContent');
});

document.getElementById('showGlobalVision').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('globalVisionContent');
});

document.getElementById('showKnowledgeable').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('knowledgeableContent');
});
