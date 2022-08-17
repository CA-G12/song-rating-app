const renderDom = (data) => {
     document.querySelector('.cards').textContent = ''
     data.forEach(ele => {
          const listItem = document.createElement('li')


          const card = document.createElement('div')
          card.classList.add('card')

          const img = document.createElement('img')
          img.classList.add('card__image')
          img.src = ele.result.song_art_image_thumbnail_url 
          img.alt = ""

          const overlay = document.createElement('div')
          overlay.classList.add('card__overlay')

          const cardHeader = document.createElement('div')
          cardHeader.classList.add('card__header')

          const svg = `<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>`


          const thumb = document.createElement('img')
          thumb.classList.add('card__thumb')
          thumb.src = ele.result.primary_artist.image_url
          thumb.alt = ""

          const headerText = document.createElement('div')
          headerText.classList.add('card__header-text')


          const h3 = document.createElement('h3')
          h3.classList.add('card__title')
          h3.textContent = ele.result.artist_names

          const span = document.createElement('span')
          span.classList.add('card__status')
          span.textContent = ele.result.release_date_for_display


          const desc = document.createElement('p')
          desc.classList.add('card__description')

          const descSpan = document.createElement('span')
          descSpan.textContent = ele.result.full_title

          const link = document.createElement('a')
          link.classList.add('go-link')
          link.target = 'blank'
          link.href = ele.result.url 

          const icon = document.createElement('i')
          icon.classList.add('fa-solid','fa-circle-play') 

          link.appendChild(icon)

          desc.appendChild(descSpan)
          desc.appendChild(link)


          headerText.appendChild(h3)
          headerText.appendChild(span)

          cardHeader.innerHTML += svg 
          cardHeader.appendChild(thumb)
          cardHeader.appendChild(headerText)

          overlay.appendChild(cardHeader)
          overlay.appendChild(desc)

          card.appendChild(img)
          card.appendChild(overlay)

          listItem.appendChild(card)
          document.querySelector('.cards').appendChild(listItem)
     })
}

const url = 'https://genius.p.rapidapi.com/search?q=Believer';



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '995f6849c8mshc8e9669a26f3716p1c78dejsn7bab16f6344a',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
};




const input = document.querySelector('.search-input')
const submit = document.querySelector('.search-btn')

submit.addEventListener('click',(e) => {
  e.preventDefault()
  if(input.value.trim() != ''){
      fetch(`/search-song/${input.value}`)
      .then(req => req.json())
      .then(data => {
          renderDom(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
})



