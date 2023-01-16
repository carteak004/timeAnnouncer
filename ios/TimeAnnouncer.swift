//
//  TimeAnnouncer.swift
//  TimeAnnouncer
//
//  Created by Kartheek Chintalapati on 1/15/23.
//

import Foundation
import AVFAudio

@objc(TimeAnnouncer)
class TimeAnnouncer: NSObject{
  
  let synthesizer = AVSpeechSynthesizer();
  
  @objc
  func CalloutTime(_ speechString: NSString){
    print("initial", speechString);
    let speech = AVSpeechUtterance(string: (speechString != "" ? speechString : "this is a test" ) as String);
    synthesizer.speak(speech);
    print("final");
  }
  
  @objc
  func StopCallout(){
    if synthesizer.isSpeaking {
      synthesizer.stopSpeaking(at: AVSpeechBoundary.immediate);
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool{
    return true;
  }
}
