//Place your API keys in here
const API_KEY = "Your API Key"

const submitIcon = document.querySelector('#submit-icon')
const inputElement = document.querySelector('input')
const imageSection = document.querySelector('.images-section')

const getImages = async () => {
    const options= {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": inputElement.value,
            "n": 4,
            "size": "1024x1024"

        })

    }

    try {
     const response =   await fetch('https://api.openai.com/v1/images/generations', options)
     const data =  await response.json()
        //console.log(data)
        data?.data.forEach(imageObject =>{
           const ImageContainer =  document.createElement("div")
           ImageContainer.classList.add("image-container")
           const ImageElement =  document.createElement("img")
           ImageElement.setAttribute("src", imageObject.url)
           ImageContainer.append(ImageElement)
           imageSection.appendChild(ImageContainer)

            })

    } catch (error) {
        console.error(error)
    }
}

submitIcon.addEventListener("click", getImages)