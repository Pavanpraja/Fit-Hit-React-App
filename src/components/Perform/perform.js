import React from 'react'

function Perform() {
    const startingMinutes = 3;
let time = startingMinutes * 60;

function pause(){
    setInterval(updateCountdown, 1000);
    fhide.style.display = "none"; 
}
function pause1(){
    setInterval(updateCountdown1, 1000);
    fhide1.style.display = "none";
}
function pause2(){
    setInterval(updateCountdown2, 1000);
    fhide2.style.display = "none";
}
function pause3(){
    setInterval(updateCountdown3, 1000);
    fhide3.style.display = "none";
}
function pause4(){
    setInterval(updateCountdown4, 1000);
    fhide4.style.display = "none";
}
function pause5(){
    setInterval(updateCountdown5, 1000);
    fhide5.style.display = "none";
}
function pause6(){
    setInterval(updateCountdown6, 1000);
    fhide6.style.display = "none";
}
function pause7(){
    setInterval(updateCountdown7, 1000);
    fhide7.style.display = "none";
}
function pause8(){
    setInterval(updateCountdown8, 1000);
    fhide8.style.display = "none";
}

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown1(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl1.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown2(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl2.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown3(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl3.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown4(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl4.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown5(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl5.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown6(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl6.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown7(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl7.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown8(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl8.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
  return (
    <section id="perform">
        <h5>Some Exercises For Health</h5>
        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise-img">
                    <img src="images/BuildRipplingAbs.gif" alt="..."/>
                    <div class="h2">
                        <h2>Build Rippling Abs</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>Visible six-packs abs are a coveted goal for many fitness enthusiasts. Despite the intense aesthetic focus on this area of the body, your abs and core do far more for you than just give you a fit appearance. A strong core helps prevent falls, improves athletic performance, and reduces instances of low back pain.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>Twice</h3>
                        <h4>daily for</h4>
                        <h3 class="countdown">{countdownEl}</h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause} class="fhide"/>
                    </span>
                </div>
            </div>
        </div>

        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise3-img">
                    <img src="images/exgif.gif" alt="..."/>
                    <div class="h2">
                        <h2>Meditation</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>Meditation can give you a sense of calm, peace and balance that can benefit your emotional well-being and your overall health. You also can use it to relax and cope with stress by focusing on something that calms you.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>once</h3>
                        <h4>daily for</h4>
                        <h3 class="countdown1"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause1} class="fhide1"/>
                    </span>
                </div>
            </div>
        </div>

        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise1-img">
                    <img src="images/jumps.gif" alt="..."/>
                    <div class="h2">
                        <h2>Jump Squats</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>Because they add in a jumping component, jump squats are a plyometric variation of this bodyweight exercise. By adding a jump to your squats, you are able to develop more explosive power as your strengthen the muscles in your glutes and upper legs, particularly the quads and hamstrings.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>Twice</h3>
                        <h4>daily for</h4>
                        <h3 class="countdown2"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause2} class="fhide2"/>
                    </span>
                </div>
            </div>
        </div>

        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise-img">
                    <img src="images/invertr.gif" alt="..."/>
                    <div class="h2">
                        <h2>Inverted Row</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>It is a bodyweight exercise that challenges the performer to pull themselves towards a barbell set in the squat rack. Unlike a pull up, which uses a vertical pull, the inverted row uses a horizontal pull to target the lats, traps, rhomboids, delts, and biceps.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>Twice</h3>
                        <h4>daily for</h4>
                        <h3 class="countdown3"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause3} class="fhide3"/>
                    </span>
                </div>
            </div>
        </div>

        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise2-img">
                    <img src="images/verticlelegcrunch.gif" alt="..."/>
                    <div class="h2">
                        <h2>Vertical Leg Crunches</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>The raised-legs crunch exercise increases strength in the lower back and the entire core. The exercise also improves stability in the spine and hips. Keeping your legs raised increases total tension and time under tension on your abs, which helps activate more muscle fibers in your six pack region.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>Twice</h3>
                        <h4>daily for</h4>
                        <h3 class="countdown4"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause4} class="fhide4"/>
                    </span>
                </div>
            </div>
        </div>

        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise-img">
                    <img src="images/full-push-up.gif" alt="..."/>
                    <div class="h2">
                        <h2>Push Up</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>The push-up helps to build muscle and improve strength throughout the upper body. It targets the muscles in your chest (pectoralis major), arms (particularly the triceps) and shoulders (especially the scapular stabilising muscles).</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>Once</h3>
                        <h3 class="countdown5"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause5} class="fhide5"/>
                    </span>
                </div>
            </div>
        </div>
        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise01-img">
                    <img src="images/Bicepcurl.gif" alt="..."/>
                    <div class="h2">
                        <h2>Bicep Curl</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>Apart from building muscle size, boosting athletic performance and facilitating daily activities, bicep curls build strength in the upper arm, train shoulder to be more stable and teaches the practitioner's core to engage.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>twice</h3>
                        <h3 class="countdown6"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause6} class="fhide6"/>
                    </span>
                </div>
            </div>
        </div>
        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise02-img">
                    <img src="images/Forward Lunge.gif" alt="..."/>
                    <div class="h2">
                        <h2>Forward Lunge</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>Apart from building muscle size, boosting athletic performance and facilitating daily activities, bicep curls build strength in the upper arm, train shoulder to be more stable and teaches the practitioner's core to engage.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>twice</h3>
                        <h3 class="countdown7"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause7} class="fhide7"/>
                    </span>
                </div>
            </div>
        </div>
        <div class="home-exercises max-width-1 m-auto">
            <div class="home-exercise m-auto">
                <div class="home-exercise03-img">
                    <img src="images/glutebridgehamstringwalk-1472218392.gif" alt="..."/>
                    <div class="h2">
                        <h2>Glutebride Hamstring Walk</h2>
                    </div>
                </div>
                <div class="about-img">
                    <p>Apart from building muscle size, boosting athletic performance and facilitating daily activities, bicep curls build strength in the upper arm, train shoulder to be more stable and teaches the practitioner's core to engage.</p>
                </div>
                <div class="home-exercise-content">
                    <span>
                        <h4>You have to do this exercise</h4>
                        <h3>twice</h3>
                        <h3 class="countdown8"></h3>
                        <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/go.png" alt="play--v1" onclick={pause8} class="fhide8"/>
                    </span>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Perform
