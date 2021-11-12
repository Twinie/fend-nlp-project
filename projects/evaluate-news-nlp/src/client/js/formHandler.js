function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res1) {
            console.log(res1);
            // document.getElementById('results').innerHTML = res1

            const formdata = new FormData();
            formdata.append("key", res1);
            formdata.append("txt", "Successfully Submitted");
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



                })

        })




}

export { handleSubmit }
