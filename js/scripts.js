let userList = document.querySelector(".user-list")
let postsList = document.querySelector(".posts-list")
let commentsList = document.querySelector(".comments-list")
let elLoader1 = document.querySelector(".loader-wrapper1")
let elLoader2 = document.querySelector(".loader-wrapper2")
let elLoader3 = document.querySelector(".loader-wrapper3")

async function userInfo(){

   elLoader1.style.display = "block";
   
   let res = await fetch(`https://jsonplaceholder.typicode.com/users`)
   
   let data = await res.json()
   
   renderUser(data, userList)

}

userInfo()

userList.addEventListener("click",async (evt) =>{

   
   if(evt.target.matches(".user")){
      elLoader2.style.display = "block";
      
      let userId = evt.target.dataset.userId;
      
      console.log(userId)
      
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      
      let data = await res.json()
      
      postsList.setAttribute("class", "post-list post-list--active")
      
      renderPost(data, postsList)
      
   }
})


postsList.addEventListener("click",async (e) =>{
   
   
   if(e.target.matches(".post")){
      elLoader3.style.display = "block";
      
      let postId = e.target.dataset.postId;
      
      console.log(postId)
      
      let res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      
      let data = await res.json()
      
      commentsList.setAttribute("class", "comments-list comments-list--active")
      
      renderComment(data, commentsList)
      
   }
})