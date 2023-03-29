

  const scriptURL = 'https://script.google.com/macros/s/AKfycby8W--so68dvPNHqRRn8QTSQ1nSkPObRhs0fnVDqhD07uMgfpdW1elNeS70aJP_-tWk/exec'
  const form1 = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    onSubmit={(e)=>e.preventDefault()}
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("form subbmitted successfully....!"))
      .catch(error => console.error('Error!', error.message))
  })

