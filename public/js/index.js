// const fetch = require('node-fetch');

const url = 'https://genius.p.rapidapi.com/search?q=Believer';



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '995f6849c8mshc8e9669a26f3716p1c78dejsn7bab16f6344a',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
};

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json =>{
//     json.response.hits.forEach(ele => {
//       document.querySelector('.cards').innerHTML += `
//           <li>
//           <div class="card">
//             <img src="${ele.result.song_art_image_thumbnail_url}" class="card__image" alt="" />
//             <div class="card__overlay">        
//               <div class="card__header">
//                 <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
//                 <img class="card__thumb" src="${ele.result.primary_artist.image_url}" alt="" />
//                 <div class="card__header-text">
//                   <h3 class="card__title">${ele.result.artist_names}</h3>
//                   <span class="card__status">${ele.result.release_date_for_display}</span>
//                 </div>
//               </div>
//               <p class="card__description">
//                     <span>${ele.result.full_title}</span> 
//                     <a href = "${ele.result.url}" target = "_blank" class = "go-link"><i class="fa-solid fa-circle-play"></i></a>

//               </p>
             
//             </div>
//           </div>
//         </li>
//       `
//     })
//   })
// 	.catch(err => console.error('error:' + err));


const input = document.querySelector('.search-input')
const submit = document.querySelector('.search-btn')

submit.addEventListener('click',(e) => {
  e.preventDefault()
  fetch(`/search-song/${input.value}`)
  .then(req => req.json())
  .then(data => {
    data.forEach(ele => {
      document.querySelector('.cards').innerHTML += `
      <li>
      <div class="card">
        <img src="${ele.result.song_art_image_thumbnail_url}" class="card__image" alt="" />
        <div class="card__overlay">        
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
            <img class="card__thumb" src="${ele.result.primary_artist.image_url}" alt="" />
            <div class="card__header-text">
              <h3 class="card__title">${ele.result.artist_names}</h3>
              <span class="card__status">${ele.result.release_date_for_display}</span>
            </div>
          </div>
          <p class="card__description">
                <span>${ele.result.full_title}</span> 
                <a href = "${ele.result.url}" target = "_blank" class = "go-link"><i class="fa-solid fa-circle-play"></i></a>
    
          </p>
         
        </div>
      </div>
    </li>
    `
    })
  })
  .catch(err => {
    console.log('error')
  })
})



