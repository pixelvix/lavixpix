async function loadIncludes(){
        const headerResponse = await fetch('header.html');
        const footerResponse = await fetch('footer.html');

        if (headerResponse.ok){
            document.getElementById('header').innerHTML = await headerResponse.text();
        }
        if (footerResponse.ok){
            document.getElementById('footer').innerHTML = await footerResponse.text();
        }


    document.addEventListener('DOMContentLoaded', loadIncludes)
}