const form = document.getElementById('uploadForm')

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const files = form.querySelector('input[type="file"]').files
    for (let i = 0; i < files.length; i++) {
        formData.append(`fileInput_${i}`, files[i])
    }
    const options = {
        method: 'POST',
        body: formData,
    }
    console.log(files)
    await fetch('https://httpbin.org/post',options)
    .then(resp => resp.json())
    .then(result => console.log(result.files))
    .catch(err => console.error(err))
})