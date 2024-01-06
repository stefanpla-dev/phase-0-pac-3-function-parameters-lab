function introduction(name){
    return `Hi, my name is ${name}.`
}
module.exports = {
    introduction
};
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
module.exports = {
    introductionWithLanguage
};
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
module.exports = {
    introductionWithLanguageOptional
}