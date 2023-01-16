//
//  RCTTimeAnnouncer.m
//  TimeAnnouncer
//
//  Created by Kartheek Chintalapati on 1/15/23.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(TimeAnnouncer, NSObject)

RCT_EXTERN_METHOD(CalloutTime: (NSString)speechString)
RCT_EXTERN_METHOD(StopCallout)

@end
