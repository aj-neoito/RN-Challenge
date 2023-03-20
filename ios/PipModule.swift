//
//  PipModule.swift
//  RNChallenge
//
//  Created by Ajo Alex on 20/03/23.
//

import Foundation
import AVKit

@objc(PipModule) class PipModule: NSObject {
  
  var pipController: AVPictureInPictureController!
  @objc public func EnterPipMode() {
    if(AVPictureInPictureController.isPictureInPictureSupported()){
      pipController = AVPictureInPictureController()
      pipController.startPictureInPicture()
    }else{
      print("pip not suported")
    }
  }
}

