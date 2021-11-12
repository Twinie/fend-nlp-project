function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res1) {
            console.log(res1.key);
            // document.getElementById('results').innerHTML = res1
            const formdata = new FormData();
            const text = "The key has been received and the server has sent the response on the API call."

            formdata.append("key", res1.key);
            formdata.append("txt", text);
            formdata.append("lang", "en");  // 2-letter code, like en es fr ...

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
                .then(response => response.json())
                .then(function (response1) {
                    document.getElementById('code').innerHTML = `CODE : ${response1.status.code}`
                    document.getElementById('credits').innerHTML = `CREDITS : ${response1.status.credits}`
                    document.getElementById('msg').innerHTML = `MESSAGE : ${response1.status.msg}`
                    document.getElementById('irony').innerHTML = `IRONY : ${response1.irony}`
                    document.getElementById('model').innerHTML = `MODEL : ${response1.status.msg}`
                    document.getElementById('sub').innerHTML = `SUBJECTIVITY : ${response1.subjectivity}`
                    document.getElementById('confidence').innerHTML = `CONFIDENCE : ${response1.confidence}`



                })

        })




}

export { handleSubmit }
