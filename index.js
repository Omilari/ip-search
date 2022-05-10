let ipss = document.getElementById('rec-input')
let submitBtn = document.getElementById('submit-btn')
const divdi = document.getElementById('divid')

const options = {
};

submitBtn.addEventListener('click', function(){
    fetch(`http://ipinfo.io/${ipss.value}?token=a9dd8c0b0dd6be`)
    .then(response => response.json())
    .then(response => {console.log(response)
        renderPerson(response)
    
    })
    .catch(err => console.log(err));

})


function renderPerson(response){
    const { city, ip, region, hostname, postal, org, country, loc } = response;
    let something = `<div class="card" style="width:40%; height:40%">
            <div class="container">
                <h2><b>${ip}</b></h2>
                <h3>hostname: ${hostname}</h3>
                <h3>organization: ${org}</h3>
                <h3>exact loc: ${loc}</h3>
                <h3>country: ${country}</h3>
                <h3>${city} ${region}, ${postal} </h3>
            </div>
        </div>`;
    divdi.innerHTML = something
    
}