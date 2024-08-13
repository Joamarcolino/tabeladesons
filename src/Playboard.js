import './App.css';
import ahshit from './sound/ahshit.wav';
import alertmgr from'./sound/alertmgr.wav';
import WAH from'./sound/WAH.wav';
import yeahboy from'./sound/yeahboy.wav';
import windowserror from'./sound/windowserror.wav';
import WTF from'./sound/WTF.wav';
import Yolo from './sound/Yolo.wav';
import huh from'./sound/huh.wav';
import xboxstart from './sound/xboxstart.wav';
import Wow from './sound/Wow.wav';

function Playboard(){

    function play0() {
      new Audio(Wow).play()
    }
    function play1() {
      new Audio(WTF).play()
    }
    function play2() {
      new Audio(ahshit).play()
    }
    function play3() {
      new Audio(huh).play()
    }
    function play4() {
      new Audio(WAH).play()
    }
    function play5() {
      new Audio(Yolo).play()
    }
    function play6() {
      new Audio(alertmgr).play()
    }
    function play7() {
      new Audio(yeahboy).play()
    }
    function play8() {
      new Audio(xboxstart).play()
    }
    function play9() {
      new Audio(windowserror).play()
    }
    return (
  <div className="App">
    <div className='Buttons'>
      <button className='red' onClick={play0}
      >
      WOW!!
      </button>
      <button className='red' onClick={play1}
      >
      WTF?!?!
      </button>
      <button className='red' onClick={play2}
      >
      ahshit
      </button>
      <button className='red' onClick={play3}
      >
      huh
      </button>
      <button className='red' onClick={play4}
      >
      womp womp
      </button>
      <button className='red' onClick={play5}
      >
      YOLOO!!
      </button>
      <button className='red' onClick={play6}
      >
      metal gear alert
      </button>
      <button className='red'  onClick={play7}
      >
      yeeeboiii!!
      </button>
      <button className='red' onClick={play8}
      >
      xbox nostalgia
      </button >
      <button className='red' onClick={play9}
      >
      windows errozin
      </button>
      </div>
  </div>

    )}

export default Playboard;