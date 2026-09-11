function fitTextToWidth(element, maxFontSize = 100, minFontSize = 8) {
    const parent = element.parentElement;
    if (!parent) return;

    const parentWidth = parent.clientWidth;

    let low = minFontSize;
    let high = maxFontSize;
    let best = minFontSize;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        element.style.fontSize = mid + "px";

        if (element.scrollWidth <= parentWidth) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    element.style.fontSize = best + "px";
}

async function loadIncludes(){
    try {
                const headerResponse = await fetch('header.html');
                const footerResponse = await fetch('footer.html');
                
                if (headerResponse.ok) {
                    document.getElementById('header').innerHTML = await headerResponse.text();
                }
                
                if (footerResponse.ok) {
                    document.getElementById('footer').innerHTML = await footerResponse.text();
                }
            } catch (error) {
                console.error('Error loading includes:', error);
            }
        }

    document.addEventListener('DOMContentLoaded', loadIncludes);

window.addEventListener("load", fitAllMonthTexts);
window.addEventListener("resize", fitAllMonthTexts)
