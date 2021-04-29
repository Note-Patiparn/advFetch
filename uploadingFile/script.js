const form = document.getElementById('uploadForm')

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const options = {
        method: 'POST',
        body: formData
    }
    await fetch('https://httpbin.org/post',options)
    .then(resp => resp.json())
    .then(result => console.log(result.files))
    .catch(err => console.error(err))
})