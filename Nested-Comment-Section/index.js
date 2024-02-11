const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};
// console.log(data.currentUser.image.png);

const container = document.querySelector("#container");
const cardWrapper = document.querySelector(".card-wrapper");

for(let i=0;i<data.comments.length;i++) {
  // const cardAboveDiv = document.e
    const div = document.createElement("div");
    div.setAttribute("id",`${data.comments[i].id}`)
    div.classList.add("card");
    div.innerHTML += `
    <div id="upvotes">
    <img src="./images/icon-plus.svg" alt="plus-img" id="plus-img">
    <h5 class="upvote-num">${data.comments[i].score}</h5>
    <img src="./images/icon-minus.svg" alt="minus-img" id="minus-img">
  </div>

  <div id="card-top">
    <img src="${data.comments[i].user.image.png}" alt="avatar-img">
    <h3 class="user-name">${data.comments[i].user.username}</h3>
    <h3 class="time-of-upload">${data.comments[i].createdAt}</h3>
    <div id="reply-container">
      <img src="./images/icon-reply.svg" alt="reply-img">
      <h3>Reply</h3>
    </div>
  </div>
 
  <div id="card-bottom">
    <p class="comment-text">${data.comments[i].content}</p>
  </div>

`;
cardWrapper.appendChild(div)
}

for(let i=0;i<data.comments[1].replies.length;i++) {
    const cardd = document.createElement("div");
    // const replyDivContainer = document.createElement("div");
    // replyDivContainer.setAttribute("class","reply-div-container");
  cardd.setAttribute("id",`${data.comments[1].replies[i].id}`);
  cardd.classList.add("card","reply-card");
    if(i === 0) {
    cardd.innerHTML += `
      <hr>
        <div id="upvotes">
        <img src="./images/icon-plus.svg" alt="plus-img" id="plus-img">
        <h5 class="upvote-num">${data.comments[1].replies[i].score}</h5>
        <img src="./images/icon-minus.svg" alt="minus-img" id="minus-img">
      </div>
    
      <div id="card-top">
        <img src="${data.comments[1].replies[i].user.image.png}" alt="avatar-img">
        <h3 class="user-name">${data.comments[1].replies[i].user.username}</h3>
        <h3 class="time-of-upload">${data.comments[1].replies[i].createdAt}</h3>
        <div id="reply-container">
          <img src="./images/icon-reply.svg" alt="reply-img">
          <h3>Reply</h3>
        </div>
      </div>
     
      <div id="card-bottom">
        <p class="comment-text" style="margin:0;left:-78%">${data.comments[1].replies[i].content}</p>
      </div>
    
      `;
    }
    else {
    cardd.setAttribute("id","last-div")
    cardd.innerHTML += `
        <hr>
        <div id="upvotes">
        <img src="./images/icon-plus.svg" alt="plus-img" id="plus-img">
        <h5 class="upvote-num">${data.comments[1].replies[i].score}</h5>
        <img src="./images/icon-minus.svg" alt="minus-img" id="minus-img">
      </div>
    
      <div id="card-top">
        <img src="${data.comments[1].replies[i].user.image.png}" alt="avatar-img">
        <h3 class="user-name">${data.comments[1].replies[i].user.username}</h3>
        <div id="you-text">you</div>
        <h3 class="time-of-upload">${data.comments[1].replies[i].createdAt}</h3>
        <div id="delete-reply">
      <img src="./images/icon-delete.svg" alt="delete-reply-img">
      <h3>Delete</h3>
    </div>
    <div id="edit-reply">
      <img src="./images/icon-edit.svg" alt="edit-reply-img">
      <h3>Edit</h3>
    </div>
      </div>
     
      <div id="card-bottom">
        <p class="comment-text" style="margin:0;left:-78%">${data.comments[1].replies[i].content}</p>
      </div>
    
      `;
    }
      cardWrapper.appendChild(cardd);
    }
    
    
//SEND COMMENT & APPEND IT TO CARDWRAPPER*****
const sendComment = document.querySelector("#send-btn");

sendComment.addEventListener("click",(e)=> {
  const div = document.createElement("div")
  const sendCommentt = document.getElementById("sendcomment-text");
  div.classList.add("card")
      div.classList.add("reply-card")
      div.classList.remove("input-div")
      div.innerHTML = `
      <hr>
      <div id="upvotes">
      <img src="./images/icon-plus.svg" alt="plus-img" id="plus-img">
      <h5 class="upvote-num">12</h5>
      <img src="./images/icon-minus.svg" alt="minus-img" id="minus-img">
    </div>

    <div id="card-top">
    <img src="${data.currentUser.image.png}" alt="avatar-img">
    <h3 class="user-name">${data.currentUser.username}</h3>
    <div id="you-text">you</div>
    <h3 class="time-of-upload">1 minutes ago</h3>
    <div id="delete-reply" onclick="ReplyDelete('${div.className}')">
      <img src="./images/icon-delete.svg" alt="delete-reply-img">
      <h3>Delete</h3>
    </div>
    <div id="edit-reply" onclick="EditReply('${div.className}')">
      <img src="./images/icon-edit.svg" alt="edit-reply-img">
      <h3>Edit</h3>
    </div>
  </div>
 
  <div id="card-bottom" style="margin:0;left:-78%">
    <p class="comment-text">${sendCommentt.value}</p>
  </div>
  `

  cardWrapper.appendChild(div);
})  

//when reply button is clicked....

const replyBtn = document.querySelectorAll("#reply-container");

replyBtn.forEach((btn)=> {
  btn.addEventListener("click",(e) => {
    // console.log(index)
    //make reply section the btn it is clicked on
    let node = e.target.closest(".card-wrapper>.card");
    //make div and set class
    let div = document.createElement('div');
    div.setAttribute("class","input-div");

    //add children like input, img , btn send...
    let img = document.createElement("img");
    let input = document.createElement("input");
    let sendReplyBtn = document.createElement("button");
  
    //adding classes on img, input and sendReplyBtn elements
    img.setAttribute("class","reply-img");

    sendReplyBtn.setAttribute("class","sendReply-btn")
    
    //setting innerHTML of input, img and sendReplyBtn
    img.src = `${data.currentUser.image.png}`;
    // console.log(input.value = `${node.username}`);
    sendReplyBtn.innerText = "REPLY";

    //append it here
    div.appendChild(img);
    div.appendChild(input);
    div.appendChild(sendReplyBtn);
    
   // append newDiv to card-wrapper 
    node.parentNode.insertBefore(div,node.nextSibling);

    sendReplyBtn.addEventListener("click",() => {
      div.classList.add("card")
      div.classList.add("reply-card")
      div.classList.remove("input-div")
      div.innerHTML = `
      <hr>
      <div id="upvotes">
      <img src="./images/icon-plus.svg" alt="plus-img" id="plus-img">
      <h5 class="upvote-num">12</h5>
      <img src="./images/icon-minus.svg" alt="minus-img" id="minus-img">
    </div>

    <div id="card-top">
    <img src="${data.currentUser.image.png}" alt="avatar-img">
    <h3 class="user-name">${data.currentUser.username}</h3>
    <div id="you-text">you</div>
    <h3 class="time-of-upload">1 minutes ago</h3>
    <div id="delete-reply">
      <img src="./images/icon-delete.svg" alt="delete-reply-img">
      <h3>Delete</h3>
    </div>
    <div id="edit-reply">
      <img src="./images/icon-edit.svg" alt="edit-reply-img">
      <h3>Edit</h3>
    </div>
  </div>
 
  <div id="card-bottom" style="margin:0;left:-78%">
    <p class="comment-text">${input.value}</p>
  </div>
`

//DELETE REPLY BTN ******
  const deleteReply = document.querySelector("#delete-reply");
  // Delete Modal Div Creation
  deleteReply.addEventListener("click", () => {
    container.classList.add("opacity")
    //delete modal innerhtml and styling
    const deleteModalDiv = document.createElement("div");
    deleteModalDiv.setAttribute("class","delete-modal")
    deleteModalDiv.innerHTML = `
    <h3>Delete comment</h3>
    <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
    <div id="delete-container">
    <button class="canceldel-btn">NO, CANCEL</button>
    <button class="delete-btn">YES, DELETE</button>
    </div>
    `
    document.body.prepend(deleteModalDiv)
    
    const yesDelete = document.querySelector(".delete-btn")
    const canceldel = document.querySelector(".canceldel-btn");
    
    //deleting reply if btn is clicked
    yesDelete.addEventListener("click",()=> {
      div.remove();
      deleteModalDiv.remove()
      container.classList.remove("opacity")
    });

    //not deleting the reply if Cancel-btn is clicked
    canceldel.addEventListener("click",()=> {
      deleteModalDiv.remove();
      container.classList.remove("opacity");
    })
  })

  //EDIT REPLY BTN ******
  const editReply = document.querySelector("#edit-reply");
  // const commentText = document.querySelector(".comment-text");
  editReply.addEventListener("click", ()=> {
    const textArea = document.createElement("textarea");
    //appending a textArea to the reply div for editing the reply
    textArea.innerText = input.value;
    div.querySelector("p").textContent = "";
    // input.innerHTML = "";
    div.appendChild(textArea);
    
    // UPDATE REPLY BTN ******

    // adding a update reply btn to update the reply
    const updateReplyBtn = document.createElement("button");
    updateReplyBtn.innerText = "Update";
    updateReplyBtn.setAttribute("class","update-reply");
    div.appendChild(updateReplyBtn);

    //click event
    updateReplyBtn.addEventListener("click",()=> {
      div.querySelector("p").textContent = textArea.value;
      div.removeChild(textArea);
      div.removeChild(updateReplyBtn);
      // console.log(input.value)
    })
  })
    });
  });
});


function ReplyDelete(classname){
  const div = document.getElementsByClassName(classname);
  // div[0].parentElement.removeChild(div[0]);
  console.log(div)
  container.classList.add("opacity")
    //delete modal innerhtml and styling
    const deleteModalDiv = document.createElement("div");
    deleteModalDiv.setAttribute("class","delete-modal")
    deleteModalDiv.innerHTML = `
    <h3>Delete comment</h3>
    <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
    <div id="delete-container">
    <button class="canceldel-btn">NO, CANCEL</button>
    <button class="delete-btn">YES, DELETE</button>
    </div>
    `
    document.body.prepend(deleteModalDiv)
    
    const yesDelete = document.querySelector(".delete-btn")
    const canceldel = document.querySelector(".canceldel-btn");
    
    //deleting reply if btn is clicked
    yesDelete.addEventListener("click",()=> {
      div[2].remove();
      deleteModalDiv.remove()
      container.classList.remove("opacity")
    });
    
    //not deleting the reply if Cancel-btn is clicked
    canceldel.addEventListener("click",()=> {
      deleteModalDiv.remove();
      container.classList.remove("opacity");
    })
}

function EditReply(classname) {
  const sendComment = document.querySelector(".commentsend-div");
  const getComment = document.getElementsByClassName(classname);
  const textarea = document.createElement("textarea");
  const getCommentText = getComment[2].querySelector("#card-bottom>p");
  textarea.textContent = getCommentText.textContent;
  sendComment.querySelector("textarea").value = "";
  getComment[2].appendChild(textarea);

  // UPDATE REPLY BTN ******

    // adding a update reply btn to update the reply
    const updateReplyBtn = document.createElement("button");
    updateReplyBtn.innerText = "Update";
    updateReplyBtn.setAttribute("class","update-reply");
    
    // updating the reply when update btn is clicked
    updateReplyBtn.addEventListener("click",()=> {
      getCommentText.textContent = textarea.value;
      getComment[2].removeChild(textarea)
      getComment[2].removeChild(updateReplyBtn)
    })
    getComment[2].appendChild(updateReplyBtn);
  console.log()
}
