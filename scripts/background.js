let pri = document.getElementById("pri_head");

let head_arr = ["Welcome,", "Swagata,", "Swaghatham,","Swaghat he,", "Bienvenu,", "Bienvenidos,", "أهلا بك,"];
pri.innerHTML = head_arr[0]
let j = 1;
let i = 2;
setInterval(() => {
    if (i == 6){
        i = 1;
    }
    document.getElementById("primary").style.transitionDelay = "1000ms";
    document.getElementById("primary").style.backgroundImage = `url('https://captcha781.github.io/wildoak/assets/mains/main-bg${i}.jpg')`;
    document.getElementById("primary").style.transitionDuration = "1000ms";
    document.getElementById("primary").style.transitionTimingFunction = "ease";
    console.log(`url('/assets/mains/main-bg${i}.jpg')`);
    i += 1
    pri.innerHTML = '';
    comer();
},5000);

const comer = () => {
    if (j>= head_arr.length){
        j = 0
    }
    let k = head_arr[j].split("")
    let p =1;
    pri.innerHTML = k[0]
    setInterval(() => {
        if(!k[p]){
            k[p]=""
        }
        pri.innerHTML += k[p]
        p += 1
    },300);
    
    j+=1
}



