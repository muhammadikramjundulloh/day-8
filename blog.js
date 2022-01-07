let blogs = []
function addBlog(event){
    event.preventDefault()


    let title = document.getElementById('input-blog-title').value 
    let content = document.getElementById('input-blog-content').value 
    let image = document.getElementById('input-blog-image').files 
    console.log(image);

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog ={
        title: title,
        content: content,
        image : image,
        author : 'ikram',
        postAt : new Date()
    }

    blogs.push(blog)
    console.log(blogs);

    renderBlog()

}




function renderBlog(){
    let  contentContainer =document.getElementById('contents')

    contentContainer.innerHTML =''
    
    for (let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML +=`<div id="contents" class="blog-list">
        <!-- dynamic content would be here -->
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              ${getFullTime(new Date())} | ${blogs[i].author}
            </div>
            <p>
              ${blogs[i].content}
            </p>
            <div style="text-align: right;">
              <span style="font-size: 13px; color: grey;">${getDistanceTime(blogs[i].postAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`
    }


}



// let time = new Date()

// console.log(time);
// console.log(time.getDate());
// console.log(time.getFullYear());

// console.log(time.getHours());
// console.log(time.getMinutes());


let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'Nopember', 'Desember']

function getFullTime(time) {
  console.log(time);

  let date = time.getDate()
  console.log(date);

  let monthIndex = time.getMonth()
  console.log(month[monthIndex]);

  let year = time.getFullYear()
  console.log(year);

  let hours = time.getHours()
  let minute = time.getMinutes()

  return fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minute} WIB`

}

function getDistanceTime(time) {


  let timePost = time
  let timeNow = new Date()

  let distance = timeNow - timePost

  let miliSecond = 1000
  let secondInHours =3600
  let hoursInDay = 23 

  let minutes =60
  let seconds = 60

  let distanceDay = Math.floor(distance/(miliSecond*secondInHours*hoursInDay))
  let distanceHours = Math.floor(distance/(miliSecond*minutes*seconds))
  let distanceMinutes = Math.floor(distance/(miliSecond*seconds))
  let distanceSeconds = Math.floor(distance/(miliSecond))

  

  if (distanceDay >= 1) {
    return` ${distanceDay} day ago`;
  } else{
    if (distanceHours >= 1){
      return`${distanceHours}hours ago`;
    }else{
      if (distanceMinutes >=1){
        return`${distanceMinutes} minute ago`;
      }else{
        return`${distanceSeconds} second ago`;
      }
    }
    
  }
  }


  setInterval(() =>{
    renderBlog()
  },4000)




