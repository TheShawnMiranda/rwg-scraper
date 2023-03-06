(() => {
  const listItems = document.querySelectorAll('.support')
  let wordsArray = []
  for (let listItem of listItems) {
    wordsArray.push(listItem.textContent)
  }
  return wordsArray
})()