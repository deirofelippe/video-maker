const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start(){
    const content = {
        maximumSentences: 7
    }
    
    content.searchTerm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()
    
    await robots.text(content)
    
    function askAndReturnSeachTerm(){
        return readline.question('Type a Wikipedia seach term: ')
    }
    
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }

    console.log(JSON.stringify(content, null, 4))
}

start()







/*
const readline = require('readline-sync')
const robots = {
    userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js')
}

function start(){
    const content = {}
    
    robots.userInput(content)
    robots.text(content)
    
    console.log(content)
}

start()
*/
