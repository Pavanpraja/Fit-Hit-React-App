import React, { useState } from "react";
import './perform.css'
import '../../App.css'
import Navbar from "../navbar";
import Footer from "../footer";
function Perform() {
  const [minute, setMinute] = useState(0);
  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);
  const [minute3, setMinute3] = useState(0);
  const [minute4, setMinute4] = useState(0);
  const [minute5, setMinute5] = useState(0);
  const [minute6, setMinute6] = useState(0);
  const [minute7, setMinute7] = useState(0);
  const [minute8, setMinute8] = useState(0);
  const [second, setSecond] = useState(0);
  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);
  const [second3, setSecond3] = useState(0);
  const [second4, setSecond4] = useState(0);
  const [second5, setSecond5] = useState(0);
  const [second6, setSecond6] = useState(0);
  const [second7, setSecond7] = useState(0);
  const [second8, setSecond8] = useState(0);
  const startingMinutes = 3;
  let time = startingMinutes * 60;

  function pause() {
    setInterval(updateCountdown, 1000);
  }
  function pause1() {
    setInterval(updateCountdown1, 1000);
  }
  function pause2() {
    setInterval(updateCountdown2, 1000);
  }
  function pause3() {
    setInterval(updateCountdown3, 1000);
  }
  function pause4() {
    setInterval(updateCountdown4, 1000);
  }
  function pause5() {
    setInterval(updateCountdown5, 1000);
  }
  function pause6() {
    setInterval(updateCountdown6, 1000);
  }
  function pause7() {
    setInterval(updateCountdown7, 1000);
  }
  function pause8() {
    setInterval(updateCountdown8, 1000);
  }

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    setMinute(minutes);
    setSecond(seconds);
    time--;
  }
  function updateCountdown1() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    setMinute1(minutes);
    setSecond1(seconds);
    time--;
  }
  function updateCountdown2() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    setMinute2(minutes);
    setSecond2(seconds);
    time--;
  }
  function updateCountdown3() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    time--;
    setMinute3(minutes);
    setSecond3(seconds);
  }
  function updateCountdown4() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    time--;
    setMinute4(minutes);
    setSecond4(seconds);
  }
  function updateCountdown5() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    time--;
    setMinute5(minutes);
    setSecond5(seconds);
  }
  function updateCountdown6() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    time--;
    setMinute6(minutes);
    setSecond6(seconds);
  }
  function updateCountdown7() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    time--;
    setMinute7(minutes);
    setSecond7(seconds);
  }
  function updateCountdown8() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;
    time--;
    setMinute8(minutes);
    setSecond8(seconds);
  }
  return (
    <>
    <Navbar />
    <section id="perform">
      <h5>Some Exercises For Health</h5>
      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise-img">
            <img src="BuildRipplingAbs.gif" alt="..." />
            <div className="h2">
              <h2>Build Rippling Abs</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              Visible six-packs abs are a coveted goal for many fitness
              enthusiasts. Despite the intense aesthetic focus on this area of
              the body, your abs and core do far more for you than just give you
              a fit appearance. A strong core helps prevent falls, improves
              athletic performance, and reduces instances of low back pain.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>Twice</h3>
              <h4>daily for</h4>
              <h3 className="countdown">
                0{minute}: {second}
              </h3>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause}
                className="fhide"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise3-img">
            <img src="exgif.gif" alt="..." />
            <div className="h2">
              <h2>Meditation</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              Meditation can give you a sense of calm, peace and balance that
              can benefit your emotional well-being and your overall health. You
              also can use it to relax and cope with stress by focusing on
              something that calms you.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>once</h3>
              <h4>daily for</h4>
              <h3 className="countdown1">
                0{minute1}: {second1}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause1}
                className="fhide1"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise1-img">
            <img src="jumps.gif" alt="..." />
            <div className="h2">
              <h2>Jump Squats</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              Because they add in a jumping component, jump squats are a
              plyometric variation of this bodyweight exercise. By adding a jump
              to your squats, you are able to develop more explosive power as
              your strengthen the muscles in your glutes and upper legs,
              particularly the quads and hamstrings.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>Twice</h3>
              <h4>daily for</h4>
              <h3 className="countdown2">
                0{minute2}: {second2}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause2}
                className="fhide2"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise-img">
            <img src="invertr.gif" alt="..." />
            <div className="h2">
              <h2>Inverted Row</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              It is a bodyweight exercise that challenges the performer to pull
              themselves towards a barbell set in the squat rack. Unlike a pull
              up, which uses a vertical pull, the inverted row uses a horizontal
              pull to target the lats, traps, rhomboids, delts, and biceps.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>Twice</h3>
              <h4>daily for</h4>
              <h3 className="countdown3">
                0{minute3}: {second3}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause3}
                className="fhide3"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise2-img">
            <img src="verticlelegcrunch.gif" alt="..." />
            <div className="h2">
              <h2>Vertical Leg Crunches</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              The raised-legs crunch exercise increases strength in the lower
              back and the entire core. The exercise also improves stability in
              the spine and hips. Keeping your legs raised increases total
              tension and time under tension on your abs, which helps activate
              more muscle fibers in your six pack region.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>Twice</h3>
              <h4>daily for</h4>
              <h3 className="countdown4">
                0{minute4}: {second4}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause4}
                className="fhide4"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise-img">
            <img src="full-push-up.gif" alt="..." />
            <div className="h2">
              <h2>Push Up</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              The push-up helps to build muscle and improve strength throughout
              the upper body. It targets the muscles in your chest (pectoralis
              major), arms (particularly the triceps) and shoulders (especially
              the scapular stabilising muscles).
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>Once</h3>
              <h3 className="countdown5">
                0{minute5}: {second5}
              </h3>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause5}
                className="fhide5"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise01-img">
            <img src="Bicepcurl.gif" alt="..." />
            <div className="h2">
              <h2>Bicep Curl</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              Apart from building muscle size, boosting athletic performance and
              facilitating daily activities, bicep curls build strength in the
              upper arm, train shoulder to be more stable and teaches the
              practitioner's core to engage.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>twice</h3>
              <h3 className="countdown6">
                0{minute6}: {second6}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause6}
                className="fhide6"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise02-img">
            <img src="Forward Lunge.gif" alt="..." />
            <div className="h2">
              <h2>Forward Lunge</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              Apart from building muscle size, boosting athletic performance and
              facilitating daily activities, bicep curls build strength in the
              upper arm, train shoulder to be more stable and teaches the
              practitioner's core to engage.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>twice</h3>
              <h3 className="countdown7">
                0{minute7}: {second7}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause7}
                className="fhide7"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="home-exercises max-width-1 m-auto">
        <div className="home-exercise m-auto">
          <div className="home-exercise03-img">
            <img
              src="glutebridgehamstringwalk-1472218392.gif"
              alt="..."
            />
            <div className="h2">
              <h2>Glutebride Hamstring Walk</h2>
            </div>
          </div>
          <div className="about-img">
            <p>
              Apart from building muscle size, boosting athletic performance and
              facilitating daily activities, bicep curls build strength in the
              upper arm, train shoulder to be more stable and teaches the
              practitioner's core to engage.
            </p>
          </div>
          <div className="home-exercise-content">
            <span>
              <h4>You have to do this exercise</h4>
              <h3>twice</h3>
              <h3 className="countdown8">
                0{minute8}: {second8}
              </h3>{" "}
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/go.png"
                alt="play--v1"
                onClick={pause8}
                className="fhide8"
              />
            </span>
          </div>
        </div>
      </div>
      <hr />
    </section>
    <Footer />
    </>
  );
}

export default Perform;
