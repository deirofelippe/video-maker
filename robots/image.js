const imageDownloader = require('image-downloader')
const google = require('googleapis').google
const customSearch = google.customsearch('v1')

const googleSearchCredentials = require('../credentials/google-search.json')

async function robot(){
    const content = state.load()
    
    console.log('- Buscando imagens de sentenças...')
    await fetchImagesOfAllSentences(content)
    
    console.log('- Fazendo download de imagens...')
    await downloadAllImages(content)
    
    state.save(content)
    
    async function fetchImagesOfAllSentences(content){
        for(let sentenceIndex = 0; sentenceIndex < content.sentences.length; sentenceIndex++){
            let query

            if(sentenceIndex === 0){
                query = `${content.searchTerm}`
            }else{
                query = `${content.searchTerm} ${content.sentences[sentenceIndex].keywords[0]}`
            }

            content.sentences[sentenceIndex].images = await fetchGoogleAndReturnImagesLinks(query)
            content.sentences[sentenceIndex].googleSeachQuery = query
        }
    }
    
    async function fetchGoogleAndReturnImagesLinks(query){
        const response = await customSearch.cse.list({
            auth: googleSearchCredentials.apiKey,
            cx: googleSearchCredentials.searchEngineId,
            q: query,
            searchType: 'image',
            num: 2
        })
        
        const imagesUrl = response.data.items.map((item) => {
            return item.link
        })
        
        return imagesUrl
    }
    
    async function downloadAllImages(content){
        content.downloadedImages = []

        for(let sentenceIndex = 0; sentenceIndex < content.sentences.length; sentenceIndex++){
            const images = content.sentences[sentenceIndex].images

            for(let imageIndex = 0; imageIndex < images.length; imageIndex++){
                const imageUrl = images[imageIndex]

                try {
                    if(content.downloadedImages.includes(imageUrl)){
                        throw new Error('Imagem já foi baixada')
                    }

                    await downloadAndSave(imageUrl, `${sentenceIndex}-original.png`)
                    content.downloadedImages.push(imageUrl)
                    console.log(`> [${sentenceIndex}][${imageIndex}] Baixou imagem com sucesso: ${imageUrl}`)
                    break
                } catch (error) {
                    console.log(`> [${sentenceIndex}][${imageIndex}] Erro ao baixar (${imageUrl}): ${error}`)
                }
            }
        }
    }
    
    async function downloadAndSave(url, fileName){
        return imageDownloader.image({
            url: url,
            dest: `./content/${fileName}`
        })
    }
}

module.exports = robot
