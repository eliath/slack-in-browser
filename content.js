const minBackoff = 200;   // 200ms
const maxBackoff = 10000; // 10s

const backoff = async (depth = 0) => {
    let waitTime = 2 ** depth;
    if (waitTime < minBackoff) { waitTime = minBackoff }
    if (waitTime > maxBackoff) { waitTime = maxBackoff }
    await new Promise(resolve => setTimeout(resolve, waitTime));
};


const init = async () => {
    let link = "";
    for (let i = 0; i < 16; i++) {
        try {
            let a = Array.from(document.querySelectorAll("a"))
                .find(a => a.href.includes("/messages/"));
            link = a.href;
        } catch (error) {
            console.log(`[slack-in-browser] link not found (attempt ${i})`);
            await backoff(i);
        }
    }
    if (link === "") {
        alert("ask extension developer slack-in-browser@eliath.biz to fix this issue");
    } else {
        window.location = link;
    }
};

init();
